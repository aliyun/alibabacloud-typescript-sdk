// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArmsConfiguration } from "./ArmsConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProxyConfig } from "./ProxyConfig";


export class UpdateModelProxyInput extends $dara.Model {
  armsConfiguration?: ArmsConfiguration;
  credentialName?: string;
  description?: string;
  logConfiguration?: LogConfiguration;
  networkConfiguration?: NetworkConfiguration;
  proxyConfig?: ProxyConfig;
  static names(): { [key: string]: string } {
    return {
      armsConfiguration: 'armsConfiguration',
      credentialName: 'credentialName',
      description: 'description',
      logConfiguration: 'logConfiguration',
      networkConfiguration: 'networkConfiguration',
      proxyConfig: 'proxyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsConfiguration: ArmsConfiguration,
      credentialName: 'string',
      description: 'string',
      logConfiguration: LogConfiguration,
      networkConfiguration: NetworkConfiguration,
      proxyConfig: ProxyConfig,
    };
  }

  validate() {
    if(this.armsConfiguration && typeof (this.armsConfiguration as any).validate === 'function') {
      (this.armsConfiguration as any).validate();
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.proxyConfig && typeof (this.proxyConfig as any).validate === 'function') {
      (this.proxyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

