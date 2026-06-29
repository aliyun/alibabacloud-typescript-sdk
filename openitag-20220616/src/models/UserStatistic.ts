// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserStatistic extends $dara.Model {
  /**
   * @remarks
   * Quantity of Data items passed
   * 
   * @example
   * 172
   */
  acceptedMarkItemsCount?: number;
  /**
   * @remarks
   * Total inspection count
   * 
   * @example
   * 140
   */
  checkCount?: number;
  /**
   * @remarks
   * Quantity passed in inspection
   * 
   * @example
   * 100
   */
  checkedAcceptedCount?: number;
  /**
   * @remarks
   * Inspection accuracy.  
   * Inspection accuracy = Number Of Error inspected / Quantity inspected
   * 
   * @example
   * 95.33
   */
  checkedAccuracy?: number;
  /**
   * @remarks
   * Annotation efficiency. Unit: items/hour  
   * Annotation efficiency = Quantity annotated / Annotation duration (including rejections)
   * 
   * @example
   * 0.1
   */
  markEfficiency?: number;
  /**
   * @remarks
   * Annotation duration. Unit: hours
   * 
   * @example
   * 0.1
   */
  markTime?: number;
  /**
   * @remarks
   * Sampling accuracy.  
   * Validated accuracy = Number Of Error validated / Quantity validated
   * 
   * @example
   * 84.92
   */
  samplingAccuracy?: number;
  /**
   * @remarks
   * Total sampling quantity
   * 
   * @example
   * 1
   */
  samplingCount?: number;
  /**
   * @remarks
   * Number Of Error in sampling
   * 
   * @example
   * 1
   */
  samplingErrorCount?: number;
  /**
   * @remarks
   * Total Data items
   * 
   * @example
   * 172
   */
  totalMarkItemsCount?: number;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 166***9980757311
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedMarkItemsCount: 'AcceptedMarkItemsCount',
      checkCount: 'CheckCount',
      checkedAcceptedCount: 'CheckedAcceptedCount',
      checkedAccuracy: 'CheckedAccuracy',
      markEfficiency: 'MarkEfficiency',
      markTime: 'MarkTime',
      samplingAccuracy: 'SamplingAccuracy',
      samplingCount: 'SamplingCount',
      samplingErrorCount: 'SamplingErrorCount',
      totalMarkItemsCount: 'TotalMarkItemsCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedMarkItemsCount: 'number',
      checkCount: 'number',
      checkedAcceptedCount: 'number',
      checkedAccuracy: 'number',
      markEfficiency: 'number',
      markTime: 'number',
      samplingAccuracy: 'number',
      samplingCount: 'number',
      samplingErrorCount: 'number',
      totalMarkItemsCount: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

