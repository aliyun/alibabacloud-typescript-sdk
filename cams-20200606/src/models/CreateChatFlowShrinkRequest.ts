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
   * 示例值
   */
  createFromFlowCode?: string;
  /**
   * @remarks
   * The source flowVersion for creation.
   * 
   * @example
   * 示例值示例值示例值
   */
  createFromFlowVersion?: string;
  /**
   * @remarks
   * The flow trigger type. Valid values:
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
   */
  lifeCycleExtendDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The flow remarks.
   * 
   * @example
   * Send verification template triggered by API
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The flow title.
   * 
   * @example
   * WhatsApp auto-reply
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

