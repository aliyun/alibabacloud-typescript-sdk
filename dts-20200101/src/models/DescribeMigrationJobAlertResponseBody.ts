// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * Phone number of the contact for delay alarm.
   * 
   * @example
   * 1361234****,1371234****
   */
  delayAlertPhone?: string;
  /**
   * @remarks
   * Whether to monitor the delay status, return values:
   * - **enable**: Yes. - **disable**: No.
   * 
   * @example
   * enable
   */
  delayAlertStatus?: string;
  /**
   * @remarks
   * The threshold for triggering a delayed alarm, in seconds.
   * 
   * @example
   * 0
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * Error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * Phone number of the contact for abnormal alarm notifications
   * 
   * @example
   * 1361234****,1371234****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Whether to monitor for abnormal status, return values:
   * - **enable**: Yes. - **disable**: No.
   * 
   * @example
   * enable
   */
  errorAlertStatus?: string;
  /**
   * @remarks
   * Data migration instance ID.
   * 
   * @example
   * dtslb9113qq11n****
   */
  migrationJobId?: string;
  /**
   * @remarks
   * Name of the data migration task.
   * 
   * @example
   * zwy-test5
   */
  migrationJobName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CFB89C51-6F03-519C-A921-AAE28D50AEFB
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
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

