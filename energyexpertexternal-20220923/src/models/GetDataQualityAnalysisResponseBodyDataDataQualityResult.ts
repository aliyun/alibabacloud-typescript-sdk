// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAnalysisResponseBodyDataDataQualityResult extends $dara.Model {
  /**
   * @remarks
   * The score. This parameter is applicable to DQR results. The distribution ranges from 1 to 5. A value closer to 1 indicates better data quality. The number of valid digits is kept to four decimal places.
   * 
   * @example
   * 1.2345
   */
  dataQualityScore?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 1: activity data credibility.
   * 
   * @example
   * 1.2345
   */
  g1?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 2: data factor reliability.
   * 
   * @example
   * 1.2345
   */
  g2?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 3: time representativeness.
   * 
   * @example
   * 1.2345
   */
  g3?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 4: geographic representativeness.
   * 
   * @example
   * 1.2345
   */
  g4?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityScore: 'data_quality_score',
      g1: 'g1',
      g2: 'g2',
      g3: 'g3',
      g4: 'g4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScore: 'number',
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

