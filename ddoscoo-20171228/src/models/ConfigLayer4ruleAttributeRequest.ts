// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer4RuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Slimit":{"CpsEnable":1,"MaxconnEnable":1,"Cps":1,"Maxconn":1},"Sla":{"CpsEnable":1,"MaxconnEnable":1,"Cps":100,"Maxconn":1000},"PayloadLen":{"Min":0,"Max":6000}}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  module?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      module: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

