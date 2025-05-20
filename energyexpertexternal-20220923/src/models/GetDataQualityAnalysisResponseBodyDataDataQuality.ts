// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityAnalysisResponseBodyDataDataQualityScore } from "./GetDataQualityAnalysisResponseBodyDataDataQualityScore";


export class GetDataQualityAnalysisResponseBodyDataDataQuality extends $dara.Model {
  /**
   * @remarks
   * Inventory name
   * 
   * @example
   * energy
   */
  inventory?: string;
  /**
   * @remarks
   * Score. The distribution ranges from 1 to 5. A value closer to 1 indicates better data quality.
   */
  score?: GetDataQualityAnalysisResponseBodyDataDataQualityScore;
  static names(): { [key: string]: string } {
    return {
      inventory: 'inventory',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: 'string',
      score: GetDataQualityAnalysisResponseBodyDataDataQualityScore,
    };
  }

  validate() {
    if(this.score && typeof (this.score as any).validate === 'function') {
      (this.score as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

