// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodoOpsTaskApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-m413tuhlo03
   */
  instanceId?: string;
  /**
   * @remarks
   * The task name or task remarks to query. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the page to return in a paging query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.  
   * The maximum value of the PageSize parameter is 100. The default number of entries per page is 20. If PageSize is left empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task scheduling type used to filter results. Valid values:
   * - **FixTime**: scheduled execution.
   * - **CycleInterval**: periodic execution.
   * - **Manual**: manually triggered by a user.
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

