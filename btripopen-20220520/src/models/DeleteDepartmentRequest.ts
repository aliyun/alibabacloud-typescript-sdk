// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dept123
   */
  outDeptId?: string;
  static names(): { [key: string]: string } {
    return {
      outDeptId: 'out_dept_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outDeptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

