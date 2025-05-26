// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail extends $dara.Model {
  /**
   * @remarks
   * The number of ACUs for the elastic resources.
   * 
   * @example
   * 16ACU
   */
  elasticAcuNumber?: number;
  /**
   * @remarks
   * The number of ACUs for the reserved resources.
   * 
   * @example
   * 16ACU
   */
  reservedAcuNumber?: number;
  /**
   * @remarks
   * The number of spot ACUs.
   * 
   * @example
   * 16ACU
   */
  spotAcuNumber?: number;
  /**
   * @remarks
   * The percent of spot ACUs.
   * 
   * @example
   * 0.9
   */
  spotAcuPercentage?: number;
  /**
   * @remarks
   * The total number of ACUs.
   * 
   * @example
   * 32ACU
   */
  totalAcuNumber?: number;
  static names(): { [key: string]: string } {
    return {
      elasticAcuNumber: 'ElasticAcuNumber',
      reservedAcuNumber: 'ReservedAcuNumber',
      spotAcuNumber: 'SpotAcuNumber',
      spotAcuPercentage: 'SpotAcuPercentage',
      totalAcuNumber: 'TotalAcuNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcuNumber: 'number',
      reservedAcuNumber: 'number',
      spotAcuNumber: 'number',
      spotAcuPercentage: 'number',
      totalAcuNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

