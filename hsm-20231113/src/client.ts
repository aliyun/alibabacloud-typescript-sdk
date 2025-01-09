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
   * Specifies whether to enable the audit log feature. Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  auditAction?: string;
  /**
   * @remarks
   * The bucket to which audit logs are delivered.
   * 
   * @example
   * hsm-log
   */
  auditOssBucket?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-fdb897sdfg****
   */
  backupId?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * backup-test
   */
  name?: string;
  /**
   * @remarks
   * The description of the backup.
   */
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
   * @remarks
   * The request ID.
   * 
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
   * The backup time in the 24-hour format. Valid values: 1 to 24.
   * 
   * Enumeration values:
   * 
   * *   0
   * *   1
   * *   2
   * *   3
   * *   4
   * *   5
   * *   6
   * *   7
   * *   8
   * *   9
   * *   10
   * *   11
   * *   12
   * *   13
   * *   14
   * *   15
   * *   16
   * *   17
   * *   18
   * *   19
   * *   20
   * *   21
   * *   22
   * *   23
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  backupHourInDay?: number;
  /**
   * @remarks
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-173620705****
   */
  backupId?: string;
  /**
   * @remarks
   * The automatic backup cycle. Unit: days. Valid values: 1, 3, 7, and 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  backupPeriod?: number;
  /**
   * @remarks
   * The IDs of images for which the manual backup mode is updated to the automatic backup mode.
   */
  manual2PeriodicList?: string[];
  /**
   * @remarks
   * The IDs of images for which the automatic backup mode is updated to the manual backup mode.
   */
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
   * @remarks
   * The request ID.
   * 
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
   * The cluster certificate.
   * 
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
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * The self-signed certificate.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsgfaisdf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster. You can call the ListCluster operation to obtain cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A list of vSwitches that are associated with the cluster. Note: You must include all vSwitches that you want to associate with the cluster.
   * 
   * This parameter is required.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
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
   * The ID of the cluster. You can call the ListCluster operation to obtain cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A list of vSwitches that are associated with the cluster. Note: You must include all vSwitches that you want to associate with the cluster.
   * 
   * This parameter is required.
   */
  vSwitchIdsShrink?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-729dm40FG****
   */
  clusterId?: string;
  /**
   * @remarks
   * The IP address whitelist of the cluster.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * image-d79x4k11pmg19****
   */
  imageId?: string;
  /**
   * @remarks
   * The description of the image.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  /**
   * @remarks
   * The endpoint of the VPC to which the HMS belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the HMS belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-u7gb0qahu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the HMS belongs.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the HSM.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * A list of IP addresses that you want to configure in the whitelist. Separate multiple IP addresses with spaces or commas (,).
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The ID of the image.
   * 
   * @example
   * image-hafiudfahdd****
   */
  imageUid?: string;
  /**
   * @remarks
   * The ID of the destination region.
   * 
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
   * @remarks
   * Indicates whether the task is complete.
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1724379766191
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster_on****
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the master HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm_intl-sg-uz63ixak****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
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
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cluster-729dm40FG****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The language of the content. Valid values:
   * 
   * *   zh: Chinese.
   * *   en: English.
   * 
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
  /**
   * @remarks
   * The regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-1736207****
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the HSM.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * image-8vbdd5uc6v10ecn5****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the HSM.
   * 
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
  /**
   * @remarks
   * The information about the asynchronous task returned.
   */
  job?: ExportImageResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * Specifies whether to obtain the list of OSS buckets that can be used to store audit logs. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  getOssBucket?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
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
   * @remarks
   * Indicates whether the audit log feature is enabled. Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * @example
   * enable
   */
  auditLogStatus?: string;
  /**
   * @remarks
   * The bucket that stores audit logs.
   * 
   * @example
   * bucket-test
   */
  auditOssBucket?: string;
  /**
   * @remarks
   * Indicates whether Cloud Hardware Security Module is authorized to deliver logs. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  grantedServiceAccess?: boolean;
  /**
   * @remarks
   * A list of buckets that can be used to store audit logs.
   */
  ossBuckets?: string[];
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
   * @remarks
   * The ID of the backup.
   * 
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
  /**
   * @remarks
   * The information about the backup.
   */
  backup?: GetBackupResponseBodyBackup;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
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
  /**
   * @remarks
   * The information about the cluster.
   */
  cluster?: GetClusterResponseBodyCluster;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the image.
   * 
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
  /**
   * @remarks
   * The image information.
   */
  image?: GetImageResponseBodyImage;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The ID of the HSM.
   * 
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
  /**
   * @remarks
   * The information about the HSM.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the task.
   * 
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
  /**
   * @remarks
   * The details of the task.
   */
  job?: GetJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-NZB9Oj5Yfd8Y****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the HSM that you want to add to the cluster.
   * 
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
  /**
   * @remarks
   * The details of the task.
   */
  job?: JoinClusterResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-729dm40FG****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the HSM.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-1648438****
   */
  backupId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the hardware security module (HSM).
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * hsm-te****
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
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
  /**
   * @remarks
   * The backups returned.
   */
  backups?: ListBackupsResponseBodyBackups[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
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
  /**
   * @remarks
   * The clusters.
   */
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of clusters.
   * 
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
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The image generation mode. Valid values:
   * 
   * *   PERIODIC: The image is automatically generated.
   * *   MANUAL: The image is manually generated.
   * 
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @remarks
   * The number of images per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The images returned.
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * The number of images per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of images returned.
   * 
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
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 密码机硬件隔离类型，枚举值"vsm"虚拟密码机，"hostedHsm"托管硬件密码机
   */
  tenantIsolationType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tenantIsolationType: 'TenantIsolationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      tenantIsolationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The HSMs.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2tsvbnfe****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the hardware security module (HSM).
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-2ze0qae64mjuc0ni****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the HSM.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the HSM.
   * 
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
  /**
   * @remarks
   * The details of the task.
   */
  job?: QuickInitInstanceResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The ID of the backup.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the HSM.
   * 
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
  /**
   * @remarks
   * The details of the task.
   */
  job?: ResetInstanceResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the image that you want to use to restore the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * image-eaOGHkRDQgh4****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the HSM.
   * 
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
  /**
   * @remarks
   * The details of the task.
   */
  job?: RestoreInstanceResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the HSM.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-w3G9vOJI2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the HSM that you want to promote to the master HSM.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the cluster.
   * 
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
  /**
   * @remarks
   * The details of the task.
   */
  job?: SyncClusterResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * Indicates whether clusters are supported. Valid values:
   * 
   * *   yes
   * *   no
   * 
   * @example
   * yes
   */
  cluster?: string;
  /**
   * @remarks
   * The name of the zone.
   */
  localName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
  /**
   * @remarks
   * The name of the region.
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zones.
   */
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
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The error message returned if the operation is abnormal or fails.
   * 
   * @example
   * Job.Canceled
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * b1748ca6-6b55-49f4-a6d4-2d694a9f3693
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 100
   */
  process?: number;
  /**
   * @remarks
   * The response returned after the operation succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   running
   * *   cancel
   * *   fail
   * *   success
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The type of the task operation. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * @remarks
   * The number of images that are automatically backed up.
   * 
   * @example
   * 1
   */
  autoImageCount?: number;
  /**
   * @remarks
   * The backup time in the 24-hour format.
   * 
   * @example
   * 10
   */
  backupHourInDay?: string;
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @remarks
   * The automatic backup cycle. Unit: days.
   * 
   * @example
   * 3
   */
  backupPeriod?: number;
  /**
   * @remarks
   * The time when the backup is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the backup. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the hardware security module (HSM) that is associated with the backup.
   * 
   * @example
   * hsm-cn-5yd35431****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of images.
   * 
   * @example
   * 3
   */
  maxImageCount?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * backup-te****
   */
  name?: string;
  /**
   * @remarks
   * The next time when the image is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  nextImageCreateTime?: number;
  /**
   * @remarks
   * The ID of the HSM to which the backup belongs. This parameter is available only for HSM backups outside the Chinese mainland and the value of this parameter is consistent with the value of InstanceId.
   * 
   * @example
   * hsm-cn-huoahd****
   */
  ownerInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the backup is released. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the backup. This parameter is available only for HSM backups in the Chinese mainland.
   * 
   * @example
   * backup-fdb897sdfg53****
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The status of the backup. Valid values:
   * 
   * *   NEW
   * *   EXPIRED
   * *   ENABLED
   * 
   * @example
   * NEW
   */
  status?: string;
  /**
   * @remarks
   * The type of the backup. Valid values:
   * 
   * *   DEFAULT
   * *   NORMAL
   * 
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
   * @remarks
   * The ID of the HSM.
   * 
   * @example
   * hsm-cn-g6z3v0uf****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the HSM is a master HSM. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  master?: boolean;
  /**
   * @remarks
   * The ID of the HSM in the cluster.
   * 
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
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf61s651p69bdgmki****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
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
   * @remarks
   * The cluster certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDfTCCAmWgAwIBAgIJAMRqQMr5if66MA0GCSqGSIb3DQEBCwUAMFUxCzAJBgNV
   * BAYTAmNuMQswCQYDVQQIDAJ6ajELMAkGA1UEBwwCaHoxFjAUBgNVBAoMDUFsaWJh
   * YmEgQ2xvdWQxFDA****
   * -----END CERTIFICATE-----
   */
  clusterCertificate?: string;
  /**
   * @remarks
   * The certificate signing request (CSR) file of the cluster.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----\\nMIIC5TCCAc0CAQAwgZ8xWTAJBgNVBAYTAlVTMAkGA1UECAwCQ0EwDQYDVQQKDAZD\\nYXZpdW0wDQYDVQQLDAZOM0ZJUFMwDgYDVQQHDAdTYW5Kb3NlMBMGA1UdEQwMMTk****
   * -----END CERTIFICATE REQUEST-----
   */
  clusterCsr?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cluster-p94y1dud9ts****
   */
  clusterId?: string;
  clusterMode?: number;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster_polar_****
   */
  clusterName?: string;
  /**
   * @remarks
   * The self-signed certificate of the cluster.
   * 
   * @example
   * ----BEGIN CERTIFICATE-----
   * MIIDaTCCAlECAQEwDQYJKoZIhvcNAQELBQAwVTELMAkGA1UEBhMCY24xCzAJBgNV
   * BAgMAnpqMQswCQYDVQQHDAJoejEWMBQGA1UECgwNQWxpYmFiYSBDbG91ZDEUMBIG
   * A1UECwwLU2VjQ2xvdWRIc20wHhcNMjQwNzAzM****
   * -----END CERTIFICATE-----
   */
  clusterOwnerCertificate?: string;
  /**
   * @remarks
   * The time when the cluster was created. Unit: milliseconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  createTime?: number;
  /**
   * @remarks
   * The type of the device.
   * 
   * @example
   * jnta
   */
  deviceType?: string;
  /**
   * @remarks
   * The HSMs in the cluster.
   */
  instances?: GetClusterResponseBodyClusterInstances[];
  /**
   * @remarks
   * The ID of the region in which the cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of hardware security modules (HSMs) in the cluster.
   * 
   * @example
   * 2
   */
  size?: number;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   NEW: The cluster is not initialized.
   * *   INITIALIZED: The cluster is initialized.
   * *   DELETED: The cluster is deleted.
   * *   SYNCHRONIZING: The cluster is being synchronized.
   * *   TO_DELETE: The cluster is pending deletion.
   * 
   * @example
   * NEW
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the cluster belongs.
   * 
   * @example
   * vpc-8vbt0fjdm29hofvbo****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IP address whitelist of the cluster.
   * 
   * @example
   * 130.176.XX.XX
   */
  whitelist?: string;
  /**
   * @remarks
   * The information about the zones in which the cluster is deployed.
   */
  zones?: GetClusterResponseBodyClusterZones[];
  static names(): { [key: string]: string } {
    return {
      clusterCertificate: 'ClusterCertificate',
      clusterCsr: 'ClusterCsr',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
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
      clusterMode: 'number',
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
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-1618017313
   */
  backupId?: string;
  /**
   * @remarks
   * The time when the image was copied. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  copyTime?: number;
  /**
   * @remarks
   * The time when the image was generated. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1786776567788
   */
  exportTime?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * image-wz9c5ths5dfuwx47****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the hardware security module (HSM).
   * 
   * @example
   * hsm-cn-9lb32vll****
   */
  instanceId?: string;
  /**
   * @remarks
   * The image generation mode. Valid values:
   * 
   * *   PERIODIC
   * *   MANUAL
   * 
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * hsm-test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the source backup.
   * 
   * @example
   * backup-gfuiasdfa****
   */
  sourceBackupUid?: string;
  /**
   * @remarks
   * The ID of the source image.
   * 
   * @example
   * image-kklhhhh****
   */
  sourceImageUid?: string;
  /**
   * @remarks
   * The ID of the source HSM.
   * 
   * @example
   * hsm-wz9fnmvx190shfbk****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the source image.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   NEW
   * *   DELETED
   * *   CREATING
   * *   NORMAL
   * 
   * @example
   * NEW
   */
  status?: string;
  /**
   * @remarks
   * The digest of the HSM.
   * 
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
   * @remarks
   * The ID of the cluster to which the HSM belongs.
   * 
   * @example
   * cluster-w3G9vOJI2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster_online
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the HSM was created.
   * 
   * @example
   * 1699515963000
   */
  createTime?: number;
  /**
   * @remarks
   * The type of the device.
   * 
   * @example
   * jnta.SJJ1528-G
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the HSM expired.
   * 
   * @example
   * 1699496389720
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * @example
   * hsm-cn-g4t3jwsc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the HSM in the VPC.
   * 
   * @example
   * 10.192.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * Indicates whether the HSM is for trial use. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTrial?: boolean;
  /**
   * @remarks
   * Indicates whether the HSM is a master HSM. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  master?: boolean;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 23576634952****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the HSM.
   * 
   * @example
   * hsmOnline
   */
  remark?: string;
  /**
   * @remarks
   * The status of the HSM. Valid values:
   * 
   * *   PENDING: The HSM is disabled.
   * *   ACTIVE: The HSM is enabled.
   * *   EXPIRED: The HSM expired.
   * *   INVALID: The HSM is invalid.
   * *   FAILURE: The HSM failed to be created.
   * *   RESET: The HSM is being reset.
   * *   PAUSED: The HSM is paused.
   * *   MODIFYING: The HSM is being modified.
   * 
   * @example
   * EXPIRED
   */
  status?: string;
  /**
   * @remarks
   * 密码机硬件隔离类型，枚举值"vsm"虚拟密码机，"hostedHsm"托管硬件密码机
   */
  tenantIsolationType?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is configured for the HSM.
   * 
   * @example
   * vsw-bp1mvfs31ltt0wyhf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The information about the vendor.
   * 
   * @example
   * jnta
   */
  vendor?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the HSM belongs.
   * 
   * @example
   * vpc-uf69i66j9kmoko52p****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * 18.68.XX.XX
   */
  whitelist?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
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
      tenantIsolationType: 'TenantIsolationType',
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
      tenantIsolationType: 'string',
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
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 95
   */
  progress?: number;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   success
   * *   running
   * *   fail
   * *   cancel
   * 
   * @example
   * fail
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1711764127000
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 86
   */
  progress?: number;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success
   * *   running
   * *   cancel
   * *   fail
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * @remarks
   * The number of images that are automatically backed up.
   * 
   * @example
   * 1
   */
  autoImageCount?: number;
  /**
   * @remarks
   * The backup time on the hour that is in the 24-hour clock.
   * 
   * @example
   * 13
   */
  backupHourInDay?: string;
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-1648438****
   */
  backupId?: string;
  /**
   * @remarks
   * The automatic backup cycle. Unit: days.
   * 
   * @example
   * 3
   */
  backupPeriod?: number;
  /**
   * @remarks
   * The time when the backup is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1637229596000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the backup. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the HSM that is associated with the backup.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of images.
   * 
   * @example
   * 3
   */
  maxImageCount?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * backup-te****
   */
  name?: string;
  /**
   * @remarks
   * The time when the image is created next time. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  nextImageCreateTime?: number;
  /**
   * @remarks
   * The ID of the HSM to which the backup belongs. This parameter is available only for HSM backups outside the Chinese mainland and the value of this parameter is consistent with the value of InstanceId.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  ownerInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the backup is released. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * normal backup
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the backup. This parameter is available only for HSM backups in the Chinese mainland.
   * 
   * @example
   * backup-fdb897sdfg534-****
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The status of the backup. Valid values:
   * 
   * *   NEW: The backup is disabled.
   * *   EXPIRED: The backup expired.
   * *   ENABLED: The backup is enabled.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The type of the backup. Valid values:
   * 
   * *   DEFAULT
   * *   NORMAL
   * 
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
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cluster-w3G9vOJI2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   NEW: The cluster is not initialized.
   * *   INITIALIZED: The cluster is initialized.
   * *   DELETED: The cluster is deleted.
   * *   SYNCHRONIZING: The cluster is being synchronized.
   * *   TO_DELETE: The cluster is pending deletion.
   * 
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
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @remarks
   * The time when the image was copied. Unit: milliseconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  copyTime?: string;
  /**
   * @remarks
   * The time when the image was generated. Unit: milliseconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1782849566738
   */
  exportTime?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * image-d79x4k11pmg19****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the hardware security module (HSM).
   * 
   * @example
   * hsm-cn-6ja1xknf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The image generation mode. Valid values:
   * 
   * *   PERIODIC: The image is automatically generated.
   * *   MANUAL: The image is manually generated.
   * 
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * hsm-test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the source backup.
   * 
   * @example
   * backup-hodfhaol****
   */
  sourceBackupUid?: string;
  /**
   * @remarks
   * The ID of the source image.
   * 
   * @example
   * image-ooopjygsn****
   */
  sourceImageUid?: string;
  /**
   * @remarks
   * The ID of the source HSM.
   * 
   * @example
   * hsm-cn-wz9i2dmefudfxtmb****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the source image resides.
   * 
   * @example
   * cn-shanghai
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   NEW: The image is disabled.
   * *   DELETED: The image is deleted.
   * *   CREATING: The image is being created.
   * *   NORMAL: The image is created.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The digest of the HSM.
   * 
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
   * @remarks
   * The ID of the HSM.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The HSM status. Valid values:
   * 
   * *   PENDING: The HSM is disabled.
   * *   ACTIVE: The HSM is enabled.
   * *   EXPIRED: The HSM expired.
   * *   INVALID: The HSM is invalid.
   * *   FAILURE: The HSM failed to be created.
   * *   RESET: The HSM is being reset.
   * *   PAUSED: The HSM is paused.
   * *   MODIFYING: The HSM is being modified.
   * 
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
   * @remarks
   * Indicates whether the task is complete.
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1699515963000
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-000fi9k1v2hclo321sal
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   success
   * *   running
   * *   cancel
   * *   fail
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * @remarks
   * Indicates whether the task is complete.
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1653274407000
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-0007bl8oev0u3jqyfu6a
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 80
   */
  progress?: number;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   success
   * *   running
   * *   cancel
   * *   fail
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * @remarks
   * Indicates whether the task is complete.
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1711764127000
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-540356379023708160
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 50
   */
  progress?: number;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1711764127000
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * job-000bu7m5vjmyz9s7qz85
   */
  jobId?: string;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The response returned after the task succeeds.
   * 
   * @example
   * success
   */
  response?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success
   * *   running
   * *   cancel
   * *   fail
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   create
   * *   cancel
   * 
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
   * Enables or disables the audit log feature and delivers audit logs to buckets.
   * 
   * @remarks
   *   The region of the bucket must be the same as the region where the security audit feature is enabled.
   * *   If the security audit feature is enabled, do not delete Object Storage Service (OSS) buckets. If you delete OSS buckets, audit logs fail to be delivered.
   * *   Only electronic virtual security modules (EVSMs) and general virtual security modules (GVSMs) within the Chinese mainland support the security audit feature.
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
   * Enables or disables the audit log feature and delivers audit logs to buckets.
   * 
   * @remarks
   *   The region of the bucket must be the same as the region where the security audit feature is enabled.
   * *   If the security audit feature is enabled, do not delete Object Storage Service (OSS) buckets. If you delete OSS buckets, audit logs fail to be delivered.
   * *   Only electronic virtual security modules (EVSMs) and general virtual security modules (GVSMs) within the Chinese mainland support the security audit feature.
   * 
   * @param request - ConfigAuditLogRequest
   * @returns ConfigAuditLogResponse
   */
  async configAuditLog(request: ConfigAuditLogRequest): Promise<ConfigAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configAuditLogWithOptions(request, runtime);
  }

  /**
   * Configures the name and description of a backup.
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
   * Configures the name and description of a backup.
   * 
   * @param request - ConfigBackupRemarkRequest
   * @returns ConfigBackupRemarkResponse
   */
  async configBackupRemark(request: ConfigBackupRemarkRequest): Promise<ConfigBackupRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configBackupRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies the execution mode of a backup task.
   * 
   * @remarks
   * Only hardware security modules (HSMs) in the Chinese mainland support the operation.
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
   * Modifies the execution mode of a backup task.
   * 
   * @remarks
   * Only hardware security modules (HSMs) in the Chinese mainland support the operation.
   * 
   * @param request - ConfigBackupTaskRequest
   * @returns ConfigBackupTaskResponse
   */
  async configBackupTask(request: ConfigBackupTaskRequest): Promise<ConfigBackupTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configBackupTaskWithOptions(request, runtime);
  }

  /**
   * Configures a certificate for a cluster of hardware security modules (HSMs) outside the Chinese mainland.
   * 
   * @remarks
   * For more information about how to create a self-signed certificate and a cluster certificate on an Elastic Compute Service (ECS) instance, see [Create a NIST FIPS-validated GVSM cluster](https://help.aliyun.com/document_detail/293585.html).
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
   * Configures a certificate for a cluster of hardware security modules (HSMs) outside the Chinese mainland.
   * 
   * @remarks
   * For more information about how to create a self-signed certificate and a cluster certificate on an Elastic Compute Service (ECS) instance, see [Create a NIST FIPS-validated GVSM cluster](https://help.aliyun.com/document_detail/293585.html).
   * 
   * @param request - ConfigClusterCertificateRequest
   * @returns ConfigClusterCertificateResponse
   */
  async configClusterCertificate(request: ConfigClusterCertificateRequest): Promise<ConfigClusterCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterCertificateWithOptions(request, runtime);
  }

  /**
   * Changes the name of a cluster.
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
   * Changes the name of a cluster.
   * 
   * @param request - ConfigClusterNameRequest
   * @returns ConfigClusterNameResponse
   */
  async configClusterName(request: ConfigClusterNameRequest): Promise<ConfigClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterNameWithOptions(request, runtime);
  }

  /**
   * Modifies a list of vSwitches that are associated with a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can call the operation to configure all vSwitches that are associated with a HSM cluster. You can only add new vSwitches. You cannot delete vSwitches.
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
   * Modifies a list of vSwitches that are associated with a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can call the operation to configure all vSwitches that are associated with a HSM cluster. You can only add new vSwitches. You cannot delete vSwitches.
   * 
   * @param request - ConfigClusterSubnetRequest
   * @returns ConfigClusterSubnetResponse
   */
  async configClusterSubnet(request: ConfigClusterSubnetRequest): Promise<ConfigClusterSubnetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterSubnetWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of a cluster.
   * 
   * @remarks
   * The IP address whitelist of a cluster has a higher priority than the IP address whitelist of a hardware security module (HSM) in the cluster. In cluster mode, we recommend that you create an IP address whitelist for your cluster. You do not need to create an IP address for the HSM in the cluster.
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
   * Modifies the IP address whitelist of a cluster.
   * 
   * @remarks
   * The IP address whitelist of a cluster has a higher priority than the IP address whitelist of a hardware security module (HSM) in the cluster. In cluster mode, we recommend that you create an IP address whitelist for your cluster. You do not need to create an IP address for the HSM in the cluster.
   * 
   * @param request - ConfigClusterWhitelistRequest
   * @returns ConfigClusterWhitelistResponse
   */
  async configClusterWhitelist(request: ConfigClusterWhitelistRequest): Promise<ConfigClusterWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configClusterWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an image.
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
   * Modifies the description of an image.
   * 
   * @param request - ConfigImageRemarkRequest
   * @returns ConfigImageRemarkResponse
   */
  async configImageRemark(request: ConfigImageRemarkRequest): Promise<ConfigImageRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configImageRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies the virtual private cloud (VPC) endpoint of a hardware security module (HSM).
   * 
   * @remarks
   * After you add an HSM to a cluster, you cannot modify the VPC endpoint of the HSM.
   * 
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
   * Modifies the virtual private cloud (VPC) endpoint of a hardware security module (HSM).
   * 
   * @remarks
   * After you add an HSM to a cluster, you cannot modify the VPC endpoint of the HSM.
   * 
   * @param request - ConfigInstanceIpAddressRequest
   * @returns ConfigInstanceIpAddressResponse
   */
  async configInstanceIpAddress(request: ConfigInstanceIpAddressRequest): Promise<ConfigInstanceIpAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceIpAddressWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a hardware security module (HSM).
   * 
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
   * Modifies the description of a hardware security module (HSM).
   * 
   * @param request - ConfigInstanceRemarkRequest
   * @returns ConfigInstanceRemarkResponse
   */
  async configInstanceRemark(request: ConfigInstanceRemarkRequest): Promise<ConfigInstanceRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceRemarkWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of a hardware security module (HSM).
   * 
   * @remarks
   * You can configure the IP address whitelist for HSMs that are not added to a cluster and are in the ACTIVE state.
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
   * Modifies the IP address whitelist of a hardware security module (HSM).
   * 
   * @remarks
   * You can configure the IP address whitelist for HSMs that are not added to a cluster and are in the ACTIVE state.
   * 
   * @param request - ConfigInstanceWhitelistRequest
   * @returns ConfigInstanceWhitelistResponse
   */
  async configInstanceWhitelist(request: ConfigInstanceWhitelistRequest): Promise<ConfigInstanceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceWhitelistWithOptions(request, runtime);
  }

  /**
   * Copies an image to another region.
   * 
   * @remarks
   * This operation requires that the destination region does not have the same image. This operation is available only for hardware security modules (HSMs) outside the Chinese mainland.
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
   * Copies an image to another region.
   * 
   * @remarks
   * This operation requires that the destination region does not have the same image. This operation is available only for hardware security modules (HSMs) outside the Chinese mainland.
   * 
   * @param request - CopyImageRequest
   * @returns CopyImageResponse
   */
  async copyImage(request: CopyImageRequest): Promise<CopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyImageWithOptions(request, runtime);
  }

  /**
   * Creates a cluster by specifying a hardware security module (HSM) as the master HSM.
   * 
   * @remarks
   * The master HSM that you specify to create a cluster must be in the ACTIVE state.
   * 
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
   * Creates a cluster by specifying a hardware security module (HSM) as the master HSM.
   * 
   * @remarks
   * The master HSM that you specify to create a cluster must be in the ACTIVE state.
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can delete an HSM only if the cluster does not contain HSMs.
   * 
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
   * Deletes a hardware security module (HSM) cluster.
   * 
   * @remarks
   * You can delete an HSM only if the cluster does not contain HSMs.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Queries the regions that are supported by Cloud Hardware Security Module.
   * 
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
   * Queries the regions that are supported by Cloud Hardware Security Module.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Binds a backup to a specified hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for backups in the Chinese mainland.
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
   * Binds a backup to a specified hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for backups in the Chinese mainland.
   * 
   * @param request - EnableBackupRequest
   * @returns EnableBackupResponse
   */
  async enableBackup(request: EnableBackupRequest): Promise<EnableBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableBackupWithOptions(request, runtime);
  }

  /**
   * Exports the image for a specified hardware security module (HSM).
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
   * Exports the image for a specified hardware security module (HSM).
   * 
   * @param request - ExportImageRequest
   * @returns ExportImageResponse
   */
  async exportImage(request: ExportImageRequest): Promise<ExportImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  /**
   * Queries the status of the audit log feature in the current region.
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
   * Queries the status of the audit log feature in the current region.
   * 
   * @param request - GetAuditLogStatusRequest
   * @returns GetAuditLogStatusResponse
   */
  async getAuditLogStatus(request: GetAuditLogStatusRequest): Promise<GetAuditLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditLogStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about a specified backup.
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
   * Queries the information about a specified backup.
   * 
   * @param request - GetBackupRequest
   * @returns GetBackupResponse
   */
  async getBackup(request: GetBackupRequest): Promise<GetBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupWithOptions(request, runtime);
  }

  /**
   * Queries information about a specified cluster.
   * 
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
   * Queries information about a specified cluster.
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * Queries information about an image.
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
   * Queries information about an image.
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
   * Queries information about a specified hardware security module (HSM).
   * 
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
   * Queries information about a specified hardware security module (HSM).
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of an asynchronous task.
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
   * Queries the details of an asynchronous task.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * Authorizes Cloud Hardware Security Module to deliver logs.
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
   * Authorizes Cloud Hardware Security Module to deliver logs.
   * @returns InitializeAuditLogResponse
   */
  async initializeAuditLog(): Promise<InitializeAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeAuditLogWithOptions(runtime);
  }

  /**
   * Initializes a cluster.
   * 
   * @remarks
   *   The cluster is not initialized, but the master hardware security module (HSM) of the cluster is initialized.
   * *   Two or more vSwitches are configured for the cluster.
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
   * Initializes a cluster.
   * 
   * @remarks
   *   The cluster is not initialized, but the master hardware security module (HSM) of the cluster is initialized.
   * *   Two or more vSwitches are configured for the cluster.
   * 
   * @param request - InitializeClusterRequest
   * @returns InitializeClusterResponse
   */
  async initializeCluster(request: InitializeClusterRequest): Promise<InitializeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeClusterWithOptions(request, runtime);
  }

  /**
   * Adds a hardware security module (HSM) to the current cluster.
   * 
   * @remarks
   *   You can add the HSM to only the cluster that is in the INITIALIZED state.
   * *   The HSM that you want to add to the cluster is enabled or disabled and is not initialized.
   * 
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
   * Adds a hardware security module (HSM) to the current cluster.
   * 
   * @remarks
   *   You can add the HSM to only the cluster that is in the INITIALIZED state.
   * *   The HSM that you want to add to the cluster is enabled or disabled and is not initialized.
   * 
   * @param request - JoinClusterRequest
   * @returns JoinClusterResponse
   */
  async joinCluster(request: JoinClusterRequest): Promise<JoinClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinClusterWithOptions(request, runtime);
  }

  /**
   * Removes a hardware security module (HSM) from the current cluster.
   * 
   * @remarks
   *   If non-master HSMs exist in a cluster, the master HSM cannot be removed from the cluster.
   * *   After the master HSM is removed from a cluster, the cluster enters the TO_DELETE state and cannot be restored to the available state. Proceed with caution.
   * 
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
   * Removes a hardware security module (HSM) from the current cluster.
   * 
   * @remarks
   *   If non-master HSMs exist in a cluster, the master HSM cannot be removed from the cluster.
   * *   After the master HSM is removed from a cluster, the cluster enters the TO_DELETE state and cannot be restored to the available state. Proceed with caution.
   * 
   * @param request - LeaveClusterRequest
   * @returns LeaveClusterResponse
   */
  async leaveCluster(request: LeaveClusterRequest): Promise<LeaveClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.leaveClusterWithOptions(request, runtime);
  }

  /**
   * Queries the backups that meet the query conditions.
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
   * Queries the backups that meet the query conditions.
   * 
   * @param request - ListBackupsRequest
   * @returns ListBackupsResponse
   */
  async listBackups(request: ListBackupsRequest): Promise<ListBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the clusters that meet the query conditions.
   * 
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
   * Queries the clusters that meet the query conditions.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Queries the images that meet the specified conditions.
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
   * Queries the images that meet the specified conditions.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * Queries the hardware security modules (HSMs) that meet the query conditions.
   * 
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

    if (!Util.isUnset(request.tenantIsolationType)) {
      body["TenantIsolationType"] = request.tenantIsolationType;
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
   * Queries the hardware security modules (HSMs) that meet the query conditions.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Moves a resource to a new resource group.
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
   * Moves a resource to a new resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Disables a hardware security module (HSM).
   * 
   * @remarks
   * After you disable an HSM, the relevant service operations fail. Proceed with caution.
   * 
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
   * Disables a hardware security module (HSM).
   * 
   * @remarks
   * After you disable an HSM, the relevant service operations fail. Proceed with caution.
   * 
   * @param request - PauseInstanceRequest
   * @returns PauseInstanceResponse
   */
  async pauseInstance(request: PauseInstanceRequest): Promise<PauseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseInstanceWithOptions(request, runtime);
  }

  /**
   * Initializes a hardware security module (HSM).
   * 
   * @remarks
   * This operation is supported only for general virtual security modules (GVSMs) in the Chinese mainland.
   * 
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
   * Initializes a hardware security module (HSM).
   * 
   * @remarks
   * This operation is supported only for general virtual security modules (GVSMs) in the Chinese mainland.
   * 
   * @param request - QuickInitInstanceRequest
   * @returns QuickInitInstanceResponse
   */
  async quickInitInstance(request: QuickInitInstanceRequest): Promise<QuickInitInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.quickInitInstanceWithOptions(request, runtime);
  }

  /**
   * Disassociates a backup from a hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for HSMs in the Chinese mainland.
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
   * Disassociates a backup from a hardware security module (HSM).
   * 
   * @remarks
   * This operation is available only for HSMs in the Chinese mainland.
   * 
   * @param request - ResetBackupRequest
   * @returns ResetBackupResponse
   */
  async resetBackup(request: ResetBackupRequest): Promise<ResetBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetBackupWithOptions(request, runtime);
  }

  /**
   * Resets a hardware security module (HSM).
   * 
   * @remarks
   * After an HSM is reset, all related data is deleted and cannot be recovered. Proceed with caution.
   * 
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
   * Resets a hardware security module (HSM).
   * 
   * @remarks
   * After an HSM is reset, all related data is deleted and cannot be recovered. Proceed with caution.
   * 
   * @param request - ResetInstanceRequest
   * @returns ResetInstanceResponse
   */
  async resetInstance(request: ResetInstanceRequest): Promise<ResetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetInstanceWithOptions(request, runtime);
  }

  /**
   * Restores a hardware security module (HSM) by using an image.
   * 
   * @remarks
   * You can use images to restore only HSMs that are paused or disabled.
   * 
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
   * Restores a hardware security module (HSM) by using an image.
   * 
   * @remarks
   * You can use images to restore only HSMs that are paused or disabled.
   * 
   * @param request - RestoreInstanceRequest
   * @returns RestoreInstanceResponse
   */
  async restoreInstance(request: RestoreInstanceRequest): Promise<RestoreInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreInstanceWithOptions(request, runtime);
  }

  /**
   * Resumes a disabled hardware security module (HSM).
   * 
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
   * Resumes a disabled hardware security module (HSM).
   * 
   * @param request - ResumeInstanceRequest
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(request: ResumeInstanceRequest): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  /**
   * Promotes a non-master hardware security module (HSM) in a cluster to the master HSM.
   * 
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
   * Promotes a non-master hardware security module (HSM) in a cluster to the master HSM.
   * 
   * @param request - SwitchClusterMasterRequest
   * @returns SwitchClusterMasterResponse
   */
  async switchClusterMaster(request: SwitchClusterMasterRequest): Promise<SwitchClusterMasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchClusterMasterWithOptions(request, runtime);
  }

  /**
   * Synchronizes the data of hardware security modules (HSMs) in a cluster.
   * 
   * @remarks
   *   This operation is supported only for hardware security modules (HSMs) that are created in regions in the Chinese mainland.
   * *   The time required to synchronize the data is approximately 5 minutes. We recommend that you synchronize data during off-peak hours to prevent service interruptions.
   * 
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
   * Synchronizes the data of hardware security modules (HSMs) in a cluster.
   * 
   * @remarks
   *   This operation is supported only for hardware security modules (HSMs) that are created in regions in the Chinese mainland.
   * *   The time required to synchronize the data is approximately 5 minutes. We recommend that you synchronize data during off-peak hours to prevent service interruptions.
   * 
   * @param request - SyncClusterRequest
   * @returns SyncClusterResponse
   */
  async syncCluster(request: SyncClusterRequest): Promise<SyncClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncClusterWithOptions(request, runtime);
  }

}
