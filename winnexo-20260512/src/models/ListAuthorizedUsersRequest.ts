// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersRequest extends $dara.Model {
  /**
   * @remarks
   * 筛选类型：USER / USER_GROUP / 不传则返回全部
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * 搜索关键词，按用户名或组名模糊匹配
   * 
   * @example
   * 示例关键词
   */
  keyword?: string;
  /**
   * @remarks
   * 数字员工名称
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 权限类型过滤：USE=使用权限 / MANAGE=管理权限
   * 
   * @example
   * USE
   */
  permission?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      granteeType: 'granteeType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      permission: 'permission',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      permission: 'string',
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

