// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HangupThirdCallRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent account, which is the logon name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @remarks
   * The acid value in the WebSocket after an inbound call.
   * 
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @remarks
   * The unique ID of the client request, which is used to ensure idempotence. You can use a UUID to generate the ID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The connId value in the WebSocket after an inbound call.
   * 
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @remarks
   * The ID of the AICCS instance. You can view the instance ID in the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The jobId value in the WebSocket after an inbound call.
   * 
   * @example
   * 7719787
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

