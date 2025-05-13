// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectorTargetInstance extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * collectorTargetInstance
   */
  configType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  enableMonitoring?: boolean;
  hosts?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * es-cn-ks8x****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * elasticsearch
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      enableMonitoring: 'enableMonitoring',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      password: 'password',
      protocol: 'protocol',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      password: 'string',
      protocol: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

