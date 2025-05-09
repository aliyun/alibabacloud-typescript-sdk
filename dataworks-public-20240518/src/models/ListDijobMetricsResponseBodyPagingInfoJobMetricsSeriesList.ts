// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList extends $dara.Model {
  /**
   * @remarks
   * The point in time at which data is sampled based on the metric.
   * 
   * @example
   * 1716881141
   */
  time?: number;
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
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

