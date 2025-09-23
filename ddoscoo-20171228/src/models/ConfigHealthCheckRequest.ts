// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tcp
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
   * {"Type":"tcp","Timeout":10,"Port":80,"Interval":10,"Up":10,"Down":40}"}
   */
  healthCheck?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXXX
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardProtocol: 'string',
      frontendPort: 'number',
      healthCheck: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

