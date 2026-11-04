// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business tenant code. Default value: ALICOM_OPAAS.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: an empty collection.
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * The source flowCode for creation.
   * 
   * @example
   * Sample value
   */
  createFromFlowCode?: string;
  /**
   * @remarks
   * The source flowVersion for creation.
   * 
   * @example
   * Sample value sample value sample value
   */
  createFromFlowVersion?: string;
  /**
   * @remarks
   * The trigger type of the flow. Valid values:
   *  - TriggeredManually
   * - TriggeredByWhatsApp
   * - TriggeredByMessenger
   * - TriggeredByInstagram
   * - TriggeredByViber
   * 
   * @example
   * TriggeredByWhatsApp
   */
  flowTriggerType?: string;
  /**
   * @remarks
   * The lifecycle extension input parameters.
   * 
   * @deprecated
   */
  lifeCycleExtendDataShrink?: string;
  /**
   * @remarks
   * The lifecycle extension input parameters.
   */
  lifeCycleExtendDataV2Shrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The remarks for the flow.
   * 
   * @example
   * Trigger verification template delivery via API
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The title of the flow.
   * 
   * @example
   * WhatsApp Auto-Reply
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      createFromFlowCode: 'CreateFromFlowCode',
      createFromFlowVersion: 'CreateFromFlowVersion',
      flowTriggerType: 'FlowTriggerType',
      lifeCycleExtendDataShrink: 'LifeCycleExtendData',
      lifeCycleExtendDataV2Shrink: 'LifeCycleExtendDataV2',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      createFromFlowCode: 'string',
      createFromFlowVersion: 'string',
      flowTriggerType: 'string',
      lifeCycleExtendDataShrink: 'string',
      lifeCycleExtendDataV2Shrink: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

