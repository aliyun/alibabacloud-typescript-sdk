// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which error messages are returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **zh**.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to shift the domain name.
   * 
   * You can view the resource group ID in the [Resource Management Console](https://resourcemanager.console.aliyun.com/resource-groups).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2tcx7os7bkmq
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The resource ID of the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * S20227H17A561968
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type of the domain name. This parameter is fixed to “Domain” and does not need to be specified.
   * 
   * @example
   * Domain
   */
  resourceType?: string;
  /**
   * @remarks
   * The IP address of the user client.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newResourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
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

