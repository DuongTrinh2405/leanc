#include <iostream>
#include <iomanip>
#include <math.h>
using namespace std;

int main() {
    int a;
    cin>>a;
    int n =a/365;
    int t = a%365/7;
    int ng = (a%365)%7;
    cout<< n<<endl<<t<<endl<<ng;
    return 0;
}