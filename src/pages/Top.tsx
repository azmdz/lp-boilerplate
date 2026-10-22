import Header from '@/components/Header';

export default function Top() {
  return (
    <>
      <Header />

      <main className="px-4 py-8">
        <section className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-center text-2xl font-bold">Page Title</h1>
          <div className="w-12">
            <img src="/assets/img/image.png" alt="" className="w-full h-auto" />
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 px-4 py-4">
        <p className="text-sm text-gray-500" lang="en">
          &copy; 2026 Copyright
        </p>
      </footer>
    </>
  );
}
