// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferCallToSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The agent account name, which is the phone number or mailbox entered during account registration. It is unique within the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Hotline session ID.
   * 
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @remarks
   * Unique ID for the customer request. Used for idempotency validation. You can generate it using UUID.
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
   * The holdConnId in the WebSocket after an inbound call (required only for two-step transfer).
   * 
   * @example
   * 0
   */
  holdConnectionId?: string;
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
  /**
   * @remarks
   * Default value: **true**. Valid values:
   * - **true**: Single-step transfer.
   * - **false**: Two-step transfer.
   * 
   * @example
   * true
   */
  isSingleTransfer?: boolean;
  /**
   * @remarks
   * The jobId in the WebSocket after an inbound call.
   * 
   * @example
   * 7719787
   */
  jobId?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 356543
   */
  skillGroupId?: number;
  /**
   * @remarks
   * Default value: **1**. Valid values:
   * - **1**: Single-step transfer.
   * - **2**: Two-step transfer.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      isSingleTransfer: 'IsSingleTransfer',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
      type: 'Type',
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
      isSingleTransfer: 'boolean',
      jobId: 'string',
      skillGroupId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

