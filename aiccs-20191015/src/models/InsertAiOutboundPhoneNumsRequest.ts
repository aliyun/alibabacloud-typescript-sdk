// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertAiOutboundPhoneNumsRequestDetails extends $dara.Model {
  /**
   * @remarks
   * The custom business information.
   * 
   * @example
   * ioi-qerhne-hoz-114c
   */
  bizData?: string;
  /**
   * @remarks
   * The outbound called number.
   * 
   * @example
   * 150****0000
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsRequest extends $dara.Model {
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
  details?: InsertAiOutboundPhoneNumsRequestDetails[];
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
      details: 'Details',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      details: { 'type': 'array', 'itemType': InsertAiOutboundPhoneNumsRequestDetails },
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

