// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildSandboxRequest extends $dara.Model {
  /**
   * @remarks
   * The service registration endpoint ID. This parameter is optional. If specified, the operation targets the runtime instance corresponding to the service registration endpoint under the agent. If omitted, the default latest runtime identity is used. Pass the service registration endpoint ID, not the service registration endpoint name. Keep this parameter consistent when querying instances, committing the rebuild, and querying nodes.
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

