// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKFirstFrameDelayRequest extends $dara.Model {
  /**
   * @remarks
   * The time granularity. Valid values: 300, 3600, 14400, 28800, and 86400. Unit: seconds. If you do not specify this parameter or specify an unsupported value, the default value 300 is used.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The domain names to query. By default, all domain names are queried (version 2.1.0 and later). You can also specify domain names. Separate multiple domain names with commas (,). You can specify up to 500 domain names at a time.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * The end time. This parameter is required. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time. This parameter is required. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

