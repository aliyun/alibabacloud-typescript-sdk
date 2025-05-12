// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceEndpointAclPolicyRequest extends $dara.Model {
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
   * The CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1/32
   */
  entry?: string;
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
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      entry: 'string',
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

