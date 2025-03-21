import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogroute() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with your readers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input placeholder="Enter title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea placeholder="Enter title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input placeholder="Enter title" />
            </div>

            <Button>Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
