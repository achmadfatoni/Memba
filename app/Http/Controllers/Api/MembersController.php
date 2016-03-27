<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Yajra\Datatables\Datatables;

class MembersController extends Controller
{
    public function index(){
        return Datatables::of(User::query())->make(true);
    }

}