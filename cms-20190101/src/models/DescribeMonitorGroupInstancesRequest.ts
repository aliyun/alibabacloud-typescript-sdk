// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the cloud service name. Valid values of N: 1 to 200.
   * 
   * >  For more information about how to obtain the abbreviation of a cloud service name, see `metricCategory` in the response parameter `Labels` of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
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
   * 12345
   */
  groupId?: number;
  /**
   * @remarks
   * The instance ID. You can query multiple instances by specifying multiple IDs.
   * 
   * @example
   * i-x1234568
   */
  instanceIds?: string;
  /**
   * @remarks
   * The keyword used to search for instances. Fuzzy search based on instance names is supported.
   * 
   * @example
   * s1
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIds: 'InstanceIds',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

