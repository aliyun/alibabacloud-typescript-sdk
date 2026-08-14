// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHealthCheckConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  frontendPort?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  healthCheck?: string;
  /**
   * @remarks
   * This parameter is required.
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

