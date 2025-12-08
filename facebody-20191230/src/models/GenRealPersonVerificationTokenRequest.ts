// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenRealPersonVerificationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  certificateName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33010219001123123X
   */
  certificateNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"dwe":"ew4e"...}
   */
  metaInfo?: string;
  static names(): { [key: string]: string } {
    return {
      certificateName: 'CertificateName',
      certificateNumber: 'CertificateNumber',
      metaInfo: 'MetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateName: 'string',
      certificateNumber: 'string',
      metaInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

