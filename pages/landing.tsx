import Button from "@/components/Button";
import Card from "@/components/Card";


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card/>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Sizes</h2>
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>

      <div className="space-y-4 mt-6">
        <h2 className="text-xl font-semibold">Button Shapes</h2>
        <Button title="Rounded-Small" size="medium" shape="rounded-sm" />
        <Button title="Rounded-Medium" size="medium" shape="rounded-md" />
        <Button title="Rounded-Full" size="medium" shape="rounded-full" />
      </div>
    </div>
  )
}
export default Landing