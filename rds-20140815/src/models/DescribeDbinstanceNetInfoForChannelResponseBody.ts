// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight extends $dara.Model {
  availability?: string;
  DBInstanceId?: string;
  DBInstanceType?: string;
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
  availability?: string;
  connectionString?: string;
  connectionStringType?: string;
  DBInstanceWeights?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights;
  distributionType?: string;
  IPAddress?: string;
  IPType?: string;
  maxDelayTime?: string;
  port?: string;
  securityIPGroups?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups;
  upgradeable?: string;
  VPCId?: string;
  vSwitchId?: string;
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
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos;
  instanceNetworkType?: string;
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

