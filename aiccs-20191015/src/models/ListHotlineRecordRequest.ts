// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID. This is the acid value in the WebSocket after an inbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 100365558
   */
  callId?: string;
  /**
   * @remarks
   * The unique ID of the client request. It is used to ensure idempotency. You can generate the value by using a UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

