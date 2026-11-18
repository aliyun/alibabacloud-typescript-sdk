// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTaskReportRequest extends $dara.Model {
  /**
   * @remarks
   * The inspection instance ID.
   * 
   * @example
   * r-bp19f4f6994813xxx
   */
  inspectionInsId?: string;
  /**
   * @remarks
   * The assistant instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta-bp19f4f6994813xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The summary of risk levels for inspection results. You can specify multiple values. Valid values:
   * - Normal: normal
   * - Warning: warning
   * - Error: high-risk
   * - Failed: failed
   * 
   * @example
   * Error,Warning
   */
  levelSummary?: string;
  securityToken?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tit-dca42f85c73644e0ab5c80ef64121axxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionInsId: 'InspectionInsId',
      instanceId: 'InstanceId',
      levelSummary: 'LevelSummary',
      securityToken: 'SecurityToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionInsId: 'string',
      instanceId: 'string',
      levelSummary: 'string',
      securityToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

