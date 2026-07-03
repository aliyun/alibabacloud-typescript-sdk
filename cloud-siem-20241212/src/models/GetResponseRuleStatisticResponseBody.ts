// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResponseRuleStatisticResponseBodyResponseStatistic extends $dara.Model {
  /**
   * @remarks
   * The total number of automated response rules.
   * 
   * @example
   * 2
   */
  responseRuleAllCount?: number;
  /**
   * @remarks
   * The number of online automated response rules.
   * 
   * @example
   * 1
   */
  responseRuleOnlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      responseRuleAllCount: 'ResponseRuleAllCount',
      responseRuleOnlineCount: 'ResponseRuleOnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseRuleAllCount: 'number',
      responseRuleOnlineCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResponseRuleStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of automated response rules.
   */
  responseStatistic?: GetResponseRuleStatisticResponseBodyResponseStatistic;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseStatistic: 'ResponseStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseStatistic: GetResponseRuleStatisticResponseBodyResponseStatistic,
    };
  }

  validate() {
    if(this.responseStatistic && typeof (this.responseStatistic as any).validate === 'function') {
      (this.responseStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

