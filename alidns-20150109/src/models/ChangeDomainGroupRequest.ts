// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. You can call the [DescribeDomains ](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0)operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the target domain name group.
   * 
   * *   If you do not specify GroupId, the domain name belongs to the default group.
   * *   If you specify an empty string "" for GroupId, the domain name belongs to the default group.
   * *   If you set GroupId to defaultGroup, the domain name belongs to the default group.
   * *   If you specify GroupId to another value and the value is verified existent, the value of GroupId for the target domain name is updated. If the value is verified inexistent, the value of GroupId for the target domain name is not updated.
   * 
   * @example
   * 2223
   */
  groupId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

