// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TogglePrimaryObjectFavoriteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 操作：add-关注，remove-取消关注
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  action?: string;
  /**
   * @remarks
   * 主对象业务ID列表
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  objectIdsShrink?: string;
  /**
   * @remarks
   * 对象类型（如 customer、project）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * 运营对象名称（如 customer_1）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      objectIdsShrink: 'objectIds',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      objectIdsShrink: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

