// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPrimaryObjectDataRequest extends $dara.Model {
  /**
   * @remarks
   * 关键字搜索（固定匹配 name；若 schema 定义 description，则同时匹配 description）
   * 
   * @example
   * 示例关键词
   */
  keyword?: string;
  /**
   * @remarks
   * 仅返回关注的主对象；false 或不传则返回全部对象（包含 isFavorited 标识）
   * 
   * @example
   * false
   */
  onlyFavorites?: boolean;
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
   * 页码（从 1 开始）
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量，范围 1-100
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
      keyword: 'keyword',
      onlyFavorites: 'onlyFavorites',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      onlyFavorites: 'boolean',
      operatingObjectName: 'string',
      page: 'number',
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

