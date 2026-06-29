// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskAssginConfig extends $dara.Model {
  /**
   * @remarks
   * Allocation quantity.
   * 
   * @example
   * 2
   */
  assignCount?: number;
  /**
   * @remarks
   * Assign by field.
   * 
   * @example
   * label_field
   */
  assignField?: string;
  /**
   * @remarks
   * If average allocation is selected, specify the number of job packages.
   * 
   * @example
   * 0
   */
  assignSubTaskCount?: string;
  /**
   * @remarks
   * The allocation rule for job packages. Valid values:
   * - FIXED_SIZE: Assign by fixed size.
   * - AVG_SIZE: Assign by average quantity.
   * - FIELD_BASE: Assign by imported field.
   * 
   * @example
   * FIXED_SIZE
   */
  assignType?: string;
  static names(): { [key: string]: string } {
    return {
      assignCount: 'AssignCount',
      assignField: 'AssignField',
      assignSubTaskCount: 'AssignSubTaskCount',
      assignType: 'AssignType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignCount: 'number',
      assignField: 'string',
      assignSubTaskCount: 'string',
      assignType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

