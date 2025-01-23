import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Thumbnail from '@/public/Thumbnail-CMS-Product-Catalog.jpg'

export function CardPorto2() {
  return (
    <Card className="w-full">
      <CardHeader>
        <Image src={Thumbnail} alt="Thumbnail CMS Product Catalog"/>
        <CardTitle>Papyrus Photo</CardTitle>
        <CardDescription>
          Tablet application to order, print, edit and print selfie photo.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button>View Detail</Button>
      </CardFooter>
    </Card>
  );
}
