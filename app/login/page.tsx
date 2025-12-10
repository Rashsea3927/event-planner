import { GithubSignInButton } from '@/components/GithubSigninButton';

export default async function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h1 className='text-foreground text-3xl font-bold'>Welcome</h1>
          <p className='text-muted mt-2'>Sign in or create an account to continue</p>
        </div>
        <div className='card p-8'>
          <div className='space-y-6'>
            <div className='text-center'>
              <p className='text-muted mb-6'>Use your Github account to sign in or create an account</p>
            </div>
            <GithubSignInButton />
            <div className='text-center'>
              <p className='text-sm text-muted'>By signing in, you agree to our terms of service and privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
