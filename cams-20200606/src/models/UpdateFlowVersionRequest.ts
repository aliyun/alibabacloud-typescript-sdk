// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowVersionRequest extends $dara.Model {
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
   * The flow code. You can view the flow code on the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow version. You can click the flow name on the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page to go to the canvas page and view the flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The DSL data of the flow version. The data is in JSON format. You can orchestrate flow components on the canvas in the flow editor in advance, save the flow, and then click **Settings** > **Export** in the upper-right corner of the canvas to export the data as a JSON data file for viewing.
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
   * The version remark.
   * 
   * @example
   * Fix the error in sending WhatsApp messages
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The save type.
   * 
   * @example
   * Sample value sample value sample value
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      flowViewModel: 'FlowViewModel',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowCode: 'string',
      flowVersion: 'string',
      flowViewModel: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

