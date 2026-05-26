// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSAMLIdentityProviderCertificateRequest extends $dara.Model {
  /**
   * @example
   * xxxxxxxxxxxxxxxxxxxx
   */
  certificateId?: string;
  /**
   * @example
   * my-agent-userpool
   */
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

