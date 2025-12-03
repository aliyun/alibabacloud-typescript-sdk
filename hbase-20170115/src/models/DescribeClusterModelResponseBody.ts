// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterModelResponseBodyTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterModelResponseBodyTags extends $dara.Model {
  tag?: DescribeClusterModelResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeClusterModelResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterModelResponseBody extends $dara.Model {
  autoRenew?: string;
  backupStatus?: string;
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  coldStorageStatus?: string;
  coreDiskQuantity?: number;
  coreDiskSize?: string;
  coreDiskType?: string;
  coreInstanceQuantity?: number;
  coreInstanceType?: string;
  createTime?: string;
  dbType?: string;
  expireTime?: string;
  haType?: string;
  hasUser?: string;
  isMultimod?: string;
  lockMode?: string;
  mainVersion?: string;
  masterDiskSize?: number;
  masterDiskType?: string;
  masterInstanceType?: string;
  minorVersion?: string;
  payType?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
  tags?: DescribeClusterModelResponseBodyTags;
  updateStatus?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      backupStatus: 'BackupStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coldStorageStatus: 'ColdStorageStatus',
      coreDiskQuantity: 'CoreDiskQuantity',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceQuantity: 'CoreInstanceQuantity',
      coreInstanceType: 'CoreInstanceType',
      createTime: 'CreateTime',
      dbType: 'DbType',
      expireTime: 'ExpireTime',
      haType: 'HaType',
      hasUser: 'HasUser',
      isMultimod: 'IsMultimod',
      lockMode: 'LockMode',
      mainVersion: 'MainVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      minorVersion: 'MinorVersion',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      tags: 'Tags',
      updateStatus: 'UpdateStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      backupStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coldStorageStatus: 'string',
      coreDiskQuantity: 'number',
      coreDiskSize: 'string',
      coreDiskType: 'string',
      coreInstanceQuantity: 'number',
      coreInstanceType: 'string',
      createTime: 'string',
      dbType: 'string',
      expireTime: 'string',
      haType: 'string',
      hasUser: 'string',
      isMultimod: 'string',
      lockMode: 'string',
      mainVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      minorVersion: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      tags: DescribeClusterModelResponseBodyTags,
      updateStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

