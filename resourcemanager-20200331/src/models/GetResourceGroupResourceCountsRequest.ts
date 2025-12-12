// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupResourceCountsRequestResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The service code.
   * 
   * You can obtain the code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
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
   * The dimension by which resources are queried.
   * 
   * > If you do not specify a dimension, no results are returned.
   * 
   * Valid values:
   * 
   * *   ResourceGroupId
   * *   ResourceType
   * 
   * @example
   * ResourceGroupId
   */
  groupByKey?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/2716558.html) operation to obtain the ID.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resources.
   * 
   * @example
   * cn-shanghai
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource types.
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

