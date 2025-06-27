// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveDomainResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the values of specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * You can view the resource group ID in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzzk7hx3glaoq
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newResourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

