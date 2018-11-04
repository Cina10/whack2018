print("Hello, World")
adoptee = {
    "birthday": None,
    "location": None,
    "race": None,
}

parent = {
    "birthday": None,
    "location": None,
    "race": None,
}

def compare(adoptee, parent):
    match = 0
    for x in adoptee.keys():
        if parent[x] == adoptee[x]:
            match+=1
    return match

def create_parent(birthdate, location, race):
    ret = {}
    ret["birthday"] = birthdate
    ret["location"] = location
    ret["race"] = race
    return ret

print(create_parent("1/4/2000", "Yi Yang", "Asian"))
