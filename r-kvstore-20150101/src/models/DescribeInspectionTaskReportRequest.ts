// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTaskReportRequest extends $dara.Model {
  /**
   * @example
   * r-bp19f4f6994813xxx
   */
  inspectionInsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ta-bp19f4f6994813xxx
   */
  instanceId?: string;
  securityToken?: string;
  /**
   * @remarks
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
      securityToken: 'SecurityToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionInsId: 'string',
      instanceId: 'string',
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

