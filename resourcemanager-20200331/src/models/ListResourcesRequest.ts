// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequestResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values of N: 1 to 50.
   * 
   * You can obtain the resource type from the **Resource Type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * > The Service and ResourceType parameters in ResourceTypes must be specified at the same time. Otherwise, they do not take effect.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * Valid values of N: 1 to 50.
   * 
   * You can obtain the code from the **Cloud Service Code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * > The Service and ResourceType parameters in ResourceTypes must be specified at the same time. Otherwise, they do not take effect.
   * 
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the total number of resources. Default value: true. Valid values:
   * - true: Queries the total number of resources and returns the result in the TotalCount parameter.
   * - false: Does not query the total number of resources. The TotalCount parameter returns -1, and the resources are still paginated based on the PageNumber and PageSize parameters.
   */
  count?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uPJpP****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource Type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resource types. A maximum of 50 resource types are supported.
   * 
   * > If you configure the Settings for ResourceTypes, the Service and ResourceType request parameter specified separately do not take effect.
   */
  resourceTypes?: ListResourcesRequestResourceTypes[];
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * You can obtain the code from the **Cloud Service Code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceTypes: 'ResourceTypes',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourcesRequestResourceTypes },
      service: 'string',
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

