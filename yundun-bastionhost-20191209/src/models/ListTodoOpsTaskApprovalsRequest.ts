// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodoOpsTaskApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-m413tuhlo03
   */
  instanceId?: string;
  /**
   * @remarks
   * The name or comment of the task to query. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query.  
   * The maximum value of the PageSize parameter is 100. The default number of entries per page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Specify a value for the PageSize parameter.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling type of the task. Valid values:
   * - **FixTime**: Scheduled execution.
   * - **CycleInterval**: Periodic execution.
   * - **Manual**: Manually triggered execution.
   * 
   * @example
   * Manual
   */
  scheduleType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      scheduleType: 'ScheduleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'number',
      regionId: 'string',
      scheduleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

