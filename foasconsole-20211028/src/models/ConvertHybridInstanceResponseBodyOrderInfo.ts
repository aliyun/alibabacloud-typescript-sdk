// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertHybridInstanceResponseBodyOrderInfo extends $dara.Model {
  elasticInstanceId?: string;
  /**
   * @example
   * f-cn-zvp2q0zik06
   */
  instanceId?: string;
  /**
   * @example
   * 210406354694567
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      elasticInstanceId: 'ElasticInstanceId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticInstanceId: 'string',
      instanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

