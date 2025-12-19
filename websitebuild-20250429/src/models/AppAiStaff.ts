// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppAiStaff extends $dara.Model {
  staffId?: string;
  staffName?: string;
  staffType?: string;
  /**
   * @remarks
   * 可能的值：unknown, init, testing, online
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

