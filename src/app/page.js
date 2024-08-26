import Services from "./_components/services";
import CustomerReview from "./_components/customer-review";

export default function Home() {
  return (
    <main className="flex h-auto max-w-[1440px] w-full flex-col items-center justify-between mx-auto ps-[256px]">
      <Services />
      <CustomerReview />
    </main>
  );
}
