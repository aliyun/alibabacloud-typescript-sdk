// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AliyunAccounts extends $dara.Model {
  aliyunUid?: string;
  employeeId?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      employeeId: 'EmployeeId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      employeeId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

