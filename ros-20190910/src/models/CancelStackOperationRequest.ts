// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelStackOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The operations that you want to cancel on the stack.
   */
  allowedStackOperations?: string[];
  /**
   * @remarks
   * The method that you want to use to cancel the operations. Valid values:
   * 
   * *   Quick: cancels the operations on the stack at the earliest opportunity. In this case, Resource Orchestration Service (ROS) stops scheduling new resources and stops running resources at the earliest opportunity. If you use this method, the resource status may become invalid and subsequent stack operations may be affected.
   * *   Safe (default): cancels the operations on the stack in a secure manner. In this case, ROS stops scheduling new resources and waits for running resources to be stopped.
   * 
   * @example
   * Safe
   */
  cancelType?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      allowedStackOperations: 'AllowedStackOperations',
      cancelType: 'CancelType',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedStackOperations: { 'type': 'array', 'itemType': 'string' },
      cancelType: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedStackOperations)) {
      $dara.Model.validateArray(this.allowedStackOperations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

