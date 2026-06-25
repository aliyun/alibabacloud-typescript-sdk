// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `Desc`: descending order
   * 
   * - `Asc`: ascending order
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
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
   * The resource group ID. The [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation returns this ID.
   * 
   * @example
   * eas-r-h7lcw24dyqztwxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource group name. The [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation returns this name.
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
   * The resource group type. Valid values:
   * 
   * - `Dedicated`: dedicated resource group
   * 
   * - `SelfManaged`: self-managed resource group
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The sort field. Timestamp fields are sorted in descending order by default.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The usage mode of the resource group. The default value is `inference`.
   * 
   * @example
   * inference
   */
  usageMode?: string;
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
      usageMode: 'UsageMode',
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
      usageMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

