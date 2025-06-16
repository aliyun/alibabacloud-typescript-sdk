// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateNetworkAclRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource from which you want to disassociate the network ACL.
   * 
   * @example
   * vsw-bp1de348lntdw****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource from which you want to disassociate the network ACL. Set the value to **VSwitch**.
   * 
   * Valid values of **N**: 0 to 29. You can disassociate a network ACL from at most 30 resources at a time.
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

