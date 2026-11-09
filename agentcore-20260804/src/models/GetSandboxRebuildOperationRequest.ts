// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSandboxRebuildOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The service registration endpoint ID. This parameter is optional. If specified, the operation targets the runtime instance corresponding to the endpoint under the agent. If omitted, the default latest runtime identity is used. Pass the endpoint ID instead of the endpoint name. Keep this parameter consistent when querying instances, committing rebuilds, and querying tasks.
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

