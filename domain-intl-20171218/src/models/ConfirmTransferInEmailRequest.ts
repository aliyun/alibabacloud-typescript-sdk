// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmTransferInEmailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  email?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      email: 'Email',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

