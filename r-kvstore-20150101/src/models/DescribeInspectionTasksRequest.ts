// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the assistant instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ta-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The summary of risk levels for inspection results. You can specify multiple values. Valid values:
   * - Normal: Normal.
   * - Warning: Warning.
   * - Error: High-risk.
   * - Failed: Failed.
   * 
   * @example
   * Error
   */
  levelSummary?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  securityToken?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - 1: Manual task.
   * - 2: Scheduled task.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      levelSummary: 'LevelSummary',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      levelSummary: 'string',
      pageNum: 'string',
      pageSize: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

