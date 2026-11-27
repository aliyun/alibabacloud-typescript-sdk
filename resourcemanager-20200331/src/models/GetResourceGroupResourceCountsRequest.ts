// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupResourceCountsRequestResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the value from the **Resource type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The cloud service code.
   * 
   * You can obtain the value from the **Cloud service code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeCode: 'ResourceTypeCode',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeCode: 'string',
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

export class GetResourceGroupResourceCountsRequest extends $dara.Model {
  /**
   * @remarks
   * The grouping dimension for resource count statistics.
   * > Specify a grouping dimension. If you do not specify this parameter, the returned result is empty.
   * 
   * @example
   * ResourceGroupId
   */
  groupByKey?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/2716558.html) operation to obtain the resource group ID.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-shanghai
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The list of resource types.
   */
  resourceTypes?: GetResourceGroupResourceCountsRequestResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      groupByKey: 'GroupByKey',
      resourceGroupId: 'ResourceGroupId',
      resourceRegionId: 'ResourceRegionId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupByKey: 'string',
      resourceGroupId: 'string',
      resourceRegionId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': GetResourceGroupResourceCountsRequestResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

