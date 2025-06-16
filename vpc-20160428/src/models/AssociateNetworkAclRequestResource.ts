// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateNetworkAclRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * vsw-bp1de348lntdw****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource with which you want to associate the network ACL. Set the value to **VSwitch**.
   * 
   * Valid values of **N**: **0** to **29**. You can associate a network ACL with up to 30 vSwitches.
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

