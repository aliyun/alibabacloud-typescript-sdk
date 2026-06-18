// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineCallActionRequest extends $dara.Model {
  /**
   * @remarks
   * Hotline Custom Parameter in JSON format.
   * 
   * @example
   * {"time":1}
   */
  acc?: string;
  /**
   * @remarks
   * Agent account name, which is the phone number or mailbox specified during account registration. It is unique within the instance.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Operation Type. Valid values:
   * - **1**: Hotline.
   * - **2**: Online.
   * - **3**: Ticket.
   * 
   * @example
   * 1
   */
  act?: number;
  /**
   * @remarks
   * Business Custom Parameter in JSON format.
   * 
   * @example
   * {"name":123}
   */
  biz?: string;
  /**
   * @remarks
   * Unique ID of the customer request. Used for idempotency validation. You can generate it by using a UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d9****
   */
  clientToken?: string;
  /**
   * @remarks
   * Source type. Valid values:
   * 
   * - **hotlinebs_out**: Hotline.
   * - **ticket_out**: Ticket.
   * - **other_system_out**: Other system.
   * 
   * @example
   * hotlinebs_out
   */
  fromSource?: string;
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
      acc: 'Acc',
      accountName: 'AccountName',
      act: 'Act',
      biz: 'Biz',
      clientToken: 'ClientToken',
      fromSource: 'FromSource',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'string',
      accountName: 'string',
      act: 'number',
      biz: 'string',
      clientToken: 'string',
      fromSource: 'string',
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

