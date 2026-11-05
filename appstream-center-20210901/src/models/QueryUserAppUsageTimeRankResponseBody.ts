// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserAppUsageTimeRankResponseBodyIndexData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-9ciijz60n4xsv****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Visual Studio Code
   */
  appName?: string;
  /**
   * @remarks
   * The cumulative usage duration of the application within the statistical range. Unit: seconds.
   * 
   * @example
   * 200
   */
  appTimeCnt?: string;
  /**
   * @remarks
   * The application version. The current version may not return this value, and callers should not rely on this field. A non-empty value indicates the application version.
   * 
   * @example
   * 1.96.0
   */
  appVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appTimeCnt: 'AppTimeCnt',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appTimeCnt: 'string',
      appVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAppUsageTimeRankResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of `200` indicates that the request is processed successfully. Other values indicate that the processing failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ranking list of user application usage duration, sorted in descending order of cumulative usage duration.
   */
  indexData?: QueryUserAppUsageTimeRankResponseBodyIndexData[];
  /**
   * @remarks
   * The description of the request processing result. If the request is successful, `success` is usually returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      indexData: 'IndexData',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexData: { 'type': 'array', 'itemType': QueryUserAppUsageTimeRankResponseBodyIndexData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexData)) {
      $dara.Model.validateArray(this.indexData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

