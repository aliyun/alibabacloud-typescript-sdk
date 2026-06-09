// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @remarks
   * 数据目录的备注描述信息
   * 
   * @example
   * 测试数据目录
   */
  comment?: string;
  /**
   * @remarks
   * 挂载类型 Catalog 关联的连接名称。仅 Provider 为 MySQL/PostgreSQL/Elasticsearch 时有值
   * 
   * @example
   * my_connection
   */
  connectionName?: string;
  /**
   * @remarks
   * 数据目录的唯一标识名称
   * 
   * @example
   * my_catalog
   */
  name?: string;
  /**
   * @remarks
   * 扩展属性（JSON 对象）。Elasticsearch 类型包含 IndexPattern 等信息
   * 
   * @example
   * {"IndexPattern":"my-index-*"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * 数据源提供方。EventHouse 为内置存储，MySQL/PostgreSQL/Elasticsearch 为外部挂载
   * 
   * @example
   * EventHouse
   */
  provider?: string;
  /**
   * @remarks
   * 数据目录类型，如 RELATIONAL
   * 
   * @example
   * RELATIONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      connectionName: 'ConnectionName',
      name: 'Name',
      properties: 'Properties',
      provider: 'Provider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      connectionName: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

