// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListExtensRequest extends $dara.Model {
  /**
   * @remarks
   * 话机区号。以 0 开头 3-4 位数字
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 查询条数。范围 10-100，默认值为 10
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 偏移量。 范围 0-10000，默认值为 0
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 话机类型。1: IP话机， 2: 软电话
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      offset: 'Offset',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      enterpriseId: 'number',
      limit: 'number',
      offset: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

