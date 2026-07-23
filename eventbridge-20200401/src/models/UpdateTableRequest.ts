// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableRequestAddColumn extends $dara.Model {
  /**
   * @remarks
   * Comment.
   * 
   * @example
   * 接口授权_刘宏月_申请测试环境服务器资源访问权限_2026-07-06
   */
  comment?: string;
  /**
   * @remarks
   * The full name of the queried event type.
   * 
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  /**
   * @remarks
   * The event target type. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
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
   * @remarks
   * Connector name.
   * 
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
   * @remarks
   * Connector name.
   * 
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  /**
   * @remarks
   * The updated name. Enter this when you need to modify the metric name.
   * 
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
  /**
   * @remarks
   * Comment information.
   * 
   * @example
   * DIUS Dev 环境
   */
  comment?: string;
  /**
   * @remarks
   * Extended data name
   * 
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
   * @remarks
   * Connector name
   * 
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  /**
   * @remarks
   * Column type
   * 
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
   * @remarks
   * Cold storage duration
   * 
   * @example
   * 17
   */
  coldTTL?: number;
  /**
   * @remarks
   * Hot storage duration
   * 
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
   * Add column
   * 
   * @example
   * {"Name":"id","Type":"bigint","Comment":"主键"}
   */
  addColumn?: UpdateTableRequestAddColumn;
  /**
   * @remarks
   * Data catalog to which it belongs
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Idempotency token
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * Delete column
   * 
   * @example
   * {"Name":"old_column"}
   */
  deleteColumn?: UpdateTableRequestDeleteColumn;
  /**
   * @remarks
   * Table name
   * 
   * This parameter is required.
   * 
   * @example
   * my_table
   */
  name?: string;
  /**
   * @remarks
   * Namespace to which it belongs
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Rename column
   * 
   * @example
   * {"Name":"old_name","NewName":"new_name"}
   */
  renameColumn?: UpdateTableRequestRenameColumn;
  /**
   * @remarks
   * Update column comment
   * 
   * @example
   * {"Name":"id","Comment":"主键ID"}
   */
  updateColumnComment?: UpdateTableRequestUpdateColumnComment;
  /**
   * @remarks
   * Update column type
   * 
   * @example
   * {"Name":"id","Type":"bigint"}
   */
  updateColumnType?: UpdateTableRequestUpdateColumnType;
  /**
   * @remarks
   * Update table comment
   * 
   * @example
   * 更新后的备注
   */
  updateComment?: string;
  /**
   * @remarks
   * Update retention policy
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

