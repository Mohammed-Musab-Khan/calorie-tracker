"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"

interface FoodCals {
  food: string,
  calories: number
}

export default function Page() {

  const [food, setFood] = useState<string>("")
  const [calories, setCalories] = useState<number>(0)

  const [foodCals, setfoodCals] = useState<FoodCals[]>([])

  const AddItem = (item:FoodCals) => {
    setfoodCals([...foodCals,{food:item.food, calories:item.calories}])
  }

  return (
    <div className="p-6 justify-items-center">
      <Card className="">
        <CardHeader>
          <CardTitle>Calorie Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="food-item">Food Item</FieldLabel>
              <Input id="food-item" placeholder="Enter Food Item" type="text" value={food} onChange={(e) => setFood(e.target.value)} />
            </Field>
            <Field>
              <FieldLabel htmlFor="calories">Calories</FieldLabel>
              <Input id="calories" placeholder="Calories" type="number" value={calories} onChange={(e) => setCalories(Number(e.target.value))} />
            </Field>
            <Button onClick={() => AddItem({food:food, calories:calories})} >Add Food</Button>
          </FieldGroup>
          <Separator className="my-3" />
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>Food Item</TableHead>
                <TableHead>Calories</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
              {
                foodCals.map(item => (
                   <TableRow key={item.food}>
                    <TableCell>{item.food}</TableCell>
                    <TableCell>{item.calories}</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
            <TableFooter></TableFooter>
          </Table>
        </CardContent>
        <CardFooter>
          <CardTitle>Total Calories 0</CardTitle>
        </CardFooter>
      </Card>
    </div>
  )
}
