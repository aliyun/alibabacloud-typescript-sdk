// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * - Name：Query by service name.
   * - ServiceInstanceName：Query by service  instance name.
   * - ServiceInstanceId：Query by service  instance ID.
   * - ServiceId：Query by service ID.
   * - Version：Query by service version.
   * - Status：Query by service status.
   * - DeployType: Query by service deployType.
   * - ServiceType：Query by service deployType.
   * 
   * @example
   * ServiceInstanceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

