// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertAiOutboundPhoneNumsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The task batch number.
   * 
   * > If you do not specify this parameter, the numbers are imported to the default batch.
   * 
   * @example
   * 2
   */
  batchVersion?: number;
  /**
   * @remarks
   * The number details.
   * > A maximum of 30 entries are supported.
   * 
   * This parameter is required.
   */
  detailsShrink?: string;
  /**
   * @remarks
   * The AICCS instance ID.
   * You can obtain the instance ID in the <b>Instances</b> section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
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
   * You can call the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) operation and view the **Data** response parameter, or call the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) operation and view the **TaskId** response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      detailsShrink: 'Details',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      detailsShrink: 'string',
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

