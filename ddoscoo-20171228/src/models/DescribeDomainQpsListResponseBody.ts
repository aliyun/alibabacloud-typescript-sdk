// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQpsListResponseBodyDataList extends $dara.Model {
  attackQps?: number;
  cacheHits?: number;
  index?: number;
  maxAttackQps?: number;
  maxNormalQps?: number;
  maxQps?: number;
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

export class DescribeDomainQpsListResponseBody extends $dara.Model {
  dataList?: DescribeDomainQpsListResponseBodyDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeDomainQpsListResponseBodyDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

