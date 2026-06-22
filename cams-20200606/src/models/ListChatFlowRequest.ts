// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatFlowRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  bizCode?: string;
  bizExtend?: { [key: string]: any };
  /**
   * @example
   * 示例值
   */
  flowTriggerType?: string;
  /**
   * @example
   * 示例值示例值
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @example
   * 41
   */
  pageNo?: number;
  /**
   * @example
   * 42
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * true
   */
  returnWithOnlineVersion?: boolean;
  /**
   * @example
   * 示例值示例值示例值
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      flowTriggerType: 'FlowTriggerType',
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      returnWithOnlineVersion: 'ReturnWithOnlineVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowTriggerType: 'string',
      keyword: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      returnWithOnlineVersion: 'boolean',
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

