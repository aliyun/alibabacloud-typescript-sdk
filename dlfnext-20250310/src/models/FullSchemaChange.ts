// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FullDataType } from "./FullDataType";
import { Move } from "./Move";


export class FullSchemaChange extends $dara.Model {
  /**
   * @remarks
   * The type of change.
   * 
   * @example
   * setOption
   */
  action?: string;
  /**
   * @remarks
   * The description. This parameter is required when `action` is `UpdateComment` or `AddColumn`.
   * 
   * @example
   * col_comment
   */
  comment?: string;
  /**
   * @remarks
   * The column type. This parameter is required when `action` is `AddColumn`.
   */
  dataType?: FullDataType;
  /**
   * @remarks
   * The table column names. This parameter is required when `action` is `AddColumn`, `RenameColumn`, `DropColumn`, `UpdateColumnComment`, `UpdateColumnType`, or `UpdateColumnNullability`.
   */
  fieldNames?: string[];
  /**
   * @remarks
   * Specifies whether the column is nullable. This parameter is required when the `action` is `UpdateColumnType`.
   * 
   * @example
   * true
   */
  keepNullability?: boolean;
  /**
   * @remarks
   * The key for the configuration. This parameter is required when `action` is `SetOption` or `RemoveOption`.
   * 
   * @example
   * \\"true\\"
   */
  key?: string;
  /**
   * @remarks
   * The column to move. This parameter is required when `action` is `AddColumn` or `UpdateColumnPosition`.
   */
  move?: Move;
  /**
   * @remarks
   * The new description for the column. This parameter is required when `action` is `UpdateColumnComment`.
   * 
   * @example
   * col_comment_test
   */
  newComment?: string;
  /**
   * @remarks
   * The new column type. This parameter is required when `action` is `UpdateColumnType`.
   */
  newDataType?: FullDataType;
  /**
   * @remarks
   * The new name of the column. This parameter is required when `action` is `RenameColumn`.
   * 
   * @example
   * new_col_test
   */
  newName?: string;
  /**
   * @remarks
   * Specifies whether the new column is nullable. This parameter is required when `action` is `UpdateColumnType`.
   * 
   * @example
   * true
   */
  newNullability?: boolean;
  /**
   * @remarks
   * The value of the configuration. This parameter is required when `action` is `SetOption`.
   * 
   * @example
   * \\"manifest.delete-file-drop-stats\\"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      comment: 'comment',
      dataType: 'dataType',
      fieldNames: 'fieldNames',
      keepNullability: 'keepNullability',
      key: 'key',
      move: 'move',
      newComment: 'newComment',
      newDataType: 'newDataType',
      newName: 'newName',
      newNullability: 'newNullability',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      dataType: FullDataType,
      fieldNames: { 'type': 'array', 'itemType': 'string' },
      keepNullability: 'boolean',
      key: 'string',
      move: Move,
      newComment: 'string',
      newDataType: FullDataType,
      newName: 'string',
      newNullability: 'boolean',
      value: 'string',
    };
  }

  validate() {
    if(this.dataType && typeof (this.dataType as any).validate === 'function') {
      (this.dataType as any).validate();
    }
    if(Array.isArray(this.fieldNames)) {
      $dara.Model.validateArray(this.fieldNames);
    }
    if(this.move && typeof (this.move as any).validate === 'function') {
      (this.move as any).validate();
    }
    if(this.newDataType && typeof (this.newDataType as any).validate === 'function') {
      (this.newDataType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

