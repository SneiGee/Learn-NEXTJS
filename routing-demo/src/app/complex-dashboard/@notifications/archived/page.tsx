import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <Card>
            <div className="mr-2">Notification</div>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    );
}