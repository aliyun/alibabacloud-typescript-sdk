// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceVpcConfig extends $dara.Model {
  /**
   * @example
   * fc、ansm
   */
  fcConfig?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  installMsg?: string;
  /**
   * @example
   * CreateSucceed
   */
  installStatus?: string;
  /**
   * @example
   * 192.168.0.0/24
   */
  ipSections?: string;
  /**
   * @example
   * 北京VPC-A通道
   */
  name?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * sg-6we94uvybteyc******
   */
  securityGroupId?: string;
  /**
   * @example
   * 10983***********
   */
  userId?: string;
  /**
   * @example
   * vsw-6we3**********
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-6wehr2x**********
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      fcConfig: 'fcConfig',
      id: 'id',
      installMsg: 'installMsg',
      installStatus: 'installStatus',
      ipSections: 'ipSections',
      name: 'name',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      userId: 'userId',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcConfig: 'string',
      id: 'number',
      installMsg: 'string',
      installStatus: 'string',
      ipSections: 'string',
      name: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      userId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

