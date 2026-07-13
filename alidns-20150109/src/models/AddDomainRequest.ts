// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name group. If you do not specify this parameter, pass an empty string, or pass defaultGroup, the domain name is added to the default group. You can call the AddDomainGroup operation to obtain the group ID.
   * 
   * @example
   * defaultGroup
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
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the resource group in Resource Management to which the domain name belongs. If you leave this parameter empty, the domain name is added to the default resource group.
   * 
   * @example
   * ******resourcegroupid
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

