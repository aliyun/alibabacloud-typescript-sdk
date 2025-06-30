// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The member account to which the desensitization target belongs.
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
   * The service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  dstType?: number;
  /**
   * @remarks
   * The type of the service to which the de-identified data belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  dstTypeCode?: string;
  /**
   * @remarks
   * The time when the de-identification task is created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582992000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Indicates whether the de-identification task is running.
   * 
   * @example
   * false
   */
  hasUnfinishProcess?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the source table is de-identified.
   * 
   * @example
   * false
   */
  originalTable?: boolean;
  /**
   * @remarks
   * The user who created the de-identification task.
   * 
   * @example
   * owner
   */
  owner?: string;
  /**
   * @remarks
   * The number of times that the de-identification task is run.
   * 
   * @example
   * 1
   */
  runCount?: number;
  /**
   * @remarks
   * The member account to which the desensitization source belongs.
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
   * The type of the service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  srcType?: number;
  /**
   * @remarks
   * The type of the service to which the data to be de-identified belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  srcTypeCode?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the task.
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
   * The mode in which the de-identification task is run. Valid values:
   * 
   * *   **1**: manual
   * *   **2**: scheduled
   * *   **3**: manual and scheduled
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

