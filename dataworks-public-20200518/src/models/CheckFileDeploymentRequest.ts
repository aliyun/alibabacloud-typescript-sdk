// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckFileDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * https://result.aliyun.com/?checkerInstanceId=
   */
  checkDetailUrl?: string;
  /**
   * @remarks
   * The ID of the instance to which the file checker belongs. You can obtain the ID from the CheckerInstanceId parameter in the check event logs returned by DataWorks.
   * 
   * This parameter is required.
   * 
   * @example
   * 66_123455623_2
   */
  checkerInstanceId?: string;
  /**
   * @remarks
   * The check status of the file that you want to deploy. Valid values:
   * 
   * *   OK: The file passes the check.
   * *   WARN: The file passes the check, but an alert is reported.
   * *   FAIL: The file fails the check.
   * 
   * This parameter is required.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkDetailUrl: 'CheckDetailUrl',
      checkerInstanceId: 'CheckerInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDetailUrl: 'string',
      checkerInstanceId: 'string',
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

