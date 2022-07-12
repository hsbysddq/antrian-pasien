<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/homepage', function () {
    return Inertia::render('Homepage');
});

Route::get('/pasien', function () {
    return Inertia::render('Pasien');
});

Route::get('/petugas', function () {
    return Inertia::render('Petugas');
});

Route::get('/new-pasien', function () {
    return Inertia::render('NewPasien');
});

Route::get('/register-pasien', function () {
    return Inertia::render('RegisterPasien');
});

Route::get('/login1', function () {
    return Inertia::render('Login');
});

Route::get('/display', function () {
    return Inertia::render('Display');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
