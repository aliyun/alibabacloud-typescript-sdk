// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FraudResultCallBackRequest extends $dara.Model {
  /**
   * @example
   * shs2b27333914876c01de4cb22f5841f
   */
  certifyId?: string;
  extParams?: string;
  /**
   * @example
   * PASS
   */
  resultCode?: string;
  /**
   * @example
   * production
   */
  verifyDeployEnv?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      extParams: 'ExtParams',
      resultCode: 'ResultCode',
      verifyDeployEnv: 'VerifyDeployEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      extParams: 'string',
      resultCode: 'string',
      verifyDeployEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

