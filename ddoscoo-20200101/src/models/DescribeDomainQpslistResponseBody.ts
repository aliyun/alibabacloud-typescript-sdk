// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQPSListResponseBodyDomainQPSList extends $dara.Model {
  attackQps?: number;
  cacheHits?: number;
  index?: number;
  maxAttackQps?: number;
  maxNormalQps?: number;
  maxQps?: number;
  time?: number;
  totalCount?: number;
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
  domainQPSList?: DescribeDomainQPSListResponseBodyDomainQPSList[];
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

