// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostInfoByDbsInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * {
   *       "backupPlanComment": "",
   *       "commodity": "cbs_post",
   *       "product": "cbs",
   *       "moduleCode": "BackupStorageSize",
   *       "instanceName": "d-2zefd6337d766294",
   *       "backupPlanId": "dbs:d-2zefd6337d766294",
   *       "moduleName": "mongodb"
   *     }
   */
  data?: string;
  /**
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @example
   * The specified parameter %s value is not valid.
   */
  message?: string;
  /**
   * @example
   * 9C397502-B4F2-4E22-AD97-C81F0049F3F3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

