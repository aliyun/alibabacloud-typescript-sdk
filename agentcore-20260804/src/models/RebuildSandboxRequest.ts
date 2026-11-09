// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildSandboxRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the service registration endpoint. This parameter is optional. If you specify this parameter, the operation targets the runtime instance that corresponds to the service registration endpoint under the agent. If you omit this parameter, the default latest runtime identity is used. Pass the service registration endpoint ID instead of the service registration endpoint name. You must keep this parameter consistent when you query instances, commit rebuilds, and query nodes.
   * 
   * @example
   * se-7f3a92c1
   */
  serviceEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceEndpointId: 'serviceEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceEndpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

