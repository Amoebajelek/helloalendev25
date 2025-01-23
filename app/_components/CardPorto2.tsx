import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Thumbnail from "@/public/Thumbnail-CMS-Product-Catalog.jpg";
import Link from "next/link";

export function CardPorto2() {
  return (
    <Card className="w-full">
      <CardHeader className="gap-4">
        <Image src={Thumbnail} alt="Thumbnail CMS Product Catalog" />
        <div className="flex flex-col gap-2">
          <CardTitle>Papyrus Photo</CardTitle>
          <CardDescription>
            Tablet application to order, print, edit and print selfie photo.
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Link href='/Portofolios/Papyrus-Photo'>
          <Button>View Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
