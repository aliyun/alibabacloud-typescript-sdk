// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactTemplateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactTemplateId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  credential?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  credentialNo?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      contactTemplateId: 'ContactTemplateId',
      credential: 'Credential',
      credentialNo: 'CredentialNo',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'number',
      credential: 'string',
      credentialNo: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

