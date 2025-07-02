// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveDatabasesResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score for the distribution of files of different sizes stored in the Hive database.
   * 
   * @example
   * 85
   */
  hiveDistributionScore?: number;
  /**
   * @remarks
   * The score for the distribution of files stored in different formats in the Hive database.
   * 
   * @example
   * 85
   */
  hiveFormatScore?: number;
  /**
   * @remarks
   * The score for the access frequency of the Hive database.
   * 
   * @example
   * 85
   */
  hiveFrequencyScore?: number;
  /**
   * @remarks
   * The overall score of the Hive database.
   * 
   * @example
   * 85
   */
  hiveScore?: number;
  static names(): { [key: string]: string } {
    return {
      hiveDistributionScore: 'HiveDistributionScore',
      hiveFormatScore: 'HiveFormatScore',
      hiveFrequencyScore: 'HiveFrequencyScore',
      hiveScore: 'HiveScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveDistributionScore: 'number',
      hiveFormatScore: 'number',
      hiveFrequencyScore: 'number',
      hiveScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

