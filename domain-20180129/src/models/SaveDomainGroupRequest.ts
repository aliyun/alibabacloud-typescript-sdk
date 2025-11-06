// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDomainGroupRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  domainGroupName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
      domainGroupName: 'string',
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

