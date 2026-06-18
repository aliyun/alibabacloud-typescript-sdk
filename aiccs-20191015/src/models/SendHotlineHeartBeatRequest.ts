// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendHotlineHeartBeatRequest extends $dara.Model {
  /**
   * @remarks
   * Agent account name, which is the phone number or mailbox specified during account registration. It is unique within the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
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
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it in the <b>Instance Management</b> section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Heartbeat signature.  
   * 
   * You can obtain the token by invoking the [StartHotlineService](https://help.aliyun.com/document_detail/2718045.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 0079e7a845e373****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

