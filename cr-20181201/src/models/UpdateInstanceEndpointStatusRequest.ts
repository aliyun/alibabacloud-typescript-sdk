// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceEndpointStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the instance endpoint. Valid values:
   * 
   * *   `true`: enables the instance endpoint.
   * *   `false`: disables the instance endpoint
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enable?: boolean;
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
   * cri-kmsiwlxxdcva****
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
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      endpointType: 'EndpointType',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
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

