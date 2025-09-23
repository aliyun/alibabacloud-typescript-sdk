// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConfigLayer4RuleRequestUsTimeout extends $dara.Model {
  connectTimeout?: number;
  rsTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      connectTimeout: 'ConnectTimeout',
      rsTimeout: 'RsTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectTimeout: 'number',
      rsTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"xxxxxx-xxxxxx-xxxxxx-xxxxxxx","Protocol":"tcp","FrontendPort":80,"BackendPort":5,"RealServers":"1.1.1.1","2.2.2.2"}]
   */
  listeners?: string;
  proxyEnable?: number;
  usTimeout?: ConfigLayer4RuleRequestUsTimeout;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      proxyEnable: 'ProxyEnable',
      usTimeout: 'UsTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
      proxyEnable: 'number',
      usTimeout: ConfigLayer4RuleRequestUsTimeout,
    };
  }

  validate() {
    if(this.usTimeout && typeof (this.usTimeout as any).validate === 'function') {
      (this.usTimeout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

