// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_tb
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
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

