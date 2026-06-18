// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The skill group channel type. Valid values:
   * - **0**: Returns all skill groups.
   * - **1**: Voice skill group.
   * - **2**: Chat skill group.
   * - **3**: Chat and voice skill group.
   * - **4**: Ticket skill group.
   * - **5**: Voice and ticket skill group.
   * - **6**: Chat and ticket skill group.
   * - **7**: Chat, voice, and ticket skill group.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * Unique ID of the customer request. Used for idempotency validation. You can generate it using UUID.
   * 
   * @example
   * 46c1341e-2648-447a-****-70b6a298d94d
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
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
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

