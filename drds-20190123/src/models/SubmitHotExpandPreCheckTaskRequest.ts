// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHotExpandPreCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   RDS
   * *   PolarDB
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The name of the PolarDB-X database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drd*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableList?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

