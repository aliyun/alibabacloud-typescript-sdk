// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The time of the peak bandwidth value if the **Field** parameter in the request is set to **bps**. Otherwise, this parameter returns the same value as the **TimeStamp** parameter.
   * 
   * @example
   * 2015-12-10T21:30:00Z
   */
  peakTime?: string;
  /**
   * @remarks
   * The resource usage in a specific scenario.
   * 
   * > SpecialValue indicates the data usage in a specific scenario. If no special billable item is specified, ignore this parameter.
   * 
   * @example
   * 423304182
   */
  specialValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * > **TimeStamp** indicates the timestamp of the data returned at each interval.
   * 
   * @example
   * 2015-12-10T21:30:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The amount of resource usage.
   * 
   * @example
   * 423304182
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      peakTime: 'PeakTime',
      specialValue: 'SpecialValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakTime: 'string',
      specialValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

