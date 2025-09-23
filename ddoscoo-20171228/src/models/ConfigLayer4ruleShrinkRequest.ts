// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer4RuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"xxxxxx-xxxxxx-xxxxxx-xxxxxxx","Protocol":"tcp","FrontendPort":80,"BackendPort":5,"RealServers":"1.1.1.1","2.2.2.2"}]
   */
  listeners?: string;
  proxyEnable?: number;
  usTimeoutShrink?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      proxyEnable: 'ProxyEnable',
      usTimeoutShrink: 'UsTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
      proxyEnable: 'number',
      usTimeoutShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

