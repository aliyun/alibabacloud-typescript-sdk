// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQPSListResponseBodyDomainQPSList extends $dara.Model {
  /**
   * @remarks
   * The attack QPS.
   * 
   * @example
   * 1
   */
  attackQps?: number;
  /**
   * @remarks
   * The number of cache hits.
   * 
   * @example
   * 0
   */
  cacheHits?: number;
  /**
   * @remarks
   * The index number of the returned data.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The peak attack QPS.
   * 
   * @example
   * 37
   */
  maxAttackQps?: number;
  /**
   * @remarks
   * The peak of normal QPS.
   * 
   * @example
   * 93
   */
  maxNormalQps?: number;
  /**
   * @remarks
   * The peak of total QPS.
   * 
   * @example
   * 130
   */
  maxQps?: number;
  /**
   * @remarks
   * The time when the data was collected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1582992000
   */
  time?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 20008
   */
  totalCount?: number;
  /**
   * @remarks
   * The total QPS.
   * 
   * @example
   * 1
   */
  totalQps?: number;
  static names(): { [key: string]: string } {
    return {
      attackQps: 'AttackQps',
      cacheHits: 'CacheHits',
      index: 'Index',
      maxAttackQps: 'MaxAttackQps',
      maxNormalQps: 'MaxNormalQps',
      maxQps: 'MaxQps',
      time: 'Time',
      totalCount: 'TotalCount',
      totalQps: 'TotalQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackQps: 'number',
      cacheHits: 'number',
      index: 'number',
      maxAttackQps: 'number',
      maxNormalQps: 'number',
      maxQps: 'number',
      time: 'number',
      totalCount: 'number',
      totalQps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

