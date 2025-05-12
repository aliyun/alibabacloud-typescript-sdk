// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceVpcEndpointLinkedVpcRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create Alibaba Cloud DNS PrivateZone records. Valid values:
   * 
   * >  If you enable automatic creation of PrivateZone records, a PrivateZone record is automatically created when you associate a VPC with the instance.
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enableCreateDNSRecordInPvzt?: boolean;
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
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: image repositories.
   * *   `Chart`: Helm charts.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6pa68zxnnlc48dd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is associated with the specified VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf6u0kn8x2gbzxfn2****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      enableCreateDNSRecordInPvzt: 'EnableCreateDNSRecordInPvzt',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCreateDNSRecordInPvzt: 'boolean',
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

