// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpRouteEnvironmentInfoGatewayInfo extends $dara.Model {
  gatewayId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

