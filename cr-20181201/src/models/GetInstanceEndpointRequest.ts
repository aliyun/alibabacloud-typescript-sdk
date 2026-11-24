// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint type. Only Internet is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The access module. Valid values:
   * 
   * - `Registry`: image repository
   * 
   * - `Chart`: Helm chart
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

