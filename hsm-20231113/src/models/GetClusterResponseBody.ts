// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyClusterInstances extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyClusterZones extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyCluster extends $dara.Model {
  certManaged?: boolean;
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
  /**
   * @remarks
   * The cluster mode.
   * 
   * 2: automatically synchronizes the cluster.
   * 
   * @example
   * 2
   */
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
  entityCertExpireTime?: string;
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
      certManaged: 'CertManaged',
      clusterCertificate: 'ClusterCertificate',
      clusterCsr: 'ClusterCsr',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterName: 'ClusterName',
      clusterOwnerCertificate: 'ClusterOwnerCertificate',
      createTime: 'CreateTime',
      deviceType: 'DeviceType',
      entityCertExpireTime: 'EntityCertExpireTime',
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
      certManaged: 'boolean',
      clusterCertificate: 'string',
      clusterCsr: 'string',
      clusterId: 'string',
      clusterMode: 'number',
      clusterName: 'string',
      clusterOwnerCertificate: 'string',
      createTime: 'number',
      deviceType: 'string',
      entityCertExpireTime: 'string',
      instances: { 'type': 'array', 'itemType': GetClusterResponseBodyClusterInstances },
      regionId: 'string',
      size: 'number',
      status: 'string',
      vpcId: 'string',
      whitelist: 'string',
      zones: { 'type': 'array', 'itemType': GetClusterResponseBodyClusterZones },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster details.
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

  validate() {
    if(this.cluster && typeof (this.cluster as any).validate === 'function') {
      (this.cluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

