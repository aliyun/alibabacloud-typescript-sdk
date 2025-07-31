// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the node.
   * 
   * @example
   * dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The port number that is used to connect to the node.
   * 
   * @example
   * 3717
   */
  connectionPort?: string;
  /**
   * @remarks
   * The connection type of the node.
   * 
   * @example
   * SRV
   */
  connectionType?: string;
  /**
   * @remarks
   * The remaining duration of the classic network endpoint. Unit: seconds.
   * 
   * @example
   * 1209582
   */
  expiredTime?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**: the virtual private cloud (VPC)
   * *   **Classic**: the classic network
   * *   **Public**: the Internet
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The role of the node in the replica set instance. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  /**
   * @remarks
   * The role ID of the node.
   * 
   * @example
   * 651xxxxx
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDomain: 'ConnectionDomain',
      connectionPort: 'ConnectionPort',
      connectionType: 'ConnectionType',
      expiredTime: 'ExpiredTime',
      networkType: 'NetworkType',
      replicaSetRole: 'ReplicaSetRole',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDomain: 'string',
      connectionPort: 'string',
      connectionType: 'string',
      expiredTime: 'string',
      networkType: 'string',
      replicaSetRole: 'string',
      roleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBodyReplicaSets extends $dara.Model {
  replicaSet?: DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet[];
  static names(): { [key: string]: string } {
    return {
      replicaSet: 'ReplicaSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaSet: { 'type': 'array', 'itemType': DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet },
    };
  }

  validate() {
    if(Array.isArray(this.replicaSet)) {
      $dara.Model.validateArray(this.replicaSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details of the roles of the replica set instance.
   */
  replicaSets?: DescribeReplicaSetRoleResponseBodyReplicaSets;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB4A0595-FCA9-437F-B2BB-25DBFC009D3E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      replicaSets: 'ReplicaSets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      replicaSets: DescribeReplicaSetRoleResponseBodyReplicaSets,
      requestId: 'string',
    };
  }

  validate() {
    if(this.replicaSets && typeof (this.replicaSets as any).validate === 'function') {
      (this.replicaSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

