// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * 有效天数
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expiredDay?: string;
  /**
   * @remarks
   * 号码列表
   * 
   * This parameter is required.
   */
  numbers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * 备注
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      expiredDay: 'ExpiredDay',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredDay: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

