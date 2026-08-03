// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutInsightSelectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The types of Insights events that the trail should deliver.
   * 
   * @example
   * [{"insightType":"AkInsight"},{"insightType":"IpInsight"}]
   */
  insightSelectors?: string;
  /**
   * @remarks
   * The name of the trail.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  static names(): { [key: string]: string } {
    return {
      insightSelectors: 'InsightSelectors',
      trailName: 'TrailName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insightSelectors: 'string',
      trailName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

