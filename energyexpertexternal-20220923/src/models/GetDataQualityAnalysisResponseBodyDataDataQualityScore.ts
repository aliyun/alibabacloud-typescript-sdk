// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAnalysisResponseBodyDataDataQualityScore extends $dara.Model {
  /**
   * @remarks
   * Data quality evaluation indicator 1: activity data credibility.
   * 
   * @example
   * 3
   */
  g1?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 2: data factor reliability.
   * 
   * @example
   * 3
   */
  g2?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 3: time representativeness.
   * 
   * @example
   * 3
   */
  g3?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 4: geographic representativeness.
   * 
   * @example
   * 3
   */
  g4?: number;
  static names(): { [key: string]: string } {
    return {
      g1: 'g1',
      g2: 'g2',
      g3: 'g3',
      g4: 'g4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      g1: 'number',
      g2: 'number',
      g3: 'number',
      g4: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

