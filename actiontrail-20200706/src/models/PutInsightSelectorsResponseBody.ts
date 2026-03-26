// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutInsightSelectorsResponseBody extends $dara.Model {
  insightSelectors?: string[];
  /**
   * @example
   * 7EC26DF0-35AC-5F37-82B3-F5545D0A****
   */
  requestId?: string;
  /**
   * @example
   * acs:actiontrail:cn-shanghai:159498693826****:trail/trail-name
   */
  trailArn?: string;
  static names(): { [key: string]: string } {
    return {
      insightSelectors: 'InsightSelectors',
      requestId: 'RequestId',
      trailArn: 'TrailArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insightSelectors: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      trailArn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.insightSelectors)) {
      $dara.Model.validateArray(this.insightSelectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

