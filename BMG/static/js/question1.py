def modEx(b,e,p):
    init = 1
    for i in range(e):
        res = ((init % p)*(b%p))%p
        init = res
    return res
#print(modEx(7696,585795, 19455293))
