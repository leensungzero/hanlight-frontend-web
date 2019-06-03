export interface UserModel {
  fbCode: string;
  signKey: string;
  id: string;
  token: string;
  data: {
    type: 'none' | 'student' | 'teacher' | 'graduate' | 'parent';
    admin: number;
    name: string;
    major: string | null;
    grade: number | null;
    classNum: number | null;
    studentNum: number | null;
  };

  verifyStatus: 'none' | 'pending' | 'success' | 'failure';
  registerStatus: 'none' | 'pending' | 'success' | 'failure';
  loginStatus: 'none' | 'pending' | 'success' | 'failure';
  idRecoveryStatus: 'none' | 'pending' | 'success' | 'failure';
  pwRecoveryStatus: 'none' | 'pending' | 'success' | 'failure';
  idExistStatus: 'none' | 'pending' | 'success-true' | 'success-false' | 'failure';
  tpExistStatus: 'none' | 'pending' | 'success-true' | 'success-false' | 'failure';
  signKeyExistStatus: 'none' | 'pending' | 'success-true' | 'success-false' | 'failure';
}
