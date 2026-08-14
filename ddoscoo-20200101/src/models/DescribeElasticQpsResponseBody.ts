// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticQpsResponseBodyElasticQps extends $dara.Model {
  index?: number;
  maxNormalQps?: number;
  maxQps?: number;
  pv?: number;
  status2?: number;
  status3?: number;
  status4?: number;
  status410Pv?: number;
  status5?: number;
  ups?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      maxNormalQps: 'MaxNormalQps',
      maxQps: 'MaxQps',
      pv: 'Pv',
      status2: 'Status2',
      status3: 'Status3',
      status4: 'Status4',
      status410Pv: 'Status410Pv',
      status5: 'Status5',
      ups: 'Ups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      maxNormalQps: 'number',
      maxQps: 'number',
      pv: 'number',
      status2: 'number',
      status3: 'number',
      status4: 'number',
      status410Pv: 'number',
      status5: 'number',
      ups: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsResponseBody extends $dara.Model {
  elasticQps?: DescribeElasticQpsResponseBodyElasticQps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticQps: 'ElasticQps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQps: { 'type': 'array', 'itemType': DescribeElasticQpsResponseBodyElasticQps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticQps)) {
      $dara.Model.validateArray(this.elasticQps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

