// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  dbId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * order_info
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

