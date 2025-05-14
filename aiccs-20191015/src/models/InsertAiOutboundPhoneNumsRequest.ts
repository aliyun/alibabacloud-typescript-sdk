// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertAiOutboundPhoneNumsRequestDetails } from "./InsertAiOutboundPhoneNumsRequestDetails";


export class InsertAiOutboundPhoneNumsRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  batchVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  details?: InsertAiOutboundPhoneNumsRequestDetails[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
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

