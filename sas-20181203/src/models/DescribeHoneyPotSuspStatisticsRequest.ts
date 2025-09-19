// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHoneyPotSuspStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the request. Set the value to **honeypot**.
   * 
   * This parameter is required.
   * 
   * @example
   * honeypot
   */
  from?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The time range of the data to query. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  statisticsDays?: number;
  /**
   * @remarks
   * The type of the asset to query. Valid values:
   * 
   * *   **vpcInstanceId**: VPC
   * *   **uuid**: server
   * 
   * This parameter is required.
   * 
   * @example
   * vpcInstanceId
   */
  statisticsKeyType?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
      statisticsDays: 'StatisticsDays',
      statisticsKeyType: 'StatisticsKeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      lang: 'string',
      statisticsDays: 'number',
      statisticsKeyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

