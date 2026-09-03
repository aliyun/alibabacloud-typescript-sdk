// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFeatureTrialInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the feature is activated. The value false is returned if the feature is not activated. In this case, InTrialPeriod is false and TrialExpireTime is 0.
   */
  featureEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the feature is within the free trial period. The value false is returned if the feature is not activated or the free trial has expired.
   */
  inTrialPeriod?: boolean;
  /**
   * @remarks
   * The returned message. The value "successful" is returned upon success. An error message is returned upon failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   */
  success?: boolean;
  /**
   * @remarks
   * The expiration time of the free trial. The value is a UNIX timestamp, in seconds. The value 0 is returned if the feature is not activated.
   * 
   * @example
   * 1584597600
   */
  trialExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      featureEnabled: 'FeatureEnabled',
      inTrialPeriod: 'InTrialPeriod',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      trialExpireTime: 'TrialExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      featureEnabled: 'boolean',
      inTrialPeriod: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      trialExpireTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

