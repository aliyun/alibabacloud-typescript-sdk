// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLindormV2InstanceResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  instanceId?: string;
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      instanceId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

