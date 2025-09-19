// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBruteForceSummaryResponseBodyBruteForceSummary extends $dara.Model {
  /**
   * @remarks
   * The number of anti-brute force IP blocking policies.
   * 
   * @example
   * 13
   */
  allStrategyCount?: number;
  /**
   * @remarks
   * The number of defense policies.
   * 
   * @example
   * 2
   */
  antiBruteForceRuleCount?: string;
  /**
   * @remarks
   * The number of custom blocking rules that are in effect.
   * 
   * @example
   * 3
   */
  customEffectiveCount?: string;
  /**
   * @remarks
   * The number of custom blocking rules.
   * 
   * @example
   * 19730
   */
  customRecordCount?: string;
  /**
   * @remarks
   * The number of anti-brute force IP blocking policies enabled.
   * 
   * @example
   * 2
   */
  effectiveCount?: number;
  /**
   * @remarks
   * The number of system blocking rules that are in effect.
   * 
   * @example
   * 1
   */
  systemEffectiveCount?: string;
  /**
   * @remarks
   * The number of system blocking rules.
   * 
   * @example
   * 2
   */
  systemRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      allStrategyCount: 'AllStrategyCount',
      antiBruteForceRuleCount: 'AntiBruteForceRuleCount',
      customEffectiveCount: 'CustomEffectiveCount',
      customRecordCount: 'CustomRecordCount',
      effectiveCount: 'EffectiveCount',
      systemEffectiveCount: 'SystemEffectiveCount',
      systemRecordCount: 'SystemRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allStrategyCount: 'number',
      antiBruteForceRuleCount: 'string',
      customEffectiveCount: 'string',
      customRecordCount: 'string',
      effectiveCount: 'number',
      systemEffectiveCount: 'string',
      systemRecordCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBruteForceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of IP address blocking policies.
   */
  bruteForceSummary?: DescribeBruteForceSummaryResponseBodyBruteForceSummary;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AE60EAE3-ABD0-897C-B0F16CAC6C7D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bruteForceSummary: 'BruteForceSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bruteForceSummary: DescribeBruteForceSummaryResponseBodyBruteForceSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.bruteForceSummary && typeof (this.bruteForceSummary as any).validate === 'function') {
      (this.bruteForceSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

