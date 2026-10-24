// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientRuleStrategyStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of custom rule policies for proactive defense.
   * 
   * @example
   * 2
   */
  customRuleCount?: number;
  /**
   * @remarks
   * The number of system rule policies for proactive defense.
   * 
   * @example
   * 10
   */
  systemRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      customRuleCount: 'CustomRuleCount',
      systemRuleCount: 'SystemRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRuleCount: 'number',
      systemRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRuleStrategyStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of proactive defense policies.
   */
  data?: GetClientRuleStrategyStatisticsResponseBodyData;
  /**
   * @remarks
   * The unique identifier of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 01A157FA-F957-3A5A-A6B8-5BBB8ADB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetClientRuleStrategyStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

