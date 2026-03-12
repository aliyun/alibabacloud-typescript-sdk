// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
      domainName: 'string',
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

