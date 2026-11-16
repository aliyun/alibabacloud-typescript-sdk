// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadFlowVersionRequest extends $dara.Model {
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
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The draft version.
   * 
   * @example
   * Sample valueSample value
   */
  draftVersion?: string;
  /**
   * @remarks
   * The flow code. You can view the flow code in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder).
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow version. You can click the flow name in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) to go to the canvas orchestration page and view the flow version, or call the [ListFlowVersion](https://api.aliyun.com/document/cams/2020-06-06/ListFlowVersion) operation to obtain the flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the flow version. Valid values:
   * - DRAFT: Draft.
   * - DELETED: Deleted.
   * - ONLINE: Online.
   * - OFFLINE: Offline.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      draftVersion: 'DraftVersion',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      draftVersion: 'string',
      flowCode: 'string',
      flowVersion: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
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

