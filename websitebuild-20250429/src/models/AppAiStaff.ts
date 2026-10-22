// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppAiStaff extends $dara.Model {
  /**
   * @remarks
   * The employee ID.
   * 
   * @example
   * 370196
   */
  staffId?: string;
  /**
   * @remarks
   * The employee name.
   */
  staffName?: string;
  /**
   * @remarks
   * The employee type.
   */
  staffType?: string;
  /**
   * @remarks
   * Valid values: unknown, init, testing, and online.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      staffId: 'StaffId',
      staffName: 'StaffName',
      staffType: 'StaffType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staffId: 'string',
      staffName: 'string',
      staffType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

