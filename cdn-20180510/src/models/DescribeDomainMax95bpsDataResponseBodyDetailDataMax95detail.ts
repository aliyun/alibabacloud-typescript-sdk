// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainMax95BpsDataResponseBodyDetailDataMax95Detail extends $dara.Model {
  /**
   * @remarks
   * Region of the 95th percentile bandwidth.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The 95th percentile bandwidth.
   * 
   * @example
   * 16777590.28
   */
  max95Bps?: number;
  /**
   * @remarks
   * Time of the 95th percentile bandwidth.
   * 
   * @example
   * 2015-12-11T21:05:00Z
   */
  max95BpsPeakTime?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-12-11T21:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      max95Bps: 'Max95Bps',
      max95BpsPeakTime: 'Max95BpsPeakTime',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      max95Bps: 'number',
      max95BpsPeakTime: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

