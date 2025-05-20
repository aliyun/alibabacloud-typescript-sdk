// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundNoticeParam extends $dara.Model {
  aliuid?: number;
  aliyunProduceCode?: string;
  commodityCode?: string;
  instanceId?: string;
  newExpireTime?: any;
  orderIds?: number[];
  refundParamMap?: { [key: string]: string };
  refundType?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      aliyunProduceCode: 'aliyunProduceCode',
      commodityCode: 'commodityCode',
      instanceId: 'instanceId',
      newExpireTime: 'newExpireTime',
      orderIds: 'orderIds',
      refundParamMap: 'refundParamMap',
      refundType: 'refundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      aliyunProduceCode: 'string',
      commodityCode: 'string',
      instanceId: 'string',
      newExpireTime: 'any',
      orderIds: { 'type': 'array', 'itemType': 'number' },
      refundParamMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      refundType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    if(this.refundParamMap) {
      $dara.Model.validateMap(this.refundParamMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

