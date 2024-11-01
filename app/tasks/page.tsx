"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { createTask } from "../actions";
import { toast } from "sonner";

const Page = () => {
  const submitForm = async (formData: FormData) => {
    const formValues = Object.fromEntries(formData);
    const result = await createTask(formValues);
    toast(result.message, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "My Task is almost there",
      status: "Pending",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My Task is almost there",
      status: "Completed",
    },
    {
      id: 3,
      name: "Task 3",
      description: "My Task is almost there",
      status: "Pending",
    },
    {
      id: 4,
      name: "Task 4",
      description: "My Task is almost there",
      status: "Completed",
    },
    {
      id: 5,
      name: "Task 5",
      description: "My Task is almost there",
      status: "Completed",
    },
    {
      id: 6,
      name: "Task 6",
      description:
        "My Task is almost there. This is slightly longer though. Care to see how it plays out?",
      status: "Completed",
    },
  ];
  return (
    <div className="m-5">
      <div className="flex justify-between items-center">
        <Input
          type="text"
          id="text"
          placeholder="Search..."
          className="w-1/2"
        />

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus />
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new task</DialogTitle>
            </DialogHeader>
            <form action={submitForm}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    id="name"
                    name="name"
                    className="col-span-3"
                    placeholder="Name"
                    required
                  />
                  <Textarea
                    id="description"
                    name="description"
                    className="col-span-3"
                    placeholder="Description"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {tasks?.map((item) => {
          return (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
                <div className="flex justify-end items-center">
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
