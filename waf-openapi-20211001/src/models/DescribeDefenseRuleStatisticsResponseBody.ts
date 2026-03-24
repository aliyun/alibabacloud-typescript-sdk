// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRuleStatisticsResponseBodyStatisticsInfos extends $dara.Model {
  /**
   * @remarks
   * The number of rules that match the specified grouping conditions.
   * 
   * @example
   * 27
   */
  count?: number;
  /**
   * @remarks
   * The value of the quaternary grouping condition.
   * 
   * @example
   * action
   */
  fourthValue?: string;
  /**
   * @remarks
   * The value of the primary grouping condition.
   * 
   * @example
   * sytem
   */
  primaryValue?: string;
  /**
   * @remarks
   * The value of the secondary grouping condition.
   * 
   * @example
   * block
   */
  secondaryValue?: string;
  /**
   * @remarks
   * The value of the tertiary grouping condition.
   * 
   * @example
   * 1
   */
  thirdValue?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      fourthValue: 'FourthValue',
      primaryValue: 'PrimaryValue',
      secondaryValue: 'SecondaryValue',
      thirdValue: 'ThirdValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      fourthValue: 'string',
      primaryValue: 'string',
      secondaryValue: 'string',
      thirdValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The rule statistics that are grouped by the specified conditions.
   */
  statisticsInfos?: DescribeDefenseRuleStatisticsResponseBodyStatisticsInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statisticsInfos: 'StatisticsInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statisticsInfos: { 'type': 'array', 'itemType': DescribeDefenseRuleStatisticsResponseBodyStatisticsInfos },
    };
  }

  validate() {
    if(Array.isArray(this.statisticsInfos)) {
      $dara.Model.validateArray(this.statisticsInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

