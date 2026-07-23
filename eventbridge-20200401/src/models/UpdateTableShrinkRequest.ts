// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Add column
   * 
   * @example
   * {"Name":"id","Type":"bigint","Comment":"主键"}
   */
  addColumnShrink?: string;
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
  deleteColumnShrink?: string;
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
  renameColumnShrink?: string;
  /**
   * @remarks
   * Update column comment
   * 
   * @example
   * {"Name":"id","Comment":"主键ID"}
   */
  updateColumnCommentShrink?: string;
  /**
   * @remarks
   * Update column type
   * 
   * @example
   * {"Name":"id","Type":"bigint"}
   */
  updateColumnTypeShrink?: string;
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

