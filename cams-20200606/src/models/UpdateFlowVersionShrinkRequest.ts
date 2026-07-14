// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant code. Default value: ALICOM_OPAAS.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * The extended business information. The default value is an empty collection.
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * The code of the flow. View the flow code in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder).
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The version of the flow. In the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder), click the flow name to open the canvas and view the flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The DSL data of the flow version, in JSON format. To obtain this data, orchestrate the components on the canvas in the Flow Editor. After you save the flow, click **Settings** > **Export** in the upper-right corner of the canvas to export the flow as a JSON data file.
   * 
   * @example
   * {
   *   "schema": {
   *     "namespace": "External",
   *     "version": "1.0",
   *     "copyright": "Alibaba Cloud"
   *   },
   *   "editor": "H4sIAAAAAAAAA+1YbU/c***********************",
   *   "flow": {
   *     "triggerType": "TriggeredByWhatsApp"
   *   }
   * }
   */
  flowViewModel?: string;
  ownerId?: number;
  /**
   * @remarks
   * The remarks for the version.
   * 
   * @example
   * 修复发送WhatsApp消息错误
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      flowViewModel: 'FlowViewModel',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      flowCode: 'string',
      flowVersion: 'string',
      flowViewModel: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

