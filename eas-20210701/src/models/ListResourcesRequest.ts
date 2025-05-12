// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   Desc
   * *   Asc
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. You can call the [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation to query the ID of the resource group.
   * 
   * @example
   * eas-r-h7lcw24dyqztwxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group. You can call the [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation to query the name of the resource group.
   * 
   * @example
   * MyResource
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource group status.
   * 
   * @example
   * ResourceReady
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The condition by which the results are sorted. By default, the query results are sorted by the timestamp type in descending order.
   * 
   * Valid values:
   * 
   * *   PrePaidInstanceCount
   * *   CpuCount
   * *   Memory
   * *   CreateTime
   * *   PostPaidInstanceCount
   * *   MemoryUsed
   * *   GpuCount
   * *   GpuUsed
   * *   CpuUsed
   * *   ServiceCount
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

