// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticQpsRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1688140799999
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address of the Anti-DDoS Proxy instance to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684252800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

