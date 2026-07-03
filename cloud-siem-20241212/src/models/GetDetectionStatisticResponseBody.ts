// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetectionStatisticResponseBodyDetectionStatistic extends $dara.Model {
  aiPoweredAggregationRuleCount?: number;
  /**
   * @remarks
   * The number of online rules.
   * 
   * @example
   * 10
   */
  detectionRuleOnlineCount?: number;
  /**
   * @remarks
   * The number of rule templates.
   * 
   * @example
   * 20
   */
  detectionRuleTemplateCount?: number;
  /**
   * @remarks
   * The number of test rules.
   * 
   * @example
   * 5
   */
  detectionRuleTestCount?: number;
  /**
   * @remarks
   * The number of graph computing rules.
   * 
   * @example
   * 12
   */
  graphComputeRuleCount?: number;
  /**
   * @remarks
   * The number of alert pass-through rules.
   * 
   * @example
   * 2
   */
  passthroughRuleCount?: number;
  /**
   * @remarks
   * The number of similar aggregation rules.
   * 
   * @example
   * 6
   */
  windowRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      aiPoweredAggregationRuleCount: 'AiPoweredAggregationRuleCount',
      detectionRuleOnlineCount: 'DetectionRuleOnlineCount',
      detectionRuleTemplateCount: 'DetectionRuleTemplateCount',
      detectionRuleTestCount: 'DetectionRuleTestCount',
      graphComputeRuleCount: 'GraphComputeRuleCount',
      passthroughRuleCount: 'PassthroughRuleCount',
      windowRuleCount: 'WindowRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiPoweredAggregationRuleCount: 'number',
      detectionRuleOnlineCount: 'number',
      detectionRuleTemplateCount: 'number',
      detectionRuleTestCount: 'number',
      graphComputeRuleCount: 'number',
      passthroughRuleCount: 'number',
      windowRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detection rule count result.
   */
  detectionStatistic?: GetDetectionStatisticResponseBodyDetectionStatistic;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FB890AC-90B2-5EEA-845B-F7C86FB2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectionStatistic: 'DetectionStatistic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionStatistic: GetDetectionStatisticResponseBodyDetectionStatistic,
      requestId: 'string',
    };
  }

  validate() {
    if(this.detectionStatistic && typeof (this.detectionStatistic as any).validate === 'function') {
      (this.detectionStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

