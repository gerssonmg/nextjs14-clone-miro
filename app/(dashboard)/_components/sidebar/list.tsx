"use client";

import { useOrganizationList } from "@clerk/nextjs";

const List = () => {

    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    })

    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((membership) => (
                <p key={membership.organization.id}>
                    {membership.organization.name}
                </p>
            ))}
        </ul>
    )
}

export default List