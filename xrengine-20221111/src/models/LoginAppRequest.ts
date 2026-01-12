// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginAppRequest extends $dara.Model {
  empId?: string;
  empName?: string;
  token?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      empId: 'EmpId',
      empName: 'EmpName',
      token: 'Token',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empId: 'string',
      empName: 'string',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

