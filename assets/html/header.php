    <nav data-url="<?= BASE_URL ?>" class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 px-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Employee Management</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" id='employee-nav' href="<?= BASE_URL ?>employee/dashboard">Employees</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id='user-nav' href="<?= BASE_URL ?>user/dashboard">Users</a>
                    </li>
                </ul>
            </div>
            <form action="<?= BASE_URL ?>login/logoutUser" method="post" class="form-inline ml-auto">
                <button class="btn btn-outline-primary ml-auto my-2 my-sm-0" type="submit">Logout</button>
            </form>
        </div>
    </nav>