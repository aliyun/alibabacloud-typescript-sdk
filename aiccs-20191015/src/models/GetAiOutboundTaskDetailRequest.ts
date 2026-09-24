// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Artificial Intelligence Cloud Call Service (AICCS) instance.
   * You can obtain the instance ID from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * You can call the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) operation and check the **Data** parameter in the response, or call the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) operation and check the **TaskId** parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

