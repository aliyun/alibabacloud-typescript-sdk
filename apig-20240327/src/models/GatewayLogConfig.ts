// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayLogConfigSlsConfig extends $dara.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayLogConfig extends $dara.Model {
  slsConfig?: GatewayLogConfigSlsConfig;
  static names(): { [key: string]: string } {
    return {
      slsConfig: 'slsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsConfig: GatewayLogConfigSlsConfig,
    };
  }

  validate() {
    if(this.slsConfig && typeof (this.slsConfig as any).validate === 'function') {
      (this.slsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

