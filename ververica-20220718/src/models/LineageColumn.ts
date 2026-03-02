// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageColumn extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * name
   */
  columnName?: string;
  /**
   * @remarks
   * The original type of the column.
   * 
   * @example
   * string
   */
  columnNativeType?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * string
   */
  columnType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1723537978
   */
  createdAt?: number;
  /**
   * @remarks
   * The user that creates the column.
   * 
   * @example
   * userA
   */
  creator?: string;
  /**
   * @remarks
   * The description.
   */
  description?: string;
  /**
   * @remarks
   * The field ID.
   * 
   * @example
   * 123ss3
   */
  id?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1723537978
   */
  modifiedAt?: number;
  /**
   * @remarks
   * The ID of the account that is used to modify the column.
   * 
   * @example
   * userA
   */
  modifier?: string;
  /**
   * @remarks
   * Indicates whether the value is nullable.
   * 
   * @example
   * false
   */
  nullable?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'columnName',
      columnNativeType: 'columnNativeType',
      columnType: 'columnType',
      createdAt: 'createdAt',
      creator: 'creator',
      description: 'description',
      id: 'id',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      nullable: 'nullable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNativeType: 'string',
      columnType: 'string',
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      id: 'string',
      modifiedAt: 'number',
      modifier: 'string',
      nullable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

