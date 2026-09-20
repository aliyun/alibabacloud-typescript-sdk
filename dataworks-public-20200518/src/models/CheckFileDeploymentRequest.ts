// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckFileDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * https://result.aliyun.com/?checkerInstanceId=
   */
  checkDetailUrl?: string;
  /**
   * @remarks
   * The instance ID to which the file checker belongs. You can obtain this value from the CheckerInstanceId field in the file publish check event.
   * 
   * This parameter is required.
   * 
   * @example
   * 66_123455623_2
   */
  checkerInstanceId?: string;
  /**
   * @remarks
   * The check status of the file pending deployment. Valid values:
   * 
   * - OK: The file passed the check.
   * - WARN: The file passed the check but has warnings.
   * - FAIL: The file failed the check.
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

