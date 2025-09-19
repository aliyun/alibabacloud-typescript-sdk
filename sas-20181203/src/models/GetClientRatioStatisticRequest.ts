// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientRatioStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary account of the Resource Directory member account.
   * > call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) interface to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * An array that consists of the details of a statistical type.
   */
  statisticTypes?: string[];
  /**
   * @remarks
   * The timestamp that specifies the end of the time range to collect statistics. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1686412799999
   */
  timeEnd?: number;
  /**
   * @remarks
   * The timestamp that specifies the beginning of the time range to collect statistics. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671382800000
   */
  timeStart?: number;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      statisticTypes: 'StatisticTypes',
      timeEnd: 'TimeEnd',
      timeStart: 'TimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'number',
      statisticTypes: { 'type': 'array', 'itemType': 'string' },
      timeEnd: 'number',
      timeStart: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.statisticTypes)) {
      $dara.Model.validateArray(this.statisticTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

