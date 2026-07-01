// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Schema } from "./Schema";


export class TableSchema extends $dara.Model {
  /**
   * @remarks
   * The ID of the collect sink operator.
   */
  collectSinkOperatorId?: string;
  /**
   * @remarks
   * The schema of the table.
   */
  schema?: Schema;
  /**
   * @remarks
   * The name of the table.
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      collectSinkOperatorId: 'collectSinkOperatorId',
      schema: 'schema',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectSinkOperatorId: 'string',
      schema: Schema,
      tableName: 'string',
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

