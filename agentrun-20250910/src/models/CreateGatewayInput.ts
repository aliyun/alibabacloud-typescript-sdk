// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayNetworkConfiguration } from "./GatewayNetworkConfiguration";


export class CreateGatewayInput extends $dara.Model {
  identityId?: string;
  name?: string;
  networkConfiguration?: GatewayNetworkConfiguration;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'identityId',
      name: 'name',
      networkConfiguration: 'networkConfiguration',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      name: 'string',
      networkConfiguration: GatewayNetworkConfiguration,
      type: 'string',
    };
  }

  validate() {
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

