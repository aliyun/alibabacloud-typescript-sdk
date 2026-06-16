// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FraudResultCallBackRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for identity verification, which corresponds to the verifyId of Ant.
   * 
   * @example
   * shs2b27333914876c01de4cb22f5841f
   */
  certifyId?: string;
  /**
   * @remarks
   * The extended parameters, in JSON string format.
   * 
   * @example
   * {}
   */
  extParams?: string;
  /**
   * @remarks
   * Indicates whether the anti-spoofing check is passed. Valid values:
   * - PASS: Passed.
   * - REJECT: Not passed.
   * 
   * @example
   * PASS
   */
  resultCode?: string;
  /**
   * @remarks
   * The environment routing parameter. Valid values:
   * - staging: staging environment
   * - production: production environment.
   * 
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

