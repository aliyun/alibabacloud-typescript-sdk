// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * For more information about how to obtain the abbreviation of a cloud service name, see `metricCategory` in the response parameter `Labels` of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/2513265.html) operation.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The resource ID. Separate multiple resource IDs with commas (,). You can query the details about a maximum of 20 resources at a time.
   * 
   * @example
   * i-m5e0k0bexac8tykr****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The keyword that is used to search for resources.
   * 
   * @example
   * portal
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: 1 to 1000000000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 1000000000.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return the total number of resources in the specified application group. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  total?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIds: 'InstanceIds',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIds: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      total: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

