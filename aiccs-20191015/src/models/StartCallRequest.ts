// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCallRequest extends $dara.Model {
  /**
   * @remarks
   * Agent account name, which is the phone number or mailbox entered during account registration. It is unique within the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Callee number for the hotline outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 1360987****
   */
  callee?: string;
  /**
   * @remarks
   * Caller number for the hotline outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 906****
   */
  caller?: string;
  /**
   * @remarks
   * Unique customer request ID. Used for idempotency validation. You can generate it using a UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
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
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callee: 'string',
      caller: 'string',
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

