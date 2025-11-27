// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight extends $dara.Model {
  /**
   * @remarks
   * The availability of the instance. Valid values:
   * 
   * *   **Unavailable**
   * *   **Available**
   * 
   * @example
   * Unavailable
   */
  availability?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   **Master**: primary instance
   * *   **Readonly**: read-only instance
   * 
   * @example
   * Master
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The weight of the instance.
   * 
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      availability: 'Availability',
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availability: 'string',
      DBInstanceId: 'string',
      DBInstanceType: 'string',
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

export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights extends $dara.Model {
  DBInstanceWeight?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceWeight: 'DBInstanceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceWeight: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight },
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

export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * @example
   * Default
   */
  securityIPGroupName?: string;
  /**
   * @remarks
   * The IP addresses that is contained in the IP address whitelist.
   * 
   * @example
   * 127.0.XX.XX
   */
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

export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups extends $dara.Model {
  securityIPGroup?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIPGroup: 'securityIPGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPGroup: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup },
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

export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $dara.Model {
  /**
   * @remarks
   * The availability of the instance. Valid values:
   * 
   * *   **Unavailable**
   * *   **Available**
   * 
   * @example
   * Unavailable
   */
  availability?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * rm-uf6w*****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Normal**: a regular endpoint
   * *   **ReadWriteSplitting**: a read/write splitting endpoint that is assigned after the shared proxy feature is enabled.
   * 
   * @example
   * Normal
   */
  connectionStringType?: string;
  /**
   * @remarks
   * The information about read weights to implement read/write splitting after the shared proxy feature is enabled.
   */
  DBInstanceWeights?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights;
  /**
   * @remarks
   * The policy that is used to assign read weights. This parameter is returned only for a read/write splitting endpoint that is assigned after the shared proxy feature is enabled. Valid values:
   * 
   * *   **Standard**: The system automatically allocates read weights to the instance and its read-only instances based on the specifications of the instances.
   * *   **Custom**: You must manually allocate read weights to the instance and its read-only instances.
   * 
   * @example
   * Standard
   */
  distributionType?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the IP address. Valid values:
   * 
   * *   **Public**: the Internet
   * *   **Inner**: the classic network
   * *   **Private**: a virtual private cloud (VPC)
   * 
   * @example
   * Inner
   */
  IPType?: string;
  /**
   * @remarks
   * The latency threshold that is allowed for read/write splitting of the shared proxy feature. Unit: seconds.
   * 
   * >  This parameter is returned only when **ConnectionStringType** is set to **ReadWriteSplitting**.
   * 
   * @example
   * 12
   */
  maxDelayTime?: string;
  /**
   * @remarks
   * The port number of the instance.
   * 
   * @example
   * 6379
   */
  port?: string;
  /**
   * @remarks
   * The details of the IP address whitelist.
   */
  securityIPGroups?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups;
  /**
   * @remarks
   * An internal parameter. You do not need to specify this parameter.
   * 
   * @example
   * Disabled
   */
  upgradeable?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The expiration time of the endpoint of the classic network type. Unit: seconds.
   * 
   * @example
   * 5183779
   */
  expiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      availability: 'Availability',
      connectionString: 'ConnectionString',
      connectionStringType: 'ConnectionStringType',
      DBInstanceWeights: 'DBInstanceWeights',
      distributionType: 'DistributionType',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      maxDelayTime: 'MaxDelayTime',
      port: 'Port',
      securityIPGroups: 'SecurityIPGroups',
      upgradeable: 'Upgradeable',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      expiredTime: 'expiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availability: 'string',
      connectionString: 'string',
      connectionStringType: 'string',
      DBInstanceWeights: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights,
      distributionType: 'string',
      IPAddress: 'string',
      IPType: 'string',
      maxDelayTime: 'string',
      port: 'string',
      securityIPGroups: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups,
      upgradeable: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      expiredTime: 'string',
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

export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos extends $dara.Model {
  DBInstanceNetInfo?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfo: 'DBInstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
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

export class DescribeDBInstanceNetInfoForChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instance connection.
   */
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**: a virtual private cloud (VPC)
   * *   **Classic**: classic network
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
   * 61DF1F28-F409-50C0-B90A-CCE82D44****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      instanceNetworkType: 'InstanceNetworkType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfos: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos,
      instanceNetworkType: 'string',
      requestId: 'string',
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

