// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The time of the monitoring metric. The time format follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2016-07-28T08:20:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The value corresponding to the monitoring metric.
   * 
   * @example
   * 15
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

