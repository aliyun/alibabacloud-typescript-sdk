// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserAppUsageAggregateByHourResponseBodyIndexData extends $dara.Model {
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
   * The statistical hour, which is a two-digit 24-hour format string with values ranging from 00 to 23. Hour boundaries are divided based on the Asia/Shanghai (UTC+8) time zone.
   * 
   * @example
   * 02
   */
  hh?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appTimeCnt: 'AppTimeCnt',
      hh: 'Hh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appTimeCnt: 'string',
      hh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAppUsageAggregateByHourResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates that the request is processed successfully. Other values indicate that the processing failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of hourly aggregated user application usage data. A maximum of five records are returned for each hour.
   */
  indexData?: QueryUserAppUsageAggregateByHourResponseBodyIndexData[];
  /**
   * @remarks
   * The description of the request processing result. A value of success is usually returned when the request is successful.
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
      indexData: { 'type': 'array', 'itemType': QueryUserAppUsageAggregateByHourResponseBodyIndexData },
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

