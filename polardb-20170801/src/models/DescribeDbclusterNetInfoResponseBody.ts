// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo extends $dara.Model {
  /**
   * @example
   * pc-****************.pg.polardb.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * MPP
   */
  connectionStringType?: string;
  /**
   * @example
   * 121.*.*.173
   */
  IPAddress?: string;
  /**
   * @example
   * Public
   */
  IPType?: string;
  /**
   * @example
   * 1521
   */
  port?: string;
  /**
   * @example
   * vpc-***************
   */
  VPCId?: string;
  /**
   * @example
   * vsw-bp1li3eavsz8oaexq15dw
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringType: 'ConnectionStringType',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      connectionStringType: 'string',
      IPAddress: 'string',
      IPType: 'string',
      port: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos extends $dara.Model {
  DBClusterNetInfo?: DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBClusterNetInfo: 'DBClusterNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterNetInfo: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo },
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterNetInfo)) {
      $dara.Model.validateArray(this.DBClusterNetInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo extends $dara.Model {
  /**
   * @example
   * pc-****************.pg.polardb.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 47.*.*.203
   */
  IPAddress?: string;
  /**
   * @example
   * Public
   */
  IPType?: string;
  /**
   * @example
   * 5432
   */
  port?: string;
  /**
   * @example
   * vpc-****************
   */
  VPCId?: string;
  /**
   * @example
   * vsw-*************
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      IPType: 'string',
      port: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos extends $dara.Model {
  netInfo?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo[];
  static names(): { [key: string]: string } {
    return {
      netInfo: 'NetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfo: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo },
    };
  }

  validate() {
    if(Array.isArray(this.netInfo)) {
      $dara.Model.validateArray(this.netInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo extends $dara.Model {
  /**
   * @example
   * pc-*************
   */
  DBInstanceId?: string;
  /**
   * @example
   * Writer
   */
  DBNodeRole?: string;
  netInfos?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBNodeRole: 'DBNodeRole',
      netInfos: 'NetInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBNodeRole: 'string',
      netInfos: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos,
    };
  }

  validate() {
    if(this.netInfos && typeof (this.netInfos as any).validate === 'function') {
      (this.netInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos extends $dara.Model {
  DBNodeNetInfo?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBNodeNetInfo: 'DBNodeNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeNetInfo: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeNetInfo)) {
      $dara.Model.validateArray(this.DBNodeNetInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoResponseBody extends $dara.Model {
  /**
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  DBClusterNetInfos?: DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos;
  DBNodeNetInfos?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos;
  /**
   * @example
   * 72D99256-ACF1-5F86-831F-8CB53E9C23ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      DBClusterNetInfos: 'DBClusterNetInfos',
      DBNodeNetInfos: 'DBNodeNetInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      DBClusterNetInfos: DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos,
      DBNodeNetInfos: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBClusterNetInfos && typeof (this.DBClusterNetInfos as any).validate === 'function') {
      (this.DBClusterNetInfos as any).validate();
    }
    if(this.DBNodeNetInfos && typeof (this.DBNodeNetInfos as any).validate === 'function') {
      (this.DBNodeNetInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

