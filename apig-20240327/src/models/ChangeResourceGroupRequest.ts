// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * @example
   * rg-aekzdrfx2xdnaja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * gw-ct4i14um1hkn0tpqfae0
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The service name. Set this parameter to apig.
   * 
   * @example
   * apig
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

