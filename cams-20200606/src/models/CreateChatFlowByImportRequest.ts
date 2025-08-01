// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatFlowByImportRequest extends $dara.Model {
  /**
   * @remarks
   * Business tenant code, default is “ALICOM_OPAAS”.
   * 
   * @example
   * 示例值示例值
   */
  bizCode?: string;
  /**
   * @remarks
   * Business extension information, default is “{}”.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * Imported flow DSL data
   * 
   * @example
   * 示例值示例值
   */
  flowViewModel?: string;
  ownerId?: number;
  /**
   * @remarks
   * Flow remarks
   * 
   * @example
   * 示例值示例值
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Flow title
   * 
   * @example
   * 示例值示例值示例值
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      flowViewModel: 'FlowViewModel',
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
      flowViewModel: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

