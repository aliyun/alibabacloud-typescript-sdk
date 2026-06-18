// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCallV2Request extends $dara.Model {
  /**
   * @remarks
   * Agent account name (agent logon name).
   * 
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @remarks
   * Callee number for hotline outbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * 136****1111
   */
  callee?: string;
  /**
   * @remarks
   * Caller number for hotline outbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * 9065****
   */
  caller?: string;
  /**
   * @remarks
   * Call type. Valid values:
   * 
   * - **1**: Inbound
   * - **2**: Outbound
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  callerType?: number;
  /**
   * @remarks
   * Unique customer request ID. Used for idempotency validation. You can generate it using UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * AICCS instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
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

