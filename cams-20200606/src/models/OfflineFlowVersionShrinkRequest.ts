// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineFlowVersionShrinkRequest extends $dara.Model {
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
   * The business extension information. Default value: an empty set.
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * The flow code. You can view it in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder).
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow version. You can click the flow name in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) to go to the canvas page of the flow editor and view the flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The flow remark. You can view the flow remark in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder).
   * 
   * @example
   * This version is no longer needed
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

