import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Go to <Link href="/">home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function (page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
