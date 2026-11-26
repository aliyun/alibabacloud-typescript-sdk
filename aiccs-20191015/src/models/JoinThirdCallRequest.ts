// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinThirdCallRequest extends $dara.Model {
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
   * The acid in the WebSocket after an inbound call.
   * 
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @remarks
   * The unique client request ID used for idempotency checks. You can generate it by using a UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The connId in the WebSocket after an inbound call.
   * 
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @remarks
   * The holdConnId in the WebSocket after an inbound call. This parameter is required only for two-step transfers.
   * 
   * @example
   * 0
   */
  holdConnectionId?: string;
  /**
   * @remarks
   * The ID of the Artificial Intelligence Cloud Call Service (AICCS) instance. You can view the instance ID in the AICCS console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The jobId in the WebSocket after an inbound call.
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
      holdConnectionId: 'HoldConnectionId',
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
      holdConnectionId: 'string',
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

