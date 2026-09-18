// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartHotlineServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent account, which is the mobile number or email address specified during account registration. The name must be unique within the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * The unique ID of the client request. Used for idempotency checks. You can use a UUID to generate this ID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Artificial Intelligence Cloud Call Service (AICCS) instance.
   * You can obtain the instance ID from **Instance Management** in the left-side navigation pane of the [AICCS console](https://aiccs.console.aliyun.com/overview).
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
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
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

