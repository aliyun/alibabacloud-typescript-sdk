// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TogglePrimaryObjectFavoriteRequest extends $dara.Model {
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
  objectIds?: string[];
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
      objectIds: 'objectIds',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      objectType: 'string',
      operatingObjectName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectIds)) {
      $dara.Model.validateArray(this.objectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

