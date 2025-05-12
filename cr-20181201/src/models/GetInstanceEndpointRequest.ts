// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the endpoint. Set the value to Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
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

