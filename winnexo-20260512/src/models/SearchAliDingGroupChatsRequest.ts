// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAliDingGroupChatsRequest extends $dara.Model {
  /**
   * @remarks
   * 分页游标，首页传 0
   * 
   * @example
   * 0
   */
  cursor?: string;
  /**
   * @remarks
   * 是否排除免打扰群聊
   * 
   * @example
   * false
   */
  excludeMuted?: boolean;
  /**
   * @remarks
   * 群聊搜索关键词
   * 
   * This parameter is required.
   * 
   * @example
   * 客户项目
   */
  keyword?: string;
  /**
   * @remarks
   * 每页条数，范围 1-100
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 租户 ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      excludeMuted: 'excludeMuted',
      keyword: 'keyword',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      excludeMuted: 'boolean',
      keyword: 'string',
      pageSize: 'number',
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

