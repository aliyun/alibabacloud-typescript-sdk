// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigAuditLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enable
   */
  auditAction?: string;
  /**
   * @example
   * hsm-log
   */
  auditOssBucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      auditAction: 'AuditAction',
      auditOssBucket: 'AuditOssBucket',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAction: 'string',
      auditOssBucket: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAuditLogResponseBody extends $tea.Model {
  /**
   * @example
   * 42B118FB-16A6-56FB-B877-D58637EEC6AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAuditLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigAuditLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigAuditLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigBackupRemarkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * backup-fdb897sdfg****
   */
  backupId?: string;
  /**
   * @example
   * backup-test
   */
  name?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigBackupRemarkResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigBackupRemarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigBackupRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigBackupRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigBackupTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  backupHourInDay?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * backup-173620705****
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  backupPeriod?: number;
  manual2PeriodicList?: string[];
  periodic2ManualList?: string[];
  static names(): { [key: string]: string } {
    return {
      backupHourInDay: 'BackupHourInDay',
      backupId: 'BackupId',
      backupPeriod: 'BackupPeriod',
      manual2PeriodicList: 'Manual2PeriodicList',
      periodic2ManualList: 'Periodic2ManualList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupHourInDay: 'number',
      backupId: 'string',
      backupPeriod: 'number',
      manual2PeriodicList: { 'type': 'array', 'itemType': 'string' },
      periodic2ManualList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigBackupTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigBackupTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigBackupTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigBackupTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDaTCCAlECAQEwDQYJKoZIhvcNAQELBQAwVTELMAkGA1UEBhMCY24xCzAJBgNV
   * BAgMAnpqMQswCQYDVQQHDAJoejEWMBQGA1UECgwNQWxpYmFiYSBDbG91ZDEUMBIG
   * A1UECwwLU2VjQ2xvdWRIc20wHhcNMjQwNzAzM****-----END CERTIFICATE-----
   */
  clusterCertificate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDfTCCAmWgAwIBAgIJAMRqQMr5if66MA0GCSqGSIb3DQEBCwUAMFUxCzAJBgNV
   * BAYTAmNuMQswCQYDVQQIDAJ6ajELMAkGA1UEBwwCaHoxFjAUBgNVBAoMDUFsaWJh
   * YmEgQ2xvdWQxFDA****
   * -----END CERTIFICATE-----
   */
  issuerCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCertificate: 'ClusterCertificate',
      clusterId: 'ClusterId',
      issuerCertificate: 'IssuerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCertificate: 'string',
      clusterId: 'string',
      issuerCertificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterCertificateResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigClusterCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigClusterCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterNameRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsgfaisdf****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster_on****
   */
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterNameResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigClusterNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterSubnetRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-7xvkh90cw39p0****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterSubnetShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-7xvkh90cw39p0****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      vSwitchIdsShrink: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      vSwitchIdsShrink: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterSubnetResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049366F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterSubnetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigClusterSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigClusterSubnetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-729dm40FG****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18.68.XX.XX
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      whitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterWhitelistResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigClusterWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigClusterWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigClusterWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigImageRemarkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image-d79x4k11pmg19****
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-****
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigImageRemarkResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigImageRemarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigImageRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigImageRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceIpAddressRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-u7gb0qahu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-lmkmivmo6****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceIpAddressResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceIpAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigInstanceIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigInstanceIpAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceRemarkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsmOnline
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceRemarkResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceRemarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigInstanceRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigInstanceRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18.68.XX.XX,18.68.XX.XX
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhitelistResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigInstanceWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigInstanceWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageRequest extends $tea.Model {
  /**
   * @example
   * image-hafiudfahdd****
   */
  imageUid?: string;
  /**
   * @example
   * cn-beijing
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUid: 'ImageUid',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUid: 'string',
      targetRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * 1724379766191
   */
  createTime?: string;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      requestId: 'string',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster_on****
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm_intl-sg-uz63ixak****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      masterInstanceId: 'MasterInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      masterInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  /**
   * @example
   * cluster-729dm40FG****
   */
  clusterId?: string;
  /**
   * @example
   * 5F58413E-8F57-585B-BE48-64CC1E31133C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-NZB9Oj5Yfd8Y****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * backup-1736207****
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image-8vbdd5uc6v10ecn5****
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponseBody extends $tea.Model {
  job?: ExportImageResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: ExportImageResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditLogStatusRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  getOssBucket?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      getOssBucket: 'GetOssBucket',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getOssBucket: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditLogStatusResponseBody extends $tea.Model {
  /**
   * @example
   * enable
   */
  auditLogStatus?: string;
  /**
   * @example
   * bucket-test
   */
  auditOssBucket?: string;
  /**
   * @example
   * true
   */
  grantedServiceAccess?: boolean;
  ossBuckets?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditLogStatus: 'AuditLogStatus',
      auditOssBucket: 'AuditOssBucket',
      grantedServiceAccess: 'GrantedServiceAccess',
      ossBuckets: 'OssBuckets',
      regionId: 'RegionId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogStatus: 'string',
      auditOssBucket: 'string',
      grantedServiceAccess: 'boolean',
      ossBuckets: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuditLogStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAuditLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupRequest extends $tea.Model {
  /**
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupResponseBody extends $tea.Model {
  backup?: GetBackupResponseBodyBackup;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: GetBackupResponseBodyBackup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-p94y1dud9ts****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $tea.Model {
  cluster?: GetClusterResponseBodyCluster;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: GetClusterResponseBodyCluster,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image-wz9c5ths5dfuwx47****
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $tea.Model {
  image?: GetImageResponseBodyImage;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: GetImageResponseBodyImage,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  /**
   * @example
   * hsm-cn-vj30bil****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  job?: GetJobResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetJobResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeAuditLogResponseBody extends $tea.Model {
  /**
   * @example
   * 4FE969D9-E1C7-5274-BE7D-8C3534587605
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeAuditLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitializeAuditLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitializeAuditLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-p94y1dud9****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049366F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitializeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitializeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-NZB9Oj5Yfd8Y****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinClusterResponseBody extends $tea.Model {
  job?: JoinClusterResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: JoinClusterResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: JoinClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JoinClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-729dm40FG****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LeaveClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LeaveClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsRequest extends $tea.Model {
  /**
   * @example
   * backup-1648438****
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @example
   * hsm-te****
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      name: 'Name',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      currentPage: 'number',
      instanceId: 'string',
      name: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponseBody extends $tea.Model {
  backups?: ListBackupsResponseBodyBackups[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: { 'type': 'array', 'itemType': ListBackupsResponseBodyBackups },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @example
   * 114
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      currentPage: 'CurrentPage',
      mode: 'Mode',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      currentPage: 'number',
      mode: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  images?: ListImagesResponseBodyImages[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      images: 'Images',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @example
   * 80
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instances: 'Instances',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-aek2tsvbnfe****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-2ze0qae64mjuc0ni****
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049366F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PauseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PauseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuickInitInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuickInitInstanceResponseBody extends $tea.Model {
  job?: QuickInitInstanceResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049366F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: QuickInitInstanceResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuickInitInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuickInitInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuickInitInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetBackupRequest extends $tea.Model {
  /**
   * @example
   * backup-fdb897sdfg5****
   */
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetBackupResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetInstanceResponseBody extends $tea.Model {
  job?: ResetInstanceResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: ResetInstanceResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image-eaOGHkRDQgh4****
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreInstanceResponseBody extends $tea.Model {
  job?: RestoreInstanceResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049366F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: RestoreInstanceResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestoreInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchClusterMasterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-w3G9vOJI2****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchClusterMasterResponseBody extends $tea.Model {
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchClusterMasterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchClusterMasterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchClusterMasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsgytet****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncClusterResponseBody extends $tea.Model {
  job?: SyncClusterResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: SyncClusterResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsZones extends $tea.Model {
  /**
   * @example
   * yes
   */
  cluster?: string;
  localName?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsZones[];
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponseBodyJob extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * Job.Canceled
   */
  error?: string;
  /**
   * @example
   * b1748ca6-6b55-49f4-a6d4-2d694a9f3693
   */
  jobId?: string;
  /**
   * @example
   * 100
   */
  process?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      error: 'Error',
      jobId: 'JobId',
      process: 'Process',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      error: 'string',
      jobId: 'string',
      process: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupResponseBodyBackup extends $tea.Model {
  /**
   * @example
   * 1
   */
  autoImageCount?: number;
  /**
   * @example
   * 10
   */
  backupHourInDay?: string;
  /**
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @example
   * 3
   */
  backupPeriod?: number;
  /**
   * @example
   * 1682417553781
   */
  createTime?: number;
  /**
   * @example
   * 1682417553781
   */
  expireTime?: number;
  /**
   * @example
   * hsm-cn-5yd35431****
   */
  instanceId?: string;
  /**
   * @example
   * 3
   */
  maxImageCount?: string;
  /**
   * @example
   * backup-te****
   */
  name?: string;
  /**
   * @example
   * 1682417553781
   */
  nextImageCreateTime?: number;
  /**
   * @example
   * hsm-cn-huoahd****
   */
  ownerInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1641275680000
   */
  releaseTime?: number;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @example
   * backup-fdb897sdfg53****
   */
  spInstanceId?: string;
  /**
   * @example
   * NEW
   */
  status?: string;
  /**
   * @example
   * DEFAULT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoImageCount: 'AutoImageCount',
      backupHourInDay: 'BackupHourInDay',
      backupId: 'BackupId',
      backupPeriod: 'BackupPeriod',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      maxImageCount: 'MaxImageCount',
      name: 'Name',
      nextImageCreateTime: 'NextImageCreateTime',
      ownerInstanceId: 'OwnerInstanceId',
      regionId: 'RegionId',
      releaseTime: 'ReleaseTime',
      remark: 'Remark',
      spInstanceId: 'SpInstanceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoImageCount: 'number',
      backupHourInDay: 'string',
      backupId: 'string',
      backupPeriod: 'number',
      createTime: 'number',
      expireTime: 'number',
      instanceId: 'string',
      maxImageCount: 'string',
      name: 'string',
      nextImageCreateTime: 'number',
      ownerInstanceId: 'string',
      regionId: 'string',
      releaseTime: 'number',
      remark: 'string',
      spInstanceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyClusterInstances extends $tea.Model {
  /**
   * @example
   * hsm-cn-g6z3v0uf****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  master?: boolean;
  /**
   * @example
   * 1
   */
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      master: 'Master',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      master: 'boolean',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyClusterZones extends $tea.Model {
  /**
   * @example
   * vsw-uf61s651p69bdgmki****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyCluster extends $tea.Model {
  /**
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDfTCCAmWgAwIBAgIJAMRqQMr5if66MA0GCSqGSIb3DQEBCwUAMFUxCzAJBgNV
   * BAYTAmNuMQswCQYDVQQIDAJ6ajELMAkGA1UEBwwCaHoxFjAUBgNVBAoMDUFsaWJh
   * YmEgQ2xvdWQxFDA****
   * -----END CERTIFICATE-----
   */
  clusterCertificate?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----\\nMIIC5TCCAc0CAQAwgZ8xWTAJBgNVBAYTAlVTMAkGA1UECAwCQ0EwDQYDVQQKDAZD\\nYXZpdW0wDQYDVQQLDAZOM0ZJUFMwDgYDVQQHDAdTYW5Kb3NlMBMGA1UdEQwMMTk****
   * -----END CERTIFICATE REQUEST-----
   */
  clusterCsr?: string;
  /**
   * @example
   * cluster-p94y1dud9ts****
   */
  clusterId?: string;
  /**
   * @example
   * cluster_polar_****
   */
  clusterName?: string;
  /**
   * @example
   * ----BEGIN CERTIFICATE-----
   * MIIDaTCCAlECAQEwDQYJKoZIhvcNAQELBQAwVTELMAkGA1UEBhMCY24xCzAJBgNV
   * BAgMAnpqMQswCQYDVQQHDAJoejEWMBQGA1UECgwNQWxpYmFiYSBDbG91ZDEUMBIG
   * A1UECwwLU2VjQ2xvdWRIc20wHhcNMjQwNzAzM****
   * -----END CERTIFICATE-----
   */
  clusterOwnerCertificate?: string;
  /**
   * @example
   * 1641275680000
   */
  createTime?: number;
  /**
   * @example
   * jnta
   */
  deviceType?: string;
  instances?: GetClusterResponseBodyClusterInstances[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2
   */
  size?: number;
  /**
   * @example
   * NEW
   */
  status?: string;
  /**
   * @example
   * vpc-8vbt0fjdm29hofvbo****
   */
  vpcId?: string;
  /**
   * @example
   * 130.176.XX.XX
   */
  whitelist?: string;
  zones?: GetClusterResponseBodyClusterZones[];
  static names(): { [key: string]: string } {
    return {
      clusterCertificate: 'ClusterCertificate',
      clusterCsr: 'ClusterCsr',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterOwnerCertificate: 'ClusterOwnerCertificate',
      createTime: 'CreateTime',
      deviceType: 'DeviceType',
      instances: 'Instances',
      regionId: 'RegionId',
      size: 'Size',
      status: 'Status',
      vpcId: 'VpcId',
      whitelist: 'Whitelist',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCertificate: 'string',
      clusterCsr: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterOwnerCertificate: 'string',
      createTime: 'number',
      deviceType: 'string',
      instances: { 'type': 'array', 'itemType': GetClusterResponseBodyClusterInstances },
      regionId: 'string',
      size: 'number',
      status: 'string',
      vpcId: 'string',
      whitelist: 'string',
      zones: { 'type': 'array', 'itemType': GetClusterResponseBodyClusterZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImage extends $tea.Model {
  /**
   * @example
   * backup-1618017313
   */
  backupId?: string;
  /**
   * @example
   * 1641275680000
   */
  copyTime?: number;
  /**
   * @example
   * 1786776567788
   */
  exportTime?: number;
  /**
   * @example
   * image-wz9c5ths5dfuwx47****
   */
  imageId?: string;
  /**
   * @example
   * hsm-cn-9lb32vll****
   */
  instanceId?: string;
  /**
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * hsm-test
   */
  remark?: string;
  /**
   * @example
   * backup-gfuiasdfa****
   */
  sourceBackupUid?: string;
  /**
   * @example
   * image-kklhhhh****
   */
  sourceImageUid?: string;
  /**
   * @example
   * hsm-wz9fnmvx190shfbk****
   */
  sourceInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @example
   * NEW
   */
  status?: string;
  /**
   * @example
   * 3kGeHnmQzXwSsfF0Jk9eJYhe2gP6An0/HlYIiZh1****
   */
  vsmDigest?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      copyTime: 'CopyTime',
      exportTime: 'ExportTime',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      mode: 'Mode',
      regionId: 'RegionId',
      remark: 'Remark',
      sourceBackupUid: 'SourceBackupUid',
      sourceImageUid: 'SourceImageUid',
      sourceInstanceId: 'SourceInstanceId',
      sourceRegionId: 'SourceRegionId',
      status: 'Status',
      vsmDigest: 'VsmDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      copyTime: 'number',
      exportTime: 'number',
      imageId: 'string',
      instanceId: 'string',
      mode: 'string',
      regionId: 'string',
      remark: 'string',
      sourceBackupUid: 'string',
      sourceImageUid: 'string',
      sourceInstanceId: 'string',
      sourceRegionId: 'string',
      status: 'string',
      vsmDigest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstance extends $tea.Model {
  /**
   * @example
   * cluster-w3G9vOJI2****
   */
  clusterId?: string;
  /**
   * @example
   * cluster_online
   */
  clusterName?: string;
  /**
   * @example
   * 1699515963000
   */
  createTime?: number;
  /**
   * @example
   * jnta.SJJ1528-G
   */
  deviceType?: string;
  /**
   * @example
   * 1699496389720
   */
  expireTime?: number;
  /**
   * @example
   * hsm-cn-g4t3jwsc****
   */
  instanceId?: string;
  /**
   * @example
   * 10.192.XX.XX
   */
  ip?: string;
  /**
   * @example
   * false
   */
  isTrial?: boolean;
  /**
   * @example
   * true
   */
  master?: boolean;
  /**
   * @example
   * 23576634952****
   */
  orderId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * hsmOnline
   */
  remark?: string;
  /**
   * @example
   * EXPIRED
   */
  status?: string;
  /**
   * @example
   * vsw-bp1mvfs31ltt0wyhf****
   */
  vSwitchId?: string;
  /**
   * @example
   * jnta
   */
  vendor?: string;
  /**
   * @example
   * vpc-uf69i66j9kmoko52p****
   */
  vpcId?: string;
  /**
   * @example
   * 18.68.XX.XX
   */
  whitelist?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      deviceType: 'DeviceType',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      isTrial: 'IsTrial',
      master: 'Master',
      orderId: 'OrderId',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vendor: 'Vendor',
      vpcId: 'VpcId',
      whitelist: 'Whitelist',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'number',
      deviceType: 'string',
      expireTime: 'number',
      instanceId: 'string',
      ip: 'string',
      isTrial: 'boolean',
      master: 'boolean',
      orderId: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      vSwitchId: 'string',
      vendor: 'string',
      vpcId: 'string',
      whitelist: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJob extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @example
   * 95
   */
  progress?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * fail
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinClusterResponseBodyJob extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * 1711764127000
   */
  createTime?: string;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @example
   * 86
   */
  progress?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponseBodyBackups extends $tea.Model {
  /**
   * @example
   * 1
   */
  autoImageCount?: number;
  /**
   * @example
   * 13
   */
  backupHourInDay?: string;
  /**
   * @example
   * backup-1648438****
   */
  backupId?: string;
  /**
   * @example
   * 3
   */
  backupPeriod?: number;
  /**
   * @example
   * 1637229596000
   */
  createTime?: number;
  /**
   * @example
   * 1682417553781
   */
  expireTime?: number;
  /**
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @example
   * 3
   */
  maxImageCount?: string;
  /**
   * @example
   * backup-te****
   */
  name?: string;
  /**
   * @example
   * 1682417553781
   */
  nextImageCreateTime?: number;
  /**
   * @example
   * hsm-cn-vj30bil8****
   */
  ownerInstanceId?: string;
  /**
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @example
   * 1641275680000
   */
  releaseTime?: number;
  /**
   * @example
   * normal backup
   */
  remark?: string;
  /**
   * @example
   * backup-fdb897sdfg534-****
   */
  spInstanceId?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoImageCount: 'AutoImageCount',
      backupHourInDay: 'BackupHourInDay',
      backupId: 'BackupId',
      backupPeriod: 'BackupPeriod',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      maxImageCount: 'MaxImageCount',
      name: 'Name',
      nextImageCreateTime: 'NextImageCreateTime',
      ownerInstanceId: 'OwnerInstanceId',
      regionId: 'RegionId',
      releaseTime: 'ReleaseTime',
      remark: 'Remark',
      spInstanceId: 'SpInstanceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoImageCount: 'number',
      backupHourInDay: 'string',
      backupId: 'string',
      backupPeriod: 'number',
      createTime: 'number',
      expireTime: 'number',
      instanceId: 'string',
      maxImageCount: 'string',
      name: 'string',
      nextImageCreateTime: 'number',
      ownerInstanceId: 'string',
      regionId: 'string',
      releaseTime: 'number',
      remark: 'string',
      spInstanceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  /**
   * @example
   * cluster-w3G9vOJI2****
   */
  clusterId?: string;
  /**
   * @example
   * INITIALIZED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImages extends $tea.Model {
  /**
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @example
   * 1641275680000
   */
  copyTime?: string;
  /**
   * @example
   * 1782849566738
   */
  exportTime?: number;
  /**
   * @example
   * image-d79x4k11pmg19****
   */
  imageId?: string;
  /**
   * @example
   * hsm-cn-6ja1xknf****
   */
  instanceId?: string;
  /**
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * hsm-test
   */
  remark?: string;
  /**
   * @example
   * backup-hodfhaol****
   */
  sourceBackupUid?: string;
  /**
   * @example
   * image-ooopjygsn****
   */
  sourceImageUid?: string;
  /**
   * @example
   * hsm-cn-wz9i2dmefudfxtmb****
   */
  sourceInstanceId?: string;
  /**
   * @example
   * cn-shanghai
   */
  sourceRegionId?: string;
  /**
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @example
   * 3kGeHnmQzXwSsfF0Jk9eJYhe2gP6An0/HlYIiZh1****
   */
  vsmDigest?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      copyTime: 'CopyTime',
      exportTime: 'ExportTime',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      mode: 'Mode',
      regionId: 'RegionId',
      remark: 'Remark',
      sourceBackupUid: 'SourceBackupUid',
      sourceImageUid: 'SourceImageUid',
      sourceInstanceId: 'SourceInstanceId',
      sourceRegionId: 'SourceRegionId',
      status: 'Status',
      vsmDigest: 'VsmDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      copyTime: 'string',
      exportTime: 'number',
      imageId: 'string',
      instanceId: 'string',
      mode: 'string',
      regionId: 'string',
      remark: 'string',
      sourceBackupUid: 'string',
      sourceImageUid: 'string',
      sourceInstanceId: 'string',
      sourceRegionId: 'string',
      status: 'string',
      vsmDigest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  /**
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuickInitInstanceResponseBodyJob extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * 1699515963000
   */
  createTime?: string;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-000fi9k1v2hclo321sal
   */
  jobId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetInstanceResponseBodyJob extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * 1653274407000
   */
  createTime?: string;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-0007bl8oev0u3jqyfu6a
   */
  jobId?: string;
  /**
   * @example
   * 80
   */
  progress?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreInstanceResponseBodyJob extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * 1711764127000
   */
  createTime?: string;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-540356379023708160
   */
  jobId?: string;
  /**
   * @example
   * 50
   */
  progress?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncClusterResponseBodyJob extends $tea.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * 1711764127000
   */
  createTime?: string;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-000bu7m5vjmyz9s7qz85
   */
  jobId?: string;
  /**
   * @example
   * 90
   */
  progress?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hsm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 查询用户地域下审计日志功能开通
   * 
   * @param request - ConfigAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigAuditLogResponse
   */
  async configAuditLogWithOptions(request: ConfigAuditLogRequest, runtime: $Util.RuntimeOptions): Promise<ConfigAuditLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditAction)) {
      query["AuditAction"] = request.auditAction;
    }

    if (!Util.isUnset(request.auditOssBucket)) {
      query["AuditOssBucket"] = request.auditOssBucket;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigAuditLog",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigAuditLogResponse>(await this.callApi(params, req, runtime), new ConfigAuditLogResponse({}));
  }

  /**
   * 查询用户地域下审计日志功能开通
   * 
   * @param request - ConfigAuditLogRequest
   * @returns ConfigAuditLogResponse
   */
  async configAuditLog(request: ConfigAuditLogRequest): Promise<ConfigAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configAuditLogWithOptions(request, runtime);
  }

  /**
   * 设置备份名与备注
   * 
   * @param request - ConfigBackupRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigBackupRemarkResponse
   */
  async configBackupRemarkWithOptions(request: ConfigBackupRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ConfigBackupRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigBackupRemark",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigBackupRemarkResponse>(await this.callApi(params, req, runtime), new ConfigBackupRemarkResponse({}));
  }

  /**
   * 设置备份名与备注
   * 
   * @param request - ConfigBackupRemarkRequest
   * @returns ConfigBackupRemarkResponse
   */
  async configBackupRemark(request: ConfigBackupRemarkRequest): Promise<ConfigBackupRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configBackupRemarkWithOptions(request, runtime);
  }

  /**
   * 配置备份自动轮转任务
   * 
   * @param request - ConfigBackupTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigBackupTaskResponse
   */
  async configBackupTaskWithOptions(request: ConfigBackupTaskRequest, runtime: $Util.RuntimeOptions): Promise<ConfigBackupTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupHourInDay)) {
      query["BackupHourInDay"] = request.backupHourInDay;
    }

    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!Util.isUnset(request.manual2PeriodicList)) {
      query["Manual2PeriodicList"] = request.manual2PeriodicList;
    }

    if (!Util.isUnset(request.periodic2ManualList)) {
      query["Periodic2ManualList"] = request.periodic2ManualList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigBackupTask",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigBackupTaskResponse>(await this.callApi(params, req, runtime), new ConfigBackupTaskResponse({}));
  }

  /**
   * 配置备份自动轮转任务
   * 
   * @param request - ConfigBackupTaskRequest
   * @returns ConfigBackupTaskResponse
   */
  async configBackupTask(request: ConfigBackupTaskRequest): Promise<ConfigBackupTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configBackupTaskWithOptions(request, runtime);
  }

  /**
   * 国际站配置HSM集群证书
   * 
   * @param request - ConfigClusterCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterCertificateResponse
   */
  async configClusterCertificateWithOptions(request: ConfigClusterCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ConfigClusterCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterCertificate)) {
      body["ClusterCertificate"] = request.clusterCertificate;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.issuerCertificate)) {
      body["IssuerCertificate"] = request.issuerCertificate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigClusterCertificate",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigClusterCertificateResponse>(await this.callApi(params, req, runtime), new ConfigClusterCertificateResponse({}));
  }

  /**
   * 国际站配置HSM集群证书
   * 
   * @param request - ConfigClusterCertificateRequest
   * @returns ConfigClusterCertificateResponse
   */
  async configClusterCertificate(request: ConfigClusterCertificateRequest): Promise<ConfigClusterCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterCertificateWithOptions(request, runtime);
  }

  /**
   * 配置集群名称
   * 
   * @param request - ConfigClusterNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterNameResponse
   */
  async configClusterNameWithOptions(request: ConfigClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<ConfigClusterNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigClusterName",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigClusterNameResponse>(await this.callApi(params, req, runtime), new ConfigClusterNameResponse({}));
  }

  /**
   * 配置集群名称
   * 
   * @param request - ConfigClusterNameRequest
   * @returns ConfigClusterNameResponse
   */
  async configClusterName(request: ConfigClusterNameRequest): Promise<ConfigClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterNameWithOptions(request, runtime);
  }

  /**
   * 配置集群子网
   * 
   * @param tmpReq - ConfigClusterSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterSubnetResponse
   */
  async configClusterSubnetWithOptions(tmpReq: ConfigClusterSubnetRequest, runtime: $Util.RuntimeOptions): Promise<ConfigClusterSubnetResponse> {
    Util.validateModel(tmpReq);
    let request = new ConfigClusterSubnetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.vSwitchIds)) {
      request.vSwitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchIds, "VSwitchIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchIdsShrink)) {
      body["VSwitchIds"] = request.vSwitchIdsShrink;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigClusterSubnet",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigClusterSubnetResponse>(await this.callApi(params, req, runtime), new ConfigClusterSubnetResponse({}));
  }

  /**
   * 配置集群子网
   * 
   * @param request - ConfigClusterSubnetRequest
   * @returns ConfigClusterSubnetResponse
   */
  async configClusterSubnet(request: ConfigClusterSubnetRequest): Promise<ConfigClusterSubnetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterSubnetWithOptions(request, runtime);
  }

  /**
   * 配置集群名称
   * 
   * @param request - ConfigClusterWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigClusterWhitelistResponse
   */
  async configClusterWhitelistWithOptions(request: ConfigClusterWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ConfigClusterWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.whitelist)) {
      body["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigClusterWhitelist",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigClusterWhitelistResponse>(await this.callApi(params, req, runtime), new ConfigClusterWhitelistResponse({}));
  }

  /**
   * 配置集群名称
   * 
   * @param request - ConfigClusterWhitelistRequest
   * @returns ConfigClusterWhitelistResponse
   */
  async configClusterWhitelist(request: ConfigClusterWhitelistRequest): Promise<ConfigClusterWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterWhitelistWithOptions(request, runtime);
  }

  /**
   * 设置镜像备注
   * 
   * @param request - ConfigImageRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigImageRemarkResponse
   */
  async configImageRemarkWithOptions(request: ConfigImageRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ConfigImageRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigImageRemark",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigImageRemarkResponse>(await this.callApi(params, req, runtime), new ConfigImageRemarkResponse({}));
  }

  /**
   * 设置镜像备注
   * 
   * @param request - ConfigImageRemarkRequest
   * @returns ConfigImageRemarkResponse
   */
  async configImageRemark(request: ConfigImageRemarkRequest): Promise<ConfigImageRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configImageRemarkWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigInstanceIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceIpAddressResponse
   */
  async configInstanceIpAddressWithOptions(request: ConfigInstanceIpAddressRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceIpAddressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigInstanceIpAddress",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigInstanceIpAddressResponse>(await this.callApi(params, req, runtime), new ConfigInstanceIpAddressResponse({}));
  }

  /**
   * @param request - ConfigInstanceIpAddressRequest
   * @returns ConfigInstanceIpAddressResponse
   */
  async configInstanceIpAddress(request: ConfigInstanceIpAddressRequest): Promise<ConfigInstanceIpAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceIpAddressWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigInstanceRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceRemarkResponse
   */
  async configInstanceRemarkWithOptions(request: ConfigInstanceRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceRemarkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigInstanceRemark",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigInstanceRemarkResponse>(await this.callApi(params, req, runtime), new ConfigInstanceRemarkResponse({}));
  }

  /**
   * @param request - ConfigInstanceRemarkRequest
   * @returns ConfigInstanceRemarkResponse
   */
  async configInstanceRemark(request: ConfigInstanceRemarkRequest): Promise<ConfigInstanceRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceRemarkWithOptions(request, runtime);
  }

  /**
   * TODO 不允许控制台直接修改集群内实例的白名单实现重构
   * 
   * @param request - ConfigInstanceWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceWhitelistResponse
   */
  async configInstanceWhitelistWithOptions(request: ConfigInstanceWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.whitelist)) {
      body["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfigInstanceWhitelist",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigInstanceWhitelistResponse>(await this.callApi(params, req, runtime), new ConfigInstanceWhitelistResponse({}));
  }

  /**
   * TODO 不允许控制台直接修改集群内实例的白名单实现重构
   * 
   * @param request - ConfigInstanceWhitelistRequest
   * @returns ConfigInstanceWhitelistResponse
   */
  async configInstanceWhitelist(request: ConfigInstanceWhitelistRequest): Promise<ConfigInstanceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceWhitelistWithOptions(request, runtime);
  }

  /**
   * 跨地域复制镜像
   * 
   * @param request - CopyImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyImageResponse
   */
  async copyImageWithOptions(request: CopyImageRequest, runtime: $Util.RuntimeOptions): Promise<CopyImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUid)) {
      body["ImageUid"] = request.imageUid;
    }

    if (!Util.isUnset(request.targetRegionId)) {
      body["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CopyImage",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyImageResponse>(await this.callApi(params, req, runtime), new CopyImageResponse({}));
  }

  /**
   * 跨地域复制镜像
   * 
   * @param request - CopyImageRequest
   * @returns CopyImageResponse
   */
  async copyImage(request: CopyImageRequest): Promise<CopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyImageWithOptions(request, runtime);
  }

  /**
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.masterInstanceId)) {
      body["MasterInstanceId"] = request.masterInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 启用备份
   * 
   * @param request - EnableBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableBackupResponse
   */
  async enableBackupWithOptions(request: EnableBackupRequest, runtime: $Util.RuntimeOptions): Promise<EnableBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableBackup",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableBackupResponse>(await this.callApi(params, req, runtime), new EnableBackupResponse({}));
  }

  /**
   * 启用备份
   * 
   * @param request - EnableBackupRequest
   * @returns EnableBackupResponse
   */
  async enableBackup(request: EnableBackupRequest): Promise<EnableBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableBackupWithOptions(request, runtime);
  }

  /**
   * 手动导出镜像
   * 
   * @param request - ExportImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportImageResponse
   */
  async exportImageWithOptions(request: ExportImageRequest, runtime: $Util.RuntimeOptions): Promise<ExportImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportImage",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportImageResponse>(await this.callApi(params, req, runtime), new ExportImageResponse({}));
  }

  /**
   * 手动导出镜像
   * 
   * @param request - ExportImageRequest
   * @returns ExportImageResponse
   */
  async exportImage(request: ExportImageRequest): Promise<ExportImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  /**
   * 查询审计日志功能开通状态
   * 
   * @param request - GetAuditLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditLogStatusResponse
   */
  async getAuditLogStatusWithOptions(request: GetAuditLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAuditLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.getOssBucket)) {
      query["GetOssBucket"] = request.getOssBucket;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuditLogStatus",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuditLogStatusResponse>(await this.callApi(params, req, runtime), new GetAuditLogStatusResponse({}));
  }

  /**
   * 查询审计日志功能开通状态
   * 
   * @param request - GetAuditLogStatusRequest
   * @returns GetAuditLogStatusResponse
   */
  async getAuditLogStatus(request: GetAuditLogStatusRequest): Promise<GetAuditLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditLogStatusWithOptions(request, runtime);
  }

  /**
   * 展示用户备份
   * 
   * @param request - GetBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupResponse
   */
  async getBackupWithOptions(request: GetBackupRequest, runtime: $Util.RuntimeOptions): Promise<GetBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBackup",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBackupResponse>(await this.callApi(params, req, runtime), new GetBackupResponse({}));
  }

  /**
   * 展示用户备份
   * 
   * @param request - GetBackupRequest
   * @returns GetBackupResponse
   */
  async getBackup(request: GetBackupRequest): Promise<GetBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupWithOptions(request, runtime);
  }

  /**
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: GetClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
  }

  /**
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * 展示备份下的用户镜像
   * 
   * @param request - GetImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(request: GetImageRequest, runtime: $Util.RuntimeOptions): Promise<GetImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImage",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
  }

  /**
   * 展示备份下的用户镜像
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * 获取异步任务执行信息
   * 
   * @param request - GetJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(request: GetJobRequest, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJob",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  /**
   * 获取异步任务执行信息
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * 为用户创建审计日志的服务关联角色
   * 
   * @param request - InitializeAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeAuditLogResponse
   */
  async initializeAuditLogWithOptions(runtime: $Util.RuntimeOptions): Promise<InitializeAuditLogResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "InitializeAuditLog",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitializeAuditLogResponse>(await this.callApi(params, req, runtime), new InitializeAuditLogResponse({}));
  }

  /**
   * 为用户创建审计日志的服务关联角色
   * @returns InitializeAuditLogResponse
   */
  async initializeAuditLog(): Promise<InitializeAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeAuditLogWithOptions(runtime);
  }

  /**
   * 初始化集群（原activeCluster）
   * 
   * @param request - InitializeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeClusterResponse
   */
  async initializeClusterWithOptions(request: InitializeClusterRequest, runtime: $Util.RuntimeOptions): Promise<InitializeClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitializeCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitializeClusterResponse>(await this.callApi(params, req, runtime), new InitializeClusterResponse({}));
  }

  /**
   * 初始化集群（原activeCluster）
   * 
   * @param request - InitializeClusterRequest
   * @returns InitializeClusterResponse
   */
  async initializeCluster(request: InitializeClusterRequest): Promise<InitializeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeClusterWithOptions(request, runtime);
  }

  /**
   * @param request - JoinClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinClusterResponse
   */
  async joinClusterWithOptions(request: JoinClusterRequest, runtime: $Util.RuntimeOptions): Promise<JoinClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "JoinCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinClusterResponse>(await this.callApi(params, req, runtime), new JoinClusterResponse({}));
  }

  /**
   * @param request - JoinClusterRequest
   * @returns JoinClusterResponse
   */
  async joinCluster(request: JoinClusterRequest): Promise<JoinClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinClusterWithOptions(request, runtime);
  }

  /**
   * @param request - LeaveClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LeaveClusterResponse
   */
  async leaveClusterWithOptions(request: LeaveClusterRequest, runtime: $Util.RuntimeOptions): Promise<LeaveClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LeaveCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LeaveClusterResponse>(await this.callApi(params, req, runtime), new LeaveClusterResponse({}));
  }

  /**
   * @param request - LeaveClusterRequest
   * @returns LeaveClusterResponse
   */
  async leaveCluster(request: LeaveClusterRequest): Promise<LeaveClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.leaveClusterWithOptions(request, runtime);
  }

  /**
   * 查询备份列表
   * 
   * @param request - ListBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBackupsResponse
   */
  async listBackupsWithOptions(request: ListBackupsRequest, runtime: $Util.RuntimeOptions): Promise<ListBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBackups",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBackupsResponse>(await this.callApi(params, req, runtime), new ListBackupsResponse({}));
  }

  /**
   * 查询备份列表
   * 
   * @param request - ListBackupsRequest
   * @returns ListBackupsResponse
   */
  async listBackups(request: ListBackupsRequest): Promise<ListBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBackupsWithOptions(request, runtime);
  }

  /**
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * 查询用户镜像列表
   * 
   * @param request - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: ListImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  /**
   * 查询用户镜像列表
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 资源组移动资源
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * 资源组移动资源
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - PauseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseInstanceResponse
   */
  async pauseInstanceWithOptions(request: PauseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<PauseInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PauseInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseInstanceResponse>(await this.callApi(params, req, runtime), new PauseInstanceResponse({}));
  }

  /**
   * @param request - PauseInstanceRequest
   * @returns PauseInstanceResponse
   */
  async pauseInstance(request: PauseInstanceRequest): Promise<PauseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - QuickInitInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuickInitInstanceResponse
   */
  async quickInitInstanceWithOptions(request: QuickInitInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QuickInitInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QuickInitInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuickInitInstanceResponse>(await this.callApi(params, req, runtime), new QuickInitInstanceResponse({}));
  }

  /**
   * @param request - QuickInitInstanceRequest
   * @returns QuickInitInstanceResponse
   */
  async quickInitInstance(request: QuickInitInstanceRequest): Promise<QuickInitInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.quickInitInstanceWithOptions(request, runtime);
  }

  /**
   * 重置备份
   * 
   * @param request - ResetBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetBackupResponse
   */
  async resetBackupWithOptions(request: ResetBackupRequest, runtime: $Util.RuntimeOptions): Promise<ResetBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetBackup",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetBackupResponse>(await this.callApi(params, req, runtime), new ResetBackupResponse({}));
  }

  /**
   * 重置备份
   * 
   * @param request - ResetBackupRequest
   * @returns ResetBackupResponse
   */
  async resetBackup(request: ResetBackupRequest): Promise<ResetBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetBackupWithOptions(request, runtime);
  }

  /**
   * @param request - ResetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetInstanceResponse
   */
  async resetInstanceWithOptions(request: ResetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ResetInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetInstanceResponse>(await this.callApi(params, req, runtime), new ResetInstanceResponse({}));
  }

  /**
   * @param request - ResetInstanceRequest
   * @returns ResetInstanceResponse
   */
  async resetInstance(request: ResetInstanceRequest): Promise<ResetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - RestoreInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreInstanceResponse
   */
  async restoreInstanceWithOptions(request: RestoreInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestoreInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RestoreInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestoreInstanceResponse>(await this.callApi(params, req, runtime), new RestoreInstanceResponse({}));
  }

  /**
   * @param request - RestoreInstanceRequest
   * @returns RestoreInstanceResponse
   */
  async restoreInstance(request: RestoreInstanceRequest): Promise<RestoreInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ResumeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(request: ResumeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ResumeInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResumeInstance",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeInstanceResponse>(await this.callApi(params, req, runtime), new ResumeInstanceResponse({}));
  }

  /**
   * @param request - ResumeInstanceRequest
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(request: ResumeInstanceRequest): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - SwitchClusterMasterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchClusterMasterResponse
   */
  async switchClusterMasterWithOptions(request: SwitchClusterMasterRequest, runtime: $Util.RuntimeOptions): Promise<SwitchClusterMasterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SwitchClusterMaster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchClusterMasterResponse>(await this.callApi(params, req, runtime), new SwitchClusterMasterResponse({}));
  }

  /**
   * @param request - SwitchClusterMasterRequest
   * @returns SwitchClusterMasterResponse
   */
  async switchClusterMaster(request: SwitchClusterMasterRequest): Promise<SwitchClusterMasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchClusterMasterWithOptions(request, runtime);
  }

  /**
   * @param request - SyncClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncClusterResponse
   */
  async syncClusterWithOptions(request: SyncClusterRequest, runtime: $Util.RuntimeOptions): Promise<SyncClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SyncCluster",
      version: "2023-11-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncClusterResponse>(await this.callApi(params, req, runtime), new SyncClusterResponse({}));
  }

  /**
   * @param request - SyncClusterRequest
   * @returns SyncClusterResponse
   */
  async syncCluster(request: SyncClusterRequest): Promise<SyncClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncClusterWithOptions(request, runtime);
  }

}
