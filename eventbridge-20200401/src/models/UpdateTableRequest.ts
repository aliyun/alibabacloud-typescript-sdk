// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableRequestAddColumn extends $dara.Model {
  comment?: string;
  /**
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  /**
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestDeleteColumn extends $dara.Model {
  /**
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestRenameColumn extends $dara.Model {
  /**
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  /**
   * @example
   * fvt-oos-application-group-56ca74b000
   */
  newName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      newName: 'NewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      newName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestUpdateColumnComment extends $dara.Model {
  comment?: string;
  /**
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestUpdateColumnType extends $dara.Model {
  /**
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  /**
   * @example
   * PRIVATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestUpdateRetentionPolicy extends $dara.Model {
  /**
   * @example
   * 17
   */
  coldTTL?: number;
  /**
   * @example
   * 7
   */
  hotTTL?: number;
  static names(): { [key: string]: string } {
    return {
      coldTTL: 'ColdTTL',
      hotTTL: 'HotTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldTTL: 'number',
      hotTTL: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequest extends $dara.Model {
  /**
   * @remarks
   * 新增列定义（JSON 对象）。包含 Name（列名，必填）、Type（数据类型，必填，如 STRING、INT32、INT64、FLOAT、DOUBLE、BOOLEAN、TIMESTAMP）、Comment（列备注，选填）。每次调用只能新增一列
   * 
   * @example
   * {"Name":"id","Type":"bigint","Comment":"主键"}
   */
  addColumn?: UpdateTableRequestAddColumn;
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
  deleteColumn?: UpdateTableRequestDeleteColumn;
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
  renameColumn?: UpdateTableRequestRenameColumn;
  /**
   * @remarks
   * 修改列的备注信息（JSON 对象）。包含 Name（目标列名，必填）、Comment（新备注内容，必填，传空字符串可清除备注）。每次调用只能修改一列
   * 
   * @example
   * {"Name":"id","Comment":"主键ID"}
   */
  updateColumnComment?: UpdateTableRequestUpdateColumnComment;
  /**
   * @remarks
   * 修改列的数据类型（JSON 对象）。包含 Name（目标列名，必填）、Type（新数据类型，必填）。仅支持兼容类型转换，每次调用只能修改一列
   * 
   * @example
   * {"Name":"id","Type":"bigint"}
   */
  updateColumnType?: UpdateTableRequestUpdateColumnType;
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
  updateRetentionPolicy?: UpdateTableRequestUpdateRetentionPolicy;
  static names(): { [key: string]: string } {
    return {
      addColumn: 'AddColumn',
      catalog: 'Catalog',
      clientToken: 'ClientToken',
      deleteColumn: 'DeleteColumn',
      name: 'Name',
      namespace: 'Namespace',
      renameColumn: 'RenameColumn',
      updateColumnComment: 'UpdateColumnComment',
      updateColumnType: 'UpdateColumnType',
      updateComment: 'UpdateComment',
      updateRetentionPolicy: 'UpdateRetentionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addColumn: UpdateTableRequestAddColumn,
      catalog: 'string',
      clientToken: 'string',
      deleteColumn: UpdateTableRequestDeleteColumn,
      name: 'string',
      namespace: 'string',
      renameColumn: UpdateTableRequestRenameColumn,
      updateColumnComment: UpdateTableRequestUpdateColumnComment,
      updateColumnType: UpdateTableRequestUpdateColumnType,
      updateComment: 'string',
      updateRetentionPolicy: UpdateTableRequestUpdateRetentionPolicy,
    };
  }

  validate() {
    if(this.addColumn && typeof (this.addColumn as any).validate === 'function') {
      (this.addColumn as any).validate();
    }
    if(this.deleteColumn && typeof (this.deleteColumn as any).validate === 'function') {
      (this.deleteColumn as any).validate();
    }
    if(this.renameColumn && typeof (this.renameColumn as any).validate === 'function') {
      (this.renameColumn as any).validate();
    }
    if(this.updateColumnComment && typeof (this.updateColumnComment as any).validate === 'function') {
      (this.updateColumnComment as any).validate();
    }
    if(this.updateColumnType && typeof (this.updateColumnType as any).validate === 'function') {
      (this.updateColumnType as any).validate();
    }
    if(this.updateRetentionPolicy && typeof (this.updateRetentionPolicy as any).validate === 'function') {
      (this.updateRetentionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

