// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination resource group. You can view resource group IDs in the Resource Management console.
   * 
   * @example
   * rg-aekzuqyxxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource to be moved. The value must match the specified ResourceType.
   * 
   * @example
   * gw-cq2vmc93km41m3dm4bg0
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. The value is case-sensitive and must exactly match one of the valid values.
   * 
   * @example
   * Gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The cloud service identifier. Fixed as APIG. You generally do not need to specify this parameter.
   * 
   * @example
   * APIG
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

