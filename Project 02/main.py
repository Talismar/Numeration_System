def find_expression(*args, len_bit):
    import numpy as np
    if len(args) != 2**len_bit:
        print('Error!')
        print('args must be equal to ', 2**len_bit)
        return    
    
    len_1 = [0,1] * 16
    len_2 = [0,0,1,1] * 4
    len_3 = np.array([[0] * 4, [1] * 4] * 2).reshape(1,-1)[0]
    len_4 = np.array([[0] * 8, [1] * 8] * 2).reshape(1,-1)[0]

    letter = ["A", "B","C", "D"]
    bits = []
    bits_s = ""
    [print(letter[i], end=" ") for i in range(len_bit)]
    print("| X")
    
    for i in range(2 ** len_bit):
        if len_bit >= 4:
            bits_s += str(len_4[i])
            print(len_4[i], end="|")
        if len_bit >= 3:
            bits_s += str(len_3[i])
            print(len_3[i], end="|")
        if len_bit >= 2:
            bits_s += str(len_2[i])
            print(len_2[i], end="|")
        if len_bit >= 1:
            print(len_1[i], "|",args[i])
            bits_s += str(len_1[i])
            bits.append(bits_s)
            bits_s = ""
    
    res = []
    for i in range(0,len(args)):
        if args[i] == 1:
            
            for j in range(len(bits[i])):
                if bits[i][j] == "0":
                    res.append(f"{letter[j]}'")
                    continue
                res.append(letter[j])
    
    expr = ""
    aux = 0
    for i in range(0, len(args)):
        if args[i] == 1:
            expr += "(" + "".join(res[aux:aux+len_bit]) + ") + "
            aux += len_bit
        
    print("x =", expr[0:-2])
    
find_expression(1,1,0,0,1,1,0,0, len_bit=3)