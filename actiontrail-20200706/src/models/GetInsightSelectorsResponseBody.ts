// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInsightSelectorsResponseBody extends $dara.Model {
  insightSelectors?: string[];
  /**
   * @example
   * D0227506-AA8C-5998-8A62-74769106****
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

