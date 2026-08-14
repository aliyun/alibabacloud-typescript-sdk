// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number of the contact for latency alerts.
   * 
   * @example
   * 1361234****,1371234****
   */
  delayAlertPhone?: string;
  /**
   * @remarks
   * Indicates whether latency status monitoring is enabled. Valid values:
   * 
   * - **enable**: Enabled.
   * - **disable**: Disabled.
   * 
   * @example
   * enable
   */
  delayAlertStatus?: string;
  /**
   * @remarks
   * The threshold that triggers a latency alert. Unit: seconds.
   * 
   * @example
   * 0
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The mobile phone number of the contact for error alerts.
   * 
   * @example
   * 1361234****,1371234****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Indicates whether error status monitoring is enabled. Valid values:
   * 
   * - **enable**: Enabled.
   * - **disable**: Disabled.
   * 
   * @example
   * enable
   */
  errorAlertStatus?: string;
  /**
   * @remarks
   * The ID of the data migration instance.
   * 
   * @example
   * dtslb9113qq11n****
   */
  migrationJobId?: string;
  /**
   * @remarks
   * The name of the data migration task.
   * 
   * @example
   * zwy-test5
   */
  migrationJobName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CFB89C51-6F03-519C-A921-AAE28D50AEFB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

