// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrimaryKey extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  columns?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  constraintName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  constraintType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enforced?: boolean;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      constraintName: 'constraintName',
      constraintType: 'constraintType',
      enforced: 'enforced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      constraintName: 'string',
      constraintType: 'string',
      enforced: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

