// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCallV2Request extends $dara.Model {
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
   * The called number for the hotline outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 136****1111
   */
  callee?: string;
  /**
   * @remarks
   * The calling number for the hotline outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 9065****
   */
  caller?: string;
  /**
   * @remarks
   * The call type. Valid values:
   * 
   * - **1**: Inbound call.
   * - **2**: Outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  callerType?: number;
  /**
   * @remarks
   * The unique ID of the client request. This parameter is used to ensure idempotence. You can use a UUID to generate the value.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callee: 'Callee',
      caller: 'Caller',
      callerType: 'CallerType',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callee: 'string',
      caller: 'string',
      callerType: 'number',
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

