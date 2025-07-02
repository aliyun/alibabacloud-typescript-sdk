// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHiveClusterResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score for the distribution of files of different sizes stored in the Hive cluster.
   * 
   * @example
   * 80
   */
  hiveDistributionScore?: number;
  /**
   * @remarks
   * The score for the distribution of files stored in different formats in the Hive cluster.
   * 
   * @example
   * 80
   */
  hiveFormatScore?: number;
  /**
   * @remarks
   * The score for the access frequency of the Hive cluster.
   * 
   * @example
   * 80
   */
  hiveFrequencyScore?: number;
  /**
   * @remarks
   * The overall score of the Hive cluster.
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

