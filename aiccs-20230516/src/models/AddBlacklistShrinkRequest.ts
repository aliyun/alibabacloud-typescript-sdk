// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBlacklistShrinkRequest extends $dara.Model {
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
  numbersShrink?: string;
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
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredDay: 'string',
      numbersShrink: 'string',
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

