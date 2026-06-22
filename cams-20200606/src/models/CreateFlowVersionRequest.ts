// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowVersionRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  bizCode?: string;
  bizExtend?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  flowCode?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  flowVersionCopyFrom?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
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

