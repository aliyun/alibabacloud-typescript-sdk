// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatFlowRequest extends $dara.Model {
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
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The source flow code.
   * 
   * @example
   * Example value
   */
  createFromFlowCode?: string;
  /**
   * @remarks
   * The source flow version.
   * 
   * @example
   * Example value example value example value
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
   * 
   * @deprecated
   */
  lifeCycleExtendData?: { [key: string]: string };
  /**
   * @remarks
   * The lifecycle extension input parameters.
   */
  lifeCycleExtendDataV2?: { [key: string]: any };
  ownerId?: number;
  /**
   * @remarks
   * The flow remark.
   * 
   * @example
   * Trigger and deliver a verification template through the API
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
      bizExtend: 'BizExtend',
      createFromFlowCode: 'CreateFromFlowCode',
      createFromFlowVersion: 'CreateFromFlowVersion',
      flowTriggerType: 'FlowTriggerType',
      lifeCycleExtendData: 'LifeCycleExtendData',
      lifeCycleExtendDataV2: 'LifeCycleExtendDataV2',
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
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createFromFlowCode: 'string',
      createFromFlowVersion: 'string',
      flowTriggerType: 'string',
      lifeCycleExtendData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lifeCycleExtendDataV2: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    if(this.lifeCycleExtendData) {
      $dara.Model.validateMap(this.lifeCycleExtendData);
    }
    if(this.lifeCycleExtendDataV2) {
      $dara.Model.validateMap(this.lifeCycleExtendDataV2);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

