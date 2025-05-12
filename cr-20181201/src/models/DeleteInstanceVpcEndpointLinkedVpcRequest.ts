// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceVpcEndpointLinkedVpcRequest extends $dara.Model {
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
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6pa68zxnnlc48dd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6pa68zxnnlc48dd****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

