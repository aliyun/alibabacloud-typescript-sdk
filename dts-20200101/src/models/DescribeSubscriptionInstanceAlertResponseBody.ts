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
   * Indicates whether latency alerting is enabled. Valid values:
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
   * The threshold for triggering latency alerts. Unit: seconds. The value must be an integer. A value of 10 seconds is recommended.
   * 
   * @example
   * 10
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
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
   * 13555*****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Indicates whether error alerting is enabled. Valid values:
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
   * The request ID.
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

