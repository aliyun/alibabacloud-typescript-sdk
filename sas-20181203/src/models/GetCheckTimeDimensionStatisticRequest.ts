// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckTimeDimensionStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * End time, in timestamp format.
   * 
   * @example
   * 1672285044000
   */
  endTimeStamp?: number;
  /**
   * @remarks
   * Start time, in timestamp format.
   * 
   * @example
   * 1672385044000
   */
  startTimeStamp?: number;
  /**
   * @remarks
   * Type of statistical data. Values:
   * - **CheckPassRate**: Check item pass rate.
   * - **AssetPassRate**: Asset pass rate.
   * 
   * @example
   * AssetPassRate
   */
  statisticType?: string;
  /**
   * @remarks
   * List of cloud vendors.
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      endTimeStamp: 'EndTimeStamp',
      startTimeStamp: 'StartTimeStamp',
      statisticType: 'StatisticType',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeStamp: 'number',
      startTimeStamp: 'number',
      statisticType: 'string',
      vendors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vendors)) {
      $dara.Model.validateArray(this.vendors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

