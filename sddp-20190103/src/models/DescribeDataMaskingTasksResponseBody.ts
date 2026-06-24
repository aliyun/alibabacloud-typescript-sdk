// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The member account that the data masking destination belongs to.
   * 
   * @example
   * 192479427903xxxx
   */
  dstMemberAccount?: number;
  /**
   * @remarks
   * The destination path.
   */
  dstPath?: string;
  /**
   * @remarks
   * The product that the destination data source belongs to. Valid values:
   * 
   * - **1**: MaxCompute.
   * 
   * - **2**: OSS.
   * 
   * - **3**: ADS.
   * 
   * - **4**: OTS.
   * 
   * - **5**: RDS.
   * 
   * - **6**: SELF_DB.
   * 
   * @example
   * 5
   */
  dstType?: number;
  /**
   * @remarks
   * The type of the destination product. Valid values:
   * 
   * - **MaxCompute**.
   * 
   * - **OSS**.
   * 
   * - **ADS**.
   * 
   * - **OTS**.
   * 
   * - **RDS**.
   * 
   * - **SELF_DB**.
   * 
   * @example
   * RDS
   */
  dstTypeCode?: string;
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582992000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Indicates whether the task is running.
   * 
   * @example
   * false
   */
  hasUnfinishProcess?: boolean;
  /**
   * @remarks
   * The numerical ID of the task.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the source table is masked.
   * 
   * @example
   * false
   */
  originalTable?: boolean;
  /**
   * @remarks
   * The creator of the task.
   * 
   * @example
   * owner
   */
  owner?: string;
  /**
   * @remarks
   * The number of executions.
   * 
   * @example
   * 1
   */
  runCount?: number;
  /**
   * @remarks
   * The member account that the data masking source belongs to.
   * 
   * @example
   * 192479427903xxxx
   */
  srcMemberAccount?: number;
  /**
   * @remarks
   * The source path.
   */
  srcPath?: string;
  /**
   * @remarks
   * The type of the source product. Valid values:
   * 
   * - **1**: MaxCompute.
   * 
   * - **2**: OSS.
   * 
   * - **3**: ADS.
   * 
   * - **4**: OTS.
   * 
   * - **5**: RDS.
   * 
   * - **6**: SELF_DB.
   * 
   * @example
   * 5
   */
  srcType?: number;
  /**
   * @remarks
   * The type of the source product. Valid values:
   * 
   * - **MaxCompute**.
   * 
   * - **OSS**.
   * 
   * - **ADS**.
   * 
   * - **OTS**.
   * 
   * - **RDS**.
   * 
   * - **SELF_DB**.
   * 
   * @example
   * RDS
   */
  srcTypeCode?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The string ID of the task.
   * 
   * @example
   * mt4HBgtw1B******
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Task name
   */
  taskName?: string;
  /**
   * @remarks
   * The execution method of the task. Valid values:
   * 
   * - **1**: Manual.
   * 
   * - **2**: Scheduled.
   * 
   * - **3**: Manual and scheduled.
   * 
   * @example
   * 1
   */
  triggerType?: number;
  static names(): { [key: string]: string } {
    return {
      dstMemberAccount: 'DstMemberAccount',
      dstPath: 'DstPath',
      dstType: 'DstType',
      dstTypeCode: 'DstTypeCode',
      gmtCreate: 'GmtCreate',
      hasUnfinishProcess: 'HasUnfinishProcess',
      id: 'Id',
      originalTable: 'OriginalTable',
      owner: 'Owner',
      runCount: 'RunCount',
      srcMemberAccount: 'SrcMemberAccount',
      srcPath: 'SrcPath',
      srcType: 'SrcType',
      srcTypeCode: 'SrcTypeCode',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstMemberAccount: 'number',
      dstPath: 'string',
      dstType: 'number',
      dstTypeCode: 'string',
      gmtCreate: 'number',
      hasUnfinishProcess: 'boolean',
      id: 'number',
      originalTable: 'boolean',
      owner: 'string',
      runCount: 'number',
      srcMemberAccount: 'number',
      srcPath: 'string',
      srcType: 'number',
      srcTypeCode: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      triggerType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of data masking tasks.
   */
  items?: DescribeDataMaskingTasksResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataMaskingTasksResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

