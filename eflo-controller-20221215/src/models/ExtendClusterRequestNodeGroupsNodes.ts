// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExtendClusterRequestNodeGroupsNodesDataDisk } from "./ExtendClusterRequestNodeGroupsNodesDataDisk";


export class ExtendClusterRequestNodeGroupsNodes extends $dara.Model {
  dataDisk?: ExtendClusterRequestNodeGroupsNodesDataDisk[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * d044d220-33fd-11ed-86a6
   */
  hostname?: string;
  /**
   * @remarks
   * The logon password.
   * 
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-zvp2zdpy601
   */
  nodeId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp169pi5fj151rrms4sia
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-0jlasms92fdxqd3wlf8ny
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      hostname: 'Hostname',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsNodesDataDisk },
      hostname: 'string',
      loginPassword: 'string',
      nodeId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

