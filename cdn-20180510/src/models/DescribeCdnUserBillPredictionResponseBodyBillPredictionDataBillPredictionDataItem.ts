// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem extends $dara.Model {
  /**
   * @remarks
   * The billable region.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The time when the value used as the estimated value is generated. This parameter is returned only if the metering method is pay by 95th percentile, pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00, or pay by 4th peak bandwidth per month.
   * 
   * @example
   * 2018-10-15T16:00:00Z
   */
  timeStp?: string;
  /**
   * @remarks
   * The estimated value.
   * 
   * @example
   * 10000
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      timeStp: 'TimeStp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      timeStp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

