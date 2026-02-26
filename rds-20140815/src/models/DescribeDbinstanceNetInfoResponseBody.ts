// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight extends $dara.Model {
  availability?: string;
  DBInstanceId?: string;
  DBInstanceType?: string;
  role?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      availability: 'Availability',
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      role: 'Role',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availability: 'string',
      DBInstanceId: 'string',
      DBInstanceType: 'string',
      role: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights extends $dara.Model {
  DBInstanceWeight?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceWeight: 'DBInstanceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceWeight: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceWeight)) {
      $dara.Model.validateArray(this.DBInstanceWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup extends $dara.Model {
  securityIPGroupName?: string;
  securityIPs?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPGroupName: 'SecurityIPGroupName',
      securityIPs: 'SecurityIPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPGroupName: 'string',
      securityIPs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups extends $dara.Model {
  securityIPGroup?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIPGroup: 'securityIPGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPGroup: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup },
    };
  }

  validate() {
    if(Array.isArray(this.securityIPGroup)) {
      $dara.Model.validateArray(this.securityIPGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $dara.Model {
  babelfishPort?: string;
  connectionString?: string;
  connectionStringType?: string;
  DBInstanceWeights?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights;
  distributionType?: string;
  expiredTime?: string;
  IPAddress?: string;
  IPType?: string;
  maxDelayTime?: string;
  PGBouncerPort?: string;
  port?: string;
  securityIPGroups?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups;
  upgradeable?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      babelfishPort: 'BabelfishPort',
      connectionString: 'ConnectionString',
      connectionStringType: 'ConnectionStringType',
      DBInstanceWeights: 'DBInstanceWeights',
      distributionType: 'DistributionType',
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      maxDelayTime: 'MaxDelayTime',
      PGBouncerPort: 'PGBouncerPort',
      port: 'Port',
      securityIPGroups: 'SecurityIPGroups',
      upgradeable: 'Upgradeable',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      babelfishPort: 'string',
      connectionString: 'string',
      connectionStringType: 'string',
      DBInstanceWeights: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights,
      distributionType: 'string',
      expiredTime: 'string',
      IPAddress: 'string',
      IPType: 'string',
      maxDelayTime: 'string',
      PGBouncerPort: 'string',
      port: 'string',
      securityIPGroups: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups,
      upgradeable: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.DBInstanceWeights && typeof (this.DBInstanceWeights as any).validate === 'function') {
      (this.DBInstanceWeights as any).validate();
    }
    if(this.securityIPGroups && typeof (this.securityIPGroups as any).validate === 'function') {
      (this.securityIPGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $dara.Model {
  DBInstanceNetInfo?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfo: 'DBInstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceNetInfo)) {
      $dara.Model.validateArray(this.DBInstanceNetInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: virtual private cloud (VPC)
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 777C4593-8053-427B-99E2-105593277CAB
   */
  requestId?: string;
  /**
   * @remarks
   * The whitelist mode of the instance. Valid values:
   * 
   * *   **normal**: standard whitelist mode
   * *   **safety**: enhanced whitelist mode
   * 
   * @example
   * safety
   */
  securityIPMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      instanceNetworkType: 'InstanceNetworkType',
      requestId: 'RequestId',
      securityIPMode: 'SecurityIPMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos,
      instanceNetworkType: 'string',
      requestId: 'string',
      securityIPMode: 'string',
    };
  }

  validate() {
    if(this.DBInstanceNetInfos && typeof (this.DBInstanceNetInfos as any).validate === 'function') {
      (this.DBInstanceNetInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

