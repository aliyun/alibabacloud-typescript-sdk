// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 新增列定义（JSON 对象）。包含 Name（列名，必填）、Type（数据类型，必填，如 STRING、INT32、INT64、FLOAT、DOUBLE、BOOLEAN、TIMESTAMP）、Comment（列备注，选填）。每次调用只能新增一列
   * 
   * @example
   * {"Name":"id","Type":"bigint","Comment":"主键"}
   */
  addColumnShrink?: string;
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
   * 用于保证请求幂等性的Token。建议使用 UUID
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * 删除列定义（JSON 对象）。包含 Name（要删除的列名，必填）。删除后不可恢复，已有数据中该列的值将丢失。每次调用只能删除一列
   * 
   * @example
   * {"Name":"old_column"}
   */
  deleteColumnShrink?: string;
  /**
   * @remarks
   * 要修改的事件表名称。名称本身不可修改，此处用于定位目标表。需同时指定所属 Catalog 和 Namespace。可通过 ListTables 获取
   * 
   * This parameter is required.
   * 
   * @example
   * my_table
   */
  name?: string;
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
   * 重命名列（JSON 对象）。包含 Name（原列名，必填）、NewName（新列名，必填）。每次调用只能重命名一列
   * 
   * @example
   * {"Name":"old_name","NewName":"new_name"}
   */
  renameColumnShrink?: string;
  /**
   * @remarks
   * 修改列的备注信息（JSON 对象）。包含 Name（目标列名，必填）、Comment（新备注内容，必填，传空字符串可清除备注）。每次调用只能修改一列
   * 
   * @example
   * {"Name":"id","Comment":"主键ID"}
   */
  updateColumnCommentShrink?: string;
  /**
   * @remarks
   * 修改列的数据类型（JSON 对象）。包含 Name（目标列名，必填）、Type（新数据类型，必填）。仅支持兼容类型转换，每次调用只能修改一列
   * 
   * @example
   * {"Name":"id","Type":"bigint"}
   */
  updateColumnTypeShrink?: string;
  /**
   * @remarks
   * 修改表的备注描述。传入新的备注内容替换原有备注，传空字符串可清除备注
   * 
   * @example
   * 更新后的备注
   */
  updateComment?: string;
  /**
   * @remarks
   * 修改数据保留策略（JSON 对象）。包含 HotTTL（热数据保留天数）、ColdTTL（冷数据保留天数）。传入后会替换原有策略
   * 
   * @example
   * {"HotTTL":7,"ColdTTL":30}
   */
  updateRetentionPolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      addColumnShrink: 'AddColumn',
      catalog: 'Catalog',
      clientToken: 'ClientToken',
      deleteColumnShrink: 'DeleteColumn',
      name: 'Name',
      namespace: 'Namespace',
      renameColumnShrink: 'RenameColumn',
      updateColumnCommentShrink: 'UpdateColumnComment',
      updateColumnTypeShrink: 'UpdateColumnType',
      updateComment: 'UpdateComment',
      updateRetentionPolicyShrink: 'UpdateRetentionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addColumnShrink: 'string',
      catalog: 'string',
      clientToken: 'string',
      deleteColumnShrink: 'string',
      name: 'string',
      namespace: 'string',
      renameColumnShrink: 'string',
      updateColumnCommentShrink: 'string',
      updateColumnTypeShrink: 'string',
      updateComment: 'string',
      updateRetentionPolicyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

