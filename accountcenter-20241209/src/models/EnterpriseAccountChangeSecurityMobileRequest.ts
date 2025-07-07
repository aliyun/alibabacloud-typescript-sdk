// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountChangeSecurityMobileRequest extends $dara.Model {
  appName?: string;
  encryptTicket?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  newMobile?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      encryptTicket: 'EncryptTicket',
      newMobile: 'NewMobile',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pk: 'Pk',
      requestId: 'RequestId',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      encryptTicket: 'string',
      newMobile: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pk: 'string',
      requestId: 'string',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

