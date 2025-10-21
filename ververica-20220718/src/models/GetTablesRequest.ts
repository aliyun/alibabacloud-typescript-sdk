// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTablesRequest extends $dara.Model {
  /**
   * @example
   * item
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

