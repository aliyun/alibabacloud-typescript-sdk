// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * > Resource groups provide a mechanism to group and manage resources within an Alibaba Cloud account. They help you simplify resource grouping and authorization management within a single account. For more information, see [What is Resource Management](https://help.aliyun.com/document_detail/94475.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-bp1drpcfz9srr393h****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource group to be modified.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit resource whose resource group you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - **PHYSICALCONNECTION**: Express Connect circuit instance.
   * - **VIRTUALBORDERROUTER**: Virtual Border Router.
   * - **ROUTERINTERFACE**: VBR connection.
   * - **TRAFFICQOS**: QoS policy.
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

