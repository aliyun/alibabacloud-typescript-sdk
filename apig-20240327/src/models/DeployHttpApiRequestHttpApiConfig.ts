// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployHttpApiRequestHttpApiConfig extends $dara.Model {
  gatewayId?: string;
  routeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      routeIds: 'routeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      routeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeIds)) {
      $dara.Model.validateArray(this.routeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

