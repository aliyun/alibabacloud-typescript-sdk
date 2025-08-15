// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableInsightRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Insights event. Valid values:
   * 
   * *   IpInsight: Insights event on IP address
   * *   ApiCallRateInsight: Insights event on API call rate
   * *   ApiErrorRateInsight: Insights event on API error rate
   * 
   * @example
   * IpInsight
   */
  insightType?: string;
  static names(): { [key: string]: string } {
    return {
      insightType: 'InsightType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insightType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

