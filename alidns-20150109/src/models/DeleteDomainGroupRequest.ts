// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name group. You can call the [DescribeDomainGroups](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomaingroups?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
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
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

