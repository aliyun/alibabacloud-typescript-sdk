// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageAnalysisResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp10xxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter is reserved.
   * 
   * @example
   * 202****
   */
  nodeId?: string;
  /**
   * @remarks
   * The task ID. You can obtain the task ID from the response of the [CreateStorageAnalysisTask](https://help.aliyun.com/document_detail/2639140.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 910f83f4b96df0524ddc5749f615****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
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

