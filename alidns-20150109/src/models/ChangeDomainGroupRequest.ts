// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.<props="china"> Call [DescribeDomains](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0) to obtain the domain name.
   * <props="intl">Call [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) to obtain the domain name.
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
   * - If you do not specify GroupId, the domain name is moved to the default group.
   * 
   * - If GroupId is an empty string (""), the domain name is moved to the default group.
   * 
   * - If GroupId is defaultGroup, the domain name is moved to the default group.
   * 
   * - If GroupId is a different value, the system checks if the group exists. If the group exists, the domain name\\"s group is updated. If the group does not exist, the group is not updated.
   * 
   * @example
   * 60bb3ef15ace449082cf914ed3ea****
   */
  groupId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default: en.
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

