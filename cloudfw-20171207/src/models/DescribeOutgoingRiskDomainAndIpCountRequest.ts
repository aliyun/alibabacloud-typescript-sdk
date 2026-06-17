// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingRiskDomainAndIpCountRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp that is accurate to the second.
   * 
   * @example
   * 1751595213
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp that is accurate to the second.
   * 
   * @example
   * 1749434787
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
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

