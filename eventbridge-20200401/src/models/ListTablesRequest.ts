// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * 表所属的数据目录名称。可通过 ListCatalogs 获取
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * 每页返回的最大数据条数。不传时默认 10，最大 100
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 表所属的命名空间名称。可通过 ListNamespaces 获取
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * 分页查询的起始Token。首次查询不传或传 "0"；后续翻页使用上一次响应中返回的 NextToken 值
   * 
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      limit: 'Limit',
      namespace: 'Namespace',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      limit: 'number',
      namespace: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

