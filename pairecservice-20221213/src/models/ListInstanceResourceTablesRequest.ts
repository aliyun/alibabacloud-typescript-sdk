// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourceTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The MaxCompute schema.
   * 
   * @example
   * jackal
   */
  maxcomputeSchema?: string;
  /**
   * @remarks
   * The table type.
   * 
   * @example
   * ManagedTable
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      maxcomputeSchema: 'MaxcomputeSchema',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxcomputeSchema: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

