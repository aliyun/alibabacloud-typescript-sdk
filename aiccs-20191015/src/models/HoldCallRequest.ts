// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HoldCallRequest extends $dara.Model {
  /**
   * @remarks
   * The agent account name, which is the agent logon name.
   * 
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @remarks
   * The ACID in the WebSocket connection after an inbound call.
   * 
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @remarks
   * The unique client request ID used for idempotency checks. You can use a UUID to generate this ID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The connection ID in the WebSocket connection after an inbound call.
   * 
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @remarks
   * The AICCS instance ID. You can view it in the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The job ID in the WebSocket connection after an inbound call.
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

