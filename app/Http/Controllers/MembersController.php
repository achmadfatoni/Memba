<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class MembersController extends Controller
{
    public function index()
    {
        return view('members.index');
    }
}
