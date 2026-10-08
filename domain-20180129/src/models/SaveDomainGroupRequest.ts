// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Domain group ID. If this parameter is not provided, a new group is created. If it is provided, the domain group name is updated.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * Domain Name Group Name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试分组
   */
  domainGroupName?: string;
  /**
   * @remarks
   * Language for error messages returned by the API. Valid values:  
   * - **zh**: Chinese;  
   * - **en**: English.  
   * 
   * Default value is **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address.
   * 
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

