// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet extends $dara.Model {
  connectionDomain?: string;
  connectionPort?: string;
  connectionType?: string;
  expiredTime?: string;
  networkType?: string;
  replicaSetRole?: string;
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
  connectionStringSuffix?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
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
      connectionStringSuffix: 'ConnectionStringSuffix',
      DBInstanceId: 'DBInstanceId',
      replicaSets: 'ReplicaSets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringSuffix: 'string',
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

