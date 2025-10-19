
interface CustomHeaderProps {
    titile: string,
    description?: string
}

export function CustomHeader({ titile, description }: CustomHeaderProps) {

    return (
        <div className="content-center">
            <h1>{titile}</h1>
            {
                description && (
                    <p>{description}</p>
                )
            }

        </div>
    )

}