// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * vsw-bp1de348lntdwxscd****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource with which you want to associate the network ACL. The value is set to **VSwitch**.
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The association status of the resource. Valid values:
   * 
   * *   **BINDED**
   * *   **BINDING**
   * *   **UNBINDING**
   * 
   * @example
   * BINDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

