// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVmsVirtualNumberRelationByPageRequest extends $dara.Model {
  /**
   * @remarks
   * 号码归属地--城市
   * 
   * @example
   * 示例值示例值
   */
  numberCity?: string;
  /**
   * @remarks
   * 号码归属地--省
   * 
   * @example
   * 示例值示例值
   */
  numberProvince?: string;
  ownerId?: number;
  /**
   * @example
   * 74
   */
  pageNo?: number;
  /**
   * @example
   * 81
   */
  pageSize?: number;
  /**
   * @remarks
   * 真实号码
   * 
   * @example
   * 131***1234
   */
  realNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 状态 1:有效；0:无效；-1:注销
   * 
   * @example
   * 1
   */
  state?: number;
  /**
   * @remarks
   * 虚拟号码
   * 
   * @example
   * 0571****1234
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
      numberCity: 'NumberCity',
      numberProvince: 'NumberProvince',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      realNumber: 'RealNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numberCity: 'string',
      numberProvince: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      realNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'number',
      virtualNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

