// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePortRequest extends $dara.Model {
  backendPort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  frontendPort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  frontendProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'string',
      frontendPort: 'string',
      frontendProtocol: 'string',
      instanceId: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

