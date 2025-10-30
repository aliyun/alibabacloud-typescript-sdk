// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp3i05294c2d2d****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   **VpcEndpoint**: endpoint
   * *   **VpcEndpointService**: endpoint service
   * 
   * @example
   * VpcEndpoint
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

