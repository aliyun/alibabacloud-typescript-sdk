// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetectionStatisticResponseBodyDetectionStatistic extends $dara.Model {
  /**
   * @example
   * 10
   */
  detectionRuleOnlineCount?: number;
  /**
   * @example
   * 20
   */
  detectionRuleTemplateCount?: number;
  /**
   * @example
   * 5
   */
  detectionRuleTestCount?: number;
  /**
   * @example
   * 12
   */
  graphComputeRuleCount?: number;
  /**
   * @example
   * 2
   */
  passthroughRuleCount?: number;
  /**
   * @example
   * 6
   */
  windowRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
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
  detectionStatistic?: GetDetectionStatisticResponseBodyDetectionStatistic;
  /**
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

