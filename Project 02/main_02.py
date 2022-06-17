def find_expression(*args, len_bit):
    if len(args) != 2**len_bit:
        print('Error!')
        print('args must be equal to ', 2**len_bit)
        return    
    
    list_ = ["0", "1"]
    bits = [] 

    for i in list_:
        if len_bit == 1:
            bits.append(f"{i}")
            continue

        for j in list_:
            if len_bit == 2:
                bits.append(f"{i}{j}")
                continue

            for k in list_:
                if len_bit == 3:
                    bits.append(f"{i}{j}{k}")
                    continue
                
                for l in list_:
                    if len_bit == 4:
                        bits.append(f"{i}{j}{k}{l}")
                        continue

    res = []
    for i in range(0,len(args)):
        if args[i] == 1:
            for j in bits[i]:
                if j == "0":
                    res.append("'")
                    continue
                res.append(j)
    
    finall = []
    letter = ["A", "B","C", "D"]
    aux = 0
    for i in range(len_bit, len(res)+1, len_bit):
        for j, l in enumerate(res[aux:i]):
            if l == "'":
                finall.append(letter[j] + l)
                continue
            finall.append(letter[j])

        aux += len_bit        
    
    aux = 0
    for i in range(0, len(args)):
        if args[i] == 0:
            print(bits[i])
            continue
        print(bits[i], end=" ")
        if args[i] == 1:
            print("".join(finall[aux:aux+len_bit]))
            aux += len_bit

    expr = ""
    aux = 0
    for i in range(0, len(args)):
        if args[i] == 1:
            expr += "(" + "".join(finall[aux:aux+len_bit]) + ") + "
            aux += len_bit
        
    print("x =", expr[0:-2])

find_expression(1,1,0,0,1,1,0,0, len_bit=3)