// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowVersionRequest extends $dara.Model {
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
   * The flow version to copy. You can click the flow name on the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page to go to the canvas orchestration page and view the historical versions of the flow.
   * 
   * @example
   * 1
   */
  flowVersionCopyFrom?: string;
  ownerId?: number;
  /**
   * @remarks
   * The version remark.
   * 
   * @example
   * Fixed WhatsApp message sending errors
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      flowCode: 'FlowCode',
      flowVersionCopyFrom: 'FlowVersionCopyFrom',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowCode: 'string',
      flowVersionCopyFrom: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

