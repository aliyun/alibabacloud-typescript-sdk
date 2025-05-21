// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Target resource group ID.
   * 
   * @example
   * rg-aekzdrfx2xdnaja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * gw-ct4i14um1hkn0tpqfae0
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * Service name, fixed value apig
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

