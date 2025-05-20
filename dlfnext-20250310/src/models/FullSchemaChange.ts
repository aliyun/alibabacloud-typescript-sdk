// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FullDataType } from "./FullDataType";
import { Move } from "./Move";


export class FullSchemaChange extends $dara.Model {
  action?: string;
  /**
   * @remarks
   * required in UpdateComment/AddColumn
   */
  comment?: string;
  dataType?: FullDataType;
  /**
   * @remarks
   * required in AddColumn/RenameColumn/DropColumn/UpdateColumnComment/UpdateColumnType/UpdateColumnNullability
   */
  fieldNames?: string[];
  /**
   * @remarks
   * required in UpdateColumnType
   */
  keepNullability?: boolean;
  /**
   * @remarks
   * required in SetOption/RemoveOption
   */
  key?: string;
  move?: Move;
  /**
   * @remarks
   * required in UpdateColumnComment
   */
  newComment?: string;
  newDataType?: FullDataType;
  /**
   * @remarks
   * required in RenameColumn
   */
  newName?: string;
  /**
   * @remarks
   * required in UpdateColumnNullability
   */
  newNullability?: boolean;
  /**
   * @remarks
   * required in SetOption
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

