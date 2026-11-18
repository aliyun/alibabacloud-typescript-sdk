// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionScheduleReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The summary of risk levels in the inspection results. You can specify multiple values. Valid values:
   * - Normal: Normal.
   * - Warning: Alert.
   * - Error: High-risk.
   * - Failed: Failed.
   * 
   * @example
   * Error
   */
  levelSummary?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the timed scheduling.
   * 
   * @example
   * scheduleId-202604141xxxx
   */
  scheduleId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      levelSummary: 'LevelSummary',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      scheduleId: 'ScheduleId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      levelSummary: 'string',
      pageNum: 'number',
      pageSize: 'number',
      scheduleId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

