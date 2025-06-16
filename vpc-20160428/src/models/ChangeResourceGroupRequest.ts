// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * >  You can use resource groups to manage resources within your Alibaba Cloud account by group. This helps you resolve issues such as resource grouping and permission management for your Alibaba Cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * This parameter is required.
   * 
   * @example
   * rg-bp1drpcfz9srr393h****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region to which the new resource group belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit whose resource group you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **PHYSICALCONNECTION**: Express Connect circuit.
   * *   **VIRTUALBORDERROUTER**: virtual border router (VBR).
   * *   **ROUTERINTERFACE**: router interface.
   * 
   * This parameter is required.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
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

