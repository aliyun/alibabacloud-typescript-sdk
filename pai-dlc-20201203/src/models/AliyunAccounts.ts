// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AliyunAccounts extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The employee ID of the internal user.
   */
  employeeId?: string;
  /**
   * @remarks
   * The creation time of the record.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time of the record.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
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

