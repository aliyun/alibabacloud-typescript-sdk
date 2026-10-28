// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobAlertResponseBody extends $dara.Model {
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
   * Indicates whether the latency status is monitored. Valid values:
   * 
   * - **enable**: Yes.
   * - **disable**: No.
   * 
   * @example
   * enable
   */
  delayAlertStatus?: string;
  /**
   * @remarks
   * The threshold for triggering a latency alert. Unit: seconds.
   * 
   * @example
   * 10
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The mobile phone number of the contact for abnormal alerts.
   * 
   * @example
   * 1361234****,1371234****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Indicates whether the abnormal status is monitored. Valid values:
   * 
   * - **enable**: Yes.
   * - **disable**: No.
   * 
   * @example
   * enable
   */
  errorAlertStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 210ec20e16055205968635339d****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * - **Forward**: Forward.
   * - **Reverse**: Reverse.
   * 
   * > Default value: **Forward**.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The instance ID of the data synchronization instance.
   * 
   * @example
   * kxz1170c10p****
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * @example
   * Polar MySQL_TO_RDS MySQL
   */
  synchronizationJobName?: string;
  static names(): { [key: string]: string } {
    return {
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      requestId: 'RequestId',
      success: 'Success',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
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
      requestId: 'string',
      success: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

