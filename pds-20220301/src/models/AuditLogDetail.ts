// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DriveLogDetail } from "./DriveLogDetail";
import { FileLogDetail } from "./FileLogDetail";
import { UserLogDetail } from "./UserLogDetail";


export class AuditLogDetail extends $dara.Model {
  driveLogDetail?: DriveLogDetail;
  fileLogDetail?: FileLogDetail;
  userLogDetail?: UserLogDetail;
  static names(): { [key: string]: string } {
    return {
      driveLogDetail: 'drive_log_detail',
      fileLogDetail: 'file_log_detail',
      userLogDetail: 'user_log_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveLogDetail: DriveLogDetail,
      fileLogDetail: FileLogDetail,
      userLogDetail: UserLogDetail,
    };
  }

  validate() {
    if(this.driveLogDetail && typeof (this.driveLogDetail as any).validate === 'function') {
      (this.driveLogDetail as any).validate();
    }
    if(this.fileLogDetail && typeof (this.fileLogDetail as any).validate === 'function') {
      (this.fileLogDetail as any).validate();
    }
    if(this.userLogDetail && typeof (this.userLogDetail as any).validate === 'function') {
      (this.userLogDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

