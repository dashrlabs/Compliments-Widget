#!/bin/python3

masterList = ["[\n"]

if __name__ == "__main__":
    with open("complilist_raw.txt") as compList:
        for i in compList.readlines():
            position = 2  # Everything has a space, start index at 1.
            for j in i:
                if j.isnumeric():
                    position += 1
            masterList.append('\t"' + i[position:-1] + '",\n')
        masterList.append("]")

    with open("outFile.txt", "w") as out:
        for i in masterList:
            out.write(i)
