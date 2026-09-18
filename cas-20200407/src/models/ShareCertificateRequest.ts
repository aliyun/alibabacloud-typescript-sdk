// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23279004
   */
  certificateId?: number;
  /**
   * @remarks
   * The UID of the user with whom the certificate is shared.
   * 
   * This parameter is required.
   * 
   * @example
   * 1622883344556677
   */
  targetUserId?: number;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'number',
      targetUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

