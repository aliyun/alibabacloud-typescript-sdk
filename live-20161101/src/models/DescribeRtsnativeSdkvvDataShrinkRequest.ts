// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKVvDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The time granularity. Valid values: 300, 3600, 14400, 28800, and 86400. Unit: seconds. If this parameter is not specified or the specified value is not supported, the default value 300 is used.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The array.
   */
  domainNameListShrink?: string;
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
      domainNameListShrink: 'DomainNameList',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainNameListShrink: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

