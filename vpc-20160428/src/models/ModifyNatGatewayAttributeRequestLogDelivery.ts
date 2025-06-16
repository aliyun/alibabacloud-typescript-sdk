// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayAttributeRequestLogDelivery extends $dara.Model {
  logDeliveryType?: string;
  logDestination?: string;
  static names(): { [key: string]: string } {
    return {
      logDeliveryType: 'LogDeliveryType',
      logDestination: 'LogDestination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logDeliveryType: 'string',
      logDestination: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

