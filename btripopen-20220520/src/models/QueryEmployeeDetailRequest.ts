// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEmployeeDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc12138
   */
  outEmployeeId?: string;
  static names(): { [key: string]: string } {
    return {
      outEmployeeId: 'out_employee_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outEmployeeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

