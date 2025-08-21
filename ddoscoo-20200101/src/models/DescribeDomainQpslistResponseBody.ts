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

export class DescribeDomainQPSListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the statistics on the QPS of the website.
   */
  domainQPSList?: DescribeDomainQPSListResponseBodyDomainQPSList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 327F2ABB-104D-437A-AAB5-D633E29A8C51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainQPSList: 'DomainQPSList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainQPSList: { 'type': 'array', 'itemType': DescribeDomainQPSListResponseBodyDomainQPSList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainQPSList)) {
      $dara.Model.validateArray(this.domainQPSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

