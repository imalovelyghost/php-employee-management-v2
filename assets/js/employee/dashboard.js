import { controller } from "./employeeController.js";

var baseUrl = document.querySelector(".navbar").dataset["url"];

$("#grid_table").jsGrid({
    width: "100%",
    height: "auto",

    filtering: false,
    inserting: true,
    editing: true,
    sorting: true,
    paging: true,
    autoload: true,
    pageSize: 10,
    pageButtonCount: 10,

    controller: controller,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "text",
            width: 100,
            validate: "required",
            css: 'bordersAndBackground',
            headercss: 'backgroundHeader'

        },
        {
            name: "email",
            title: "Email",
            type: "text",
            width: 150,
            validate: [
                "required",
                {
                    message: "Please put a valid email address",
                    validator: function(value, item) {
                        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
                    },
                }
            ],
            css: 'bordersAndBackground',
            headercss: 'backgroundHeader'

        },

        {
            name: "age",
            title: "Age",
            type: "text",
            width: 50,
            css: 'backgroundRed',
            validate: {
                validator: function(value) {
                    if (value >= 18 && value < 80) {
                        return true;
                    }
                },
                message: function(value, item) {
                    return "The client age should be between 0 and 80. Entered age is \"" + value + "\" is out of specified range.";
                },
                param: [18, 80]
            },
            css: 'bordersAndBackground',
            headercss: 'backgroundHeader'

        },
        {
            name: 'streetAddress',
            title: 'Address',
            type: 'text',
            width: '100',
            headercss: 'backgroundHeader',
            validate: 'required',
            css: 'bordersAndBackground'
        },
        {
            name: 'city',
            title: 'City',
            type: 'text',
            width: '100',
            validate: 'required',
            headercss: 'backgroundHeader',
            css: 'bordersAndBackground'
        },
        {
            name: 'state',
            title: 'State',
            type: 'text',
            width: '50',
            headercss: 'backgroundHeader',
            validate: 'required',
            css: 'bordersAndBackground'
        },
        {
            name: 'postalCode',
            title: 'Postal Code',
            type: 'text',
            headercss: 'backgroundHeader',
            width: '100',
            validate: {
                validator: function(value) {
                    if (value.length < 10 && value > 0) {
                        return true;
                    }
                },
                message: "Please enter a valid postal code",
            },
            css: 'bordersAndBackground'
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'text',
            headercss: 'backgroundHeader',
            width: '100',
            validate: {
                validator: function(value, item) {
                    if (value.length < 20) {
                        return true;
                    }
                },
                message: "Please enter a valid phone number",
            },
            css: 'bordersAndBackground',
        },
        {
            type: "control",
            itemTemplate: function(value, item) {
                var $result = $([]);
                $result = $result.add(this._createDeleteButton(item));
                return $result;
            },
            css: "bordersAndBackgroundEdit",
            headercss: 'backgroundHeader'

        },
    ],

    rowClick: (args) => {
        let id = args.item.id;
        location.href = `${baseUrl}employee/show/${id}`;
      },
    onItemInvalid: function(args) {
        $(".toast-body").empty();
        var messages = $.map(args.errors, function(error) {
            return error.field.name + ": " + error.message;
        });

        $.each(messages, function(index, value) {
            $(".toast-body")
                .append(`<div class="alert alert-danger p-1" role="alert">*${value}</div>`)
        });
        $('.toast').toast('show');
        $(".toast").toast({
            delay: 2000
        });

    },
    invalidNotify: function(args) {
        var messages = $.map(args.errors, function(error) {
            return error.field.name + ": " + error.message;
        });
    }
});