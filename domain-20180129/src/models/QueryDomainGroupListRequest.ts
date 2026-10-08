// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainGroupListRequest extends $dara.Model {
  /**
   * @remarks
   * The user-defined domain group name.
   * 
   * @example
   * 默认分组
   */
  domainGroupName?: string;
  /**
   * @remarks
   * The language of error messages in the response. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * The default value is **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  orderByType?: string;
  orderKeyType?: string;
  /**
   * @remarks
   * Specifies whether to show domain groups that are being deleted. Valid values:
   * 
   * - **false**
   * 
   * - **true**
   * 
   * The default value is **false**.
   * 
   * @example
   * false
   */
  showDeletingGroup?: boolean;
  /**
   * @remarks
   * The client IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupName: 'DomainGroupName',
      lang: 'Lang',
      orderByType: 'OrderByType',
      orderKeyType: 'OrderKeyType',
      showDeletingGroup: 'ShowDeletingGroup',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupName: 'string',
      lang: 'string',
      orderByType: 'string',
      orderKeyType: 'string',
      showDeletingGroup: 'boolean',
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

