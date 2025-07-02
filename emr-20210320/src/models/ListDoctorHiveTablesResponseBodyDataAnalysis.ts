// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveTablesResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score for the file sizes of the Hive table.
   * 
   * @example
   * 80
   */
  hiveDistributionScore?: number;
  /**
   * @remarks
   * The score for the data formats of the Hive table.
   * 
   * @example
   * 60
   */
  hiveFormatScore?: number;
  /**
   * @remarks
   * The score for the access frequency of the Hive table.
   * 
   * @example
   * 70
   */
  hiveFrequencyScore?: number;
  /**
   * @remarks
   * The overall score of the Hive table.
   * 
   * @example
   * 80
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

