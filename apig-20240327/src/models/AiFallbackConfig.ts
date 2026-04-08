// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiFallbackConfigServiceConfigs extends $dara.Model {
  name?: string;
  passThroughModelName?: boolean;
  serviceId?: string;
  targetModelName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      passThroughModelName: 'passThroughModelName',
      serviceId: 'serviceId',
      targetModelName: 'targetModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      passThroughModelName: 'boolean',
      serviceId: 'string',
      targetModelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiFallbackConfig extends $dara.Model {
  onlyRedirectUpstreamCode?: boolean;
  serviceConfigs?: AiFallbackConfigServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      onlyRedirectUpstreamCode: 'onlyRedirectUpstreamCode',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlyRedirectUpstreamCode: 'boolean',
      serviceConfigs: { 'type': 'array', 'itemType': AiFallbackConfigServiceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

