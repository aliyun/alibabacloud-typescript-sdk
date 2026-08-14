// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticQpsRecordResponseBodyElasticQpsList extends $dara.Model {
  date?: number;
  instanceId?: string;
  ip?: string;
  opsElasticQps?: number;
  opsQps?: number;
  originQps?: number;
  qps?: number;
  qpsPeak?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      instanceId: 'InstanceId',
      ip: 'Ip',
      opsElasticQps: 'OpsElasticQps',
      opsQps: 'OpsQps',
      originQps: 'OriginQps',
      qps: 'Qps',
      qpsPeak: 'QpsPeak',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      instanceId: 'string',
      ip: 'string',
      opsElasticQps: 'number',
      opsQps: 'number',
      originQps: 'number',
      qps: 'number',
      qpsPeak: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsRecordResponseBody extends $dara.Model {
  elasticQpsList?: DescribeElasticQpsRecordResponseBodyElasticQpsList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticQpsList: 'ElasticQpsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQpsList: { 'type': 'array', 'itemType': DescribeElasticQpsRecordResponseBodyElasticQpsList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticQpsList)) {
      $dara.Model.validateArray(this.elasticQpsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

