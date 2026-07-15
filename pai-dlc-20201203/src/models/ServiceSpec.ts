// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceSpec extends $dara.Model {
  /**
   * @remarks
   * The default port for the service.
   * 
   * @example
   * 8080
   */
  defaultPort?: number;
  /**
   * @remarks
   * The list of extra ports for the service.
   */
  extraPorts?: number[];
  /**
   * @remarks
   * The service pattern. Valid values are PerRole and PerPod. The default value is PerPod.
   * 
   * @example
   * PerRole
   */
  serviceMode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPort: 'DefaultPort',
      extraPorts: 'ExtraPorts',
      serviceMode: 'ServiceMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPort: 'number',
      extraPorts: { 'type': 'array', 'itemType': 'number' },
      serviceMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extraPorts)) {
      $dara.Model.validateArray(this.extraPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

