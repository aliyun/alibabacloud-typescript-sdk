// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrailStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether logging is enabled for the trail. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isLogging?: boolean;
  /**
   * @remarks
   * The log of the last failed delivery.
   * 
   * @example
   * write sls failed, exception: the parent of sub user must be project owner, itemscount: 1
   */
  latestDeliveryError?: string;
  /**
   * @remarks
   * The log of the last failed delivery to Log Service.
   * 
   * @example
   * write sls failed, exception: the parent of sub user must be project owner, itemscount: 1
   */
  latestDeliveryLogServiceError?: string;
  /**
   * @remarks
   * The most recent time when an event was delivered to Log Service.
   * 
   * @example
   * 2021-02-26T09:19:44Z
   */
  latestDeliveryLogServiceTime?: string;
  /**
   * @remarks
   * The most recent time when an event was delivered by the trail.
   * 
   * @example
   * 2021-02-26T09:19:44Z
   */
  latestDeliveryTime?: string;
  /**
   * @remarks
   * Indicates whether the destination Object Storage Service (OSS) bucket is available. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  ossBucketStatus?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8067369B-B923-4D26-85BC-61BF33922505
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the destination Log Service Logstore is available. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  slsLogStoreStatus?: boolean;
  /**
   * @remarks
   * The time when logging was last enabled for the trail.
   * 
   * @example
   * 2021-02-24T09:19:44Z
   */
  startLoggingTime?: string;
  /**
   * @remarks
   * The time when logging was last disabled for the trail.
   * 
   * @example
   * 2021-02-25T09:19:44Z
   */
  stopLoggingTime?: string;
  static names(): { [key: string]: string } {
    return {
      isLogging: 'IsLogging',
      latestDeliveryError: 'LatestDeliveryError',
      latestDeliveryLogServiceError: 'LatestDeliveryLogServiceError',
      latestDeliveryLogServiceTime: 'LatestDeliveryLogServiceTime',
      latestDeliveryTime: 'LatestDeliveryTime',
      ossBucketStatus: 'OssBucketStatus',
      requestId: 'RequestId',
      slsLogStoreStatus: 'SlsLogStoreStatus',
      startLoggingTime: 'StartLoggingTime',
      stopLoggingTime: 'StopLoggingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLogging: 'boolean',
      latestDeliveryError: 'string',
      latestDeliveryLogServiceError: 'string',
      latestDeliveryLogServiceTime: 'string',
      latestDeliveryTime: 'string',
      ossBucketStatus: 'boolean',
      requestId: 'string',
      slsLogStoreStatus: 'boolean',
      startLoggingTime: 'string',
      stopLoggingTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

