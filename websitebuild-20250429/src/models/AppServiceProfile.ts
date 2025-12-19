// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppServiceProfile extends $dara.Model {
  bizId?: string;
  designType?: string;
  designTypeText?: string;
  instanceId?: string;
  orderId?: string;
  serviceSpec?: string;
  serviceSpecText?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      designType: 'DesignType',
      designTypeText: 'DesignTypeText',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      serviceSpec: 'ServiceSpec',
      serviceSpecText: 'ServiceSpecText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      designType: 'string',
      designTypeText: 'string',
      instanceId: 'string',
      orderId: 'string',
      serviceSpec: 'string',
      serviceSpecText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

