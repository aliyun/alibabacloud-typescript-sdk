// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKPlayFailStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The time granularity. Valid values: 300, 3600, 14400, 28800, and 86400. Unit: seconds. The default value is 300. If you specify an invalid value or do not specify this parameter, the default value is used.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * From V2.1.0, all domain names are queried by default. You can also specify specific domain names that you want to query. In this case, separate the domain names with commas (,). You can specify up to 500 domain names in each call.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainNameList: 'DomainNameList',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainNameList)) {
      $dara.Model.validateArray(this.domainNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

