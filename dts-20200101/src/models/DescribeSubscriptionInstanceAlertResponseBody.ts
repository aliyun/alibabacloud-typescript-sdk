// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInstanceAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number of the contact for latency alerts.
   * 
   * @example
   * 13465****
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
   * The threshold for triggering a latency alert. Unit: seconds. The value must be an integer. Recommended value: 10.
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
   * The mobile phone number of the contact for exception alerts.
   * 
   * @example
   * 13555*****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Indicates whether the exception status is monitored. Valid values:
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
   * 210ec2e116055198849072222d****
   */
  requestId?: string;
  /**
   * @remarks
   * The change tracking instance ID.
   * 
   * @example
   * dtsl8zl9ek6292****
   */
  subscriptionInstanceID?: string;
  /**
   * @remarks
   * The name of the change tracking instance.
   * 
   * @example
   * test
   */
  subscriptionInstanceName?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      requestId: 'RequestId',
      subscriptionInstanceID: 'SubscriptionInstanceID',
      subscriptionInstanceName: 'SubscriptionInstanceName',
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
      requestId: 'string',
      subscriptionInstanceID: 'string',
      subscriptionInstanceName: 'string',
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

