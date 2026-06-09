// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 表所属的数据目录名称。可通过 ListCatalogs 获取已有目录列表
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * 用于保证请求幂等性的Token，防止因网络重试导致重复创建。建议使用 UUID
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * 表的列定义（JSON 数组）。每列包含 Name（列名，必填）、Type（数据类型，必填，如 STRING、INT32、INT64、FLOAT、DOUBLE、BOOLEAN、TIMESTAMP）、Comment（列备注，选填）
   * 
   * @example
   * [{"Name":"id","Type":"bigint","Comment":"主键"}]
   */
  columnsShrink?: string;
  /**
   * @remarks
   * 表的备注描述信息，无格式限制
   * 
   * @example
   * 测试事件表
   */
  comment?: string;
  /**
   * @remarks
   * 事件表名称。以字母或数字开头，支持字母、数字、下划线和短横线，长度1~127。在同一命名空间下唯一
   * 
   * This parameter is required.
   * 
   * @example
   * my_table
   */
  name?: string;
  /**
   * @remarks
   * 表所属的命名空间名称。可通过 ListNamespaces 获取已有命名空间列表
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * 数据保留策略（JSON 对象）。包含 HotTTL（热数据保留天数，高性能查询）和 ColdTTL（冷数据保留天数，低成本存储）。不传则使用系统默认值
   * 
   * @example
   * {"HotTTL":7,"ColdTTL":30}
   */
  retentionPolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      clientToken: 'ClientToken',
      columnsShrink: 'Columns',
      comment: 'Comment',
      name: 'Name',
      namespace: 'Namespace',
      retentionPolicyShrink: 'RetentionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      clientToken: 'string',
      columnsShrink: 'string',
      comment: 'string',
      name: 'string',
      namespace: 'string',
      retentionPolicyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

