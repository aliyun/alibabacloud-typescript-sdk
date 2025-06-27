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
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the group to which the domain name will belong. The default value is the ID of the default group.
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
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-resourcegroupid
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

