// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import SPI from '@alicloud/gateway-spi';
import GatewayClient from '@alicloud/gateway-oss';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class AccessControlList extends $tea.Model {
  grant?: string;
  static names(): { [key: string]: string } {
    return {
      grant: 'Grant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grant: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessControlPolicy extends $tea.Model {
  accessControlList?: AccessControlList;
  owner?: Owner;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'AccessControlList',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: AccessControlList,
      owner: Owner,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessMonitorConfiguration extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPoint extends $tea.Model {
  accessPointName?: string;
  alias?: string;
  bucket?: string;
  networkOrigin?: string;
  status?: string;
  vpcConfiguration?: AccessPointVpcConfiguration;
  static names(): { [key: string]: string } {
    return {
      accessPointName: 'AccessPointName',
      alias: 'Alias',
      bucket: 'Bucket',
      networkOrigin: 'NetworkOrigin',
      status: 'Status',
      vpcConfiguration: 'VpcConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointName: 'string',
      alias: 'string',
      bucket: 'string',
      networkOrigin: 'string',
      status: 'string',
      vpcConfiguration: AccessPointVpcConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPointVpcConfiguration extends $tea.Model {
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyServerSideEncryptionByDefault extends $tea.Model {
  KMSDataEncryption?: string;
  KMSMasterKeyID?: string;
  SSEAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      KMSDataEncryption: 'KMSDataEncryption',
      KMSMasterKeyID: 'KMSMasterKeyID',
      SSEAlgorithm: 'SSEAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KMSDataEncryption: 'string',
      KMSMasterKeyID: 'string',
      SSEAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Bucket extends $tea.Model {
  creationDate?: string;
  extranetEndpoint?: string;
  intranetEndpoint?: string;
  location?: string;
  name?: string;
  region?: string;
  resourceGroupId?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      extranetEndpoint: 'ExtranetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      location: 'Location',
      name: 'Name',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      extranetEndpoint: 'string',
      intranetEndpoint: 'string',
      location: 'string',
      name: 'string',
      region: 'string',
      resourceGroupId: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketAntiDDOSConfiguration extends $tea.Model {
  cnames?: BucketAntiDDOSConfigurationCnames;
  static names(): { [key: string]: string } {
    return {
      cnames: 'Cnames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnames: BucketAntiDDOSConfigurationCnames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketAntiDDOSInfo extends $tea.Model {
  activeTime?: number;
  bucket?: string;
  cnames?: BucketAntiDDOSInfoCnames;
  ctime?: number;
  instanceId?: string;
  mtime?: number;
  owner?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      bucket: 'Bucket',
      cnames: 'Cnames',
      ctime: 'Ctime',
      instanceId: 'InstanceId',
      mtime: 'Mtime',
      owner: 'Owner',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'number',
      bucket: 'string',
      cnames: BucketAntiDDOSInfoCnames,
      ctime: 'number',
      instanceId: 'string',
      mtime: 'number',
      owner: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketCnameConfiguration extends $tea.Model {
  cname?: BucketCnameConfigurationCname;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: BucketCnameConfigurationCname,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketInfo extends $tea.Model {
  bucket?: BucketInfoBucket;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: BucketInfoBucket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketLoggingStatus extends $tea.Model {
  loggingEnabled?: LoggingEnabled;
  static names(): { [key: string]: string } {
    return {
      loggingEnabled: 'LoggingEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggingEnabled: LoggingEnabled,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketResourceGroupConfiguration extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketStat extends $tea.Model {
  archiveObjectCount?: number;
  archiveRealStorage?: number;
  archiveStorage?: number;
  coldArchiveObjectCount?: number;
  coldArchiveRealStorage?: number;
  coldArchiveStorage?: number;
  infrequentAccessObjectCount?: number;
  infrequentAccessRealStorage?: number;
  infrequentAccessStorage?: number;
  lastModifiedTime?: number;
  liveChannelCount?: number;
  multipartUploadCount?: number;
  objectCount?: number;
  standardObjectCount?: number;
  standardStorage?: number;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      archiveObjectCount: 'ArchiveObjectCount',
      archiveRealStorage: 'ArchiveRealStorage',
      archiveStorage: 'ArchiveStorage',
      coldArchiveObjectCount: 'ColdArchiveObjectCount',
      coldArchiveRealStorage: 'ColdArchiveRealStorage',
      coldArchiveStorage: 'ColdArchiveStorage',
      infrequentAccessObjectCount: 'InfrequentAccessObjectCount',
      infrequentAccessRealStorage: 'InfrequentAccessRealStorage',
      infrequentAccessStorage: 'InfrequentAccessStorage',
      lastModifiedTime: 'LastModifiedTime',
      liveChannelCount: 'LiveChannelCount',
      multipartUploadCount: 'MultipartUploadCount',
      objectCount: 'ObjectCount',
      standardObjectCount: 'StandardObjectCount',
      standardStorage: 'StandardStorage',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveObjectCount: 'number',
      archiveRealStorage: 'number',
      archiveStorage: 'number',
      coldArchiveObjectCount: 'number',
      coldArchiveRealStorage: 'number',
      coldArchiveStorage: 'number',
      infrequentAccessObjectCount: 'number',
      infrequentAccessRealStorage: 'number',
      infrequentAccessStorage: 'number',
      lastModifiedTime: 'number',
      liveChannelCount: 'number',
      multipartUploadCount: 'number',
      objectCount: 'number',
      standardObjectCount: 'number',
      standardStorage: 'number',
      storage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CORSConfiguration extends $tea.Model {
  CORSRule?: CORSRule[];
  responseVary?: boolean;
  static names(): { [key: string]: string } {
    return {
      CORSRule: 'CORSRule',
      responseVary: 'ResponseVary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CORSRule: { 'type': 'array', 'itemType': CORSRule },
      responseVary: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CORSRule extends $tea.Model {
  allowedHeader?: string;
  allowedMethod?: string[];
  allowedOrigin?: string[];
  exposeHeader?: string[];
  maxAgeSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      allowedHeader: 'AllowedHeader',
      allowedMethod: 'AllowedMethod',
      allowedOrigin: 'AllowedOrigin',
      exposeHeader: 'ExposeHeader',
      maxAgeSeconds: 'MaxAgeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedHeader: 'string',
      allowedMethod: { 'type': 'array', 'itemType': 'string' },
      allowedOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeader: { 'type': 'array', 'itemType': 'string' },
      maxAgeSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CSVInput extends $tea.Model {
  allowQuotedRecordDelimiter?: boolean;
  commentCharacter?: string;
  fieldDelimiter?: string;
  fileHeaderInfo?: string;
  quoteCharacter?: string;
  range?: string;
  recordDelimiter?: string;
  static names(): { [key: string]: string } {
    return {
      allowQuotedRecordDelimiter: 'AllowQuotedRecordDelimiter',
      commentCharacter: 'CommentCharacter',
      fieldDelimiter: 'FieldDelimiter',
      fileHeaderInfo: 'FileHeaderInfo',
      quoteCharacter: 'QuoteCharacter',
      range: 'Range',
      recordDelimiter: 'RecordDelimiter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowQuotedRecordDelimiter: 'boolean',
      commentCharacter: 'string',
      fieldDelimiter: 'string',
      fileHeaderInfo: 'string',
      quoteCharacter: 'string',
      range: 'string',
      recordDelimiter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CSVOutput extends $tea.Model {
  fieldDelimiter?: string;
  recordDelimiter?: string;
  static names(): { [key: string]: string } {
    return {
      fieldDelimiter: 'FieldDelimiter',
      recordDelimiter: 'RecordDelimiter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldDelimiter: 'string',
      recordDelimiter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CnameCertificate extends $tea.Model {
  certId?: string;
  creationDate?: string;
  fingerprint?: string;
  status?: string;
  type?: string;
  validEndDate?: string;
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      creationDate: 'CreationDate',
      fingerprint: 'Fingerprint',
      status: 'Status',
      type: 'Type',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      creationDate: 'string',
      fingerprint: 'string',
      status: 'string',
      type: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CnameInfo extends $tea.Model {
  certificate?: CnameCertificate;
  domain?: string;
  lastModified?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      domain: 'Domain',
      lastModified: 'LastModified',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: CnameCertificate,
      domain: 'string',
      lastModified: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CnameSummary extends $tea.Model {
  certificate?: CnameCertificate;
  domain?: string;
  lastModified?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      domain: 'Domain',
      lastModified: 'LastModified',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: CnameCertificate,
      domain: 'string',
      lastModified: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CnameToken extends $tea.Model {
  bucket?: string;
  cname?: string;
  expireTime?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      cname: 'Cname',
      expireTime: 'ExpireTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      cname: 'string',
      expireTime: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonPrefix extends $tea.Model {
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteMultipartUpload extends $tea.Model {
  part?: Part[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': Part },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyObjectResult extends $tea.Model {
  ETag?: string;
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      lastModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPartResult extends $tea.Model {
  ETag?: string;
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      lastModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPointConfiguration extends $tea.Model {
  accessPointName?: string;
  networkOrigin?: string;
  vpcConfiguration?: AccessPointVpcConfiguration;
  static names(): { [key: string]: string } {
    return {
      accessPointName: 'AccessPointName',
      networkOrigin: 'NetworkOrigin',
      vpcConfiguration: 'VpcConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointName: 'string',
      networkOrigin: 'string',
      vpcConfiguration: AccessPointVpcConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPointResult extends $tea.Model {
  accessPointArn?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointArn: 'AccessPointArn',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointArn: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBucketConfiguration extends $tea.Model {
  dataRedundancyType?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      dataRedundancyType: 'DataRedundancyType',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRedundancyType: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Delete extends $tea.Model {
  objects?: ObjectIdentifier[];
  quiet?: boolean;
  static names(): { [key: string]: string } {
    return {
      objects: 'Object',
      quiet: 'Quiet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objects: { 'type': 'array', 'itemType': ObjectIdentifier },
      quiet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMarkerEntry extends $tea.Model {
  isLatest?: boolean;
  key?: string;
  lastModified?: string;
  owner?: Owner;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      isLatest: 'IsLatest',
      key: 'Key',
      lastModified: 'LastModified',
      owner: 'Owner',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLatest: 'boolean',
      key: 'string',
      lastModified: 'string',
      owner: Owner,
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletedObject extends $tea.Model {
  deleteMarker?: boolean;
  deleteMarkerVersionId?: string;
  key?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMarker: 'DeleteMarker',
      deleteMarkerVersionId: 'DeleteMarkerVersionId',
      key: 'Key',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMarker: 'boolean',
      deleteMarkerVersionId: 'string',
      key: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Error extends $tea.Model {
  code?: string;
  hostId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostId: 'HostId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErrorDocument extends $tea.Model {
  httpStatus?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatus: 'HttpStatus',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatus: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendWormConfiguration extends $tea.Model {
  retentionPeriodInDays?: number;
  static names(): { [key: string]: string } {
    return {
      retentionPeriodInDays: 'RetentionPeriodInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retentionPeriodInDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessPointResult extends $tea.Model {
  accessPointArn?: string;
  accessPointName?: string;
  accountId?: string;
  alias?: string;
  bucket?: string;
  endpoints?: GetAccessPointResultEndpoints;
  internalEndpoint?: string;
  networkOrigin?: string;
  status?: string;
  vpcConfiguration?: AccessPointVpcConfiguration;
  static names(): { [key: string]: string } {
    return {
      accessPointArn: 'AccessPointArn',
      accessPointName: 'AccessPointName',
      accountId: 'AccountId',
      alias: 'Alias',
      bucket: 'Bucket',
      endpoints: 'Endpoints',
      internalEndpoint: 'InternalEndpoint',
      networkOrigin: 'NetworkOrigin',
      status: 'Status',
      vpcConfiguration: 'VpcConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointArn: 'string',
      accessPointName: 'string',
      accountId: 'string',
      alias: 'string',
      bucket: 'string',
      endpoints: GetAccessPointResultEndpoints,
      internalEndpoint: 'string',
      networkOrigin: 'string',
      status: 'string',
      vpcConfiguration: AccessPointVpcConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexDocument extends $tea.Model {
  suffix?: string;
  supportSubDir?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      suffix: 'Suffix',
      supportSubDir: 'SupportSubDir',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suffix: 'string',
      supportSubDir: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateWormConfiguration extends $tea.Model {
  retentionPeriodInDays?: number;
  static names(): { [key: string]: string } {
    return {
      retentionPeriodInDays: 'RetentionPeriodInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retentionPeriodInDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputSerialization extends $tea.Model {
  csv?: CSVInput;
  compressionType?: string;
  json?: JSONInput;
  static names(): { [key: string]: string } {
    return {
      csv: 'CSV',
      compressionType: 'CompressionType',
      json: 'JSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csv: CSVInput,
      compressionType: 'string',
      json: JSONInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InventoryConfiguration extends $tea.Model {
  destination?: InventoryDestination;
  filter?: InventoryFilter;
  id?: string;
  includedObjectVersions?: string;
  isEnabled?: boolean;
  optionalFields?: InventoryConfigurationOptionalFields;
  schedule?: InventorySchedule;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      filter: 'Filter',
      id: 'Id',
      includedObjectVersions: 'IncludedObjectVersions',
      isEnabled: 'IsEnabled',
      optionalFields: 'OptionalFields',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: InventoryDestination,
      filter: InventoryFilter,
      id: 'string',
      includedObjectVersions: 'string',
      isEnabled: 'boolean',
      optionalFields: InventoryConfigurationOptionalFields,
      schedule: InventorySchedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InventoryDestination extends $tea.Model {
  OSSBucketDestination?: InventoryOSSBucketDestination;
  static names(): { [key: string]: string } {
    return {
      OSSBucketDestination: 'OSSBucketDestination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucketDestination: InventoryOSSBucketDestination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InventoryEncryption extends $tea.Model {
  SSEKMS?: SSEKMS;
  SSEOSS?: SSEOSS;
  static names(): { [key: string]: string } {
    return {
      SSEKMS: 'SSE-KMS',
      SSEOSS: 'SSE-OSS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSEKMS: SSEKMS,
      SSEOSS: SSEOSS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InventoryFilter extends $tea.Model {
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InventoryOSSBucketDestination extends $tea.Model {
  accountId?: string;
  bucket?: string;
  encryption?: InventoryEncryption;
  format?: string;
  prefix?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bucket: 'Bucket',
      encryption: 'Encryption',
      format: 'Format',
      prefix: 'Prefix',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bucket: 'string',
      encryption: InventoryEncryption,
      format: 'string',
      prefix: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InventorySchedule extends $tea.Model {
  frequency?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JSONInput extends $tea.Model {
  parseJsonNumberAsString?: boolean;
  range?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parseJsonNumberAsString: 'ParseJsonNumberAsString',
      range: 'Range',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parseJsonNumberAsString: 'boolean',
      range: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JSONOutput extends $tea.Model {
  recordDelimiter?: string;
  static names(): { [key: string]: string } {
    return {
      recordDelimiter: 'RecordDelimiter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDelimiter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleConfiguration extends $tea.Model {
  rule?: LifecycleRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': LifecycleRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRule extends $tea.Model {
  lifecycleAbortMultipartUpload?: LifecycleRuleLifecycleAbortMultipartUpload;
  lifecycleExpiration?: LifecycleRuleLifecycleExpiration;
  filter?: LifecycleRuleFilter;
  ID?: string;
  noncurrentVersionExpiration?: LifecycleRuleNoncurrentVersionExpiration;
  noncurrentVersionTransition?: LifecycleRuleNoncurrentVersionTransition[];
  prefix?: string;
  status?: string;
  tag?: Tag[];
  lifecycleTransition?: LifecycleRuleLifecycleTransition[];
  static names(): { [key: string]: string } {
    return {
      lifecycleAbortMultipartUpload: 'AbortMultipartUpload',
      lifecycleExpiration: 'Expiration',
      filter: 'Filter',
      ID: 'ID',
      noncurrentVersionExpiration: 'NoncurrentVersionExpiration',
      noncurrentVersionTransition: 'NoncurrentVersionTransition',
      prefix: 'Prefix',
      status: 'Status',
      tag: 'Tag',
      lifecycleTransition: 'Transition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleAbortMultipartUpload: LifecycleRuleLifecycleAbortMultipartUpload,
      lifecycleExpiration: LifecycleRuleLifecycleExpiration,
      filter: LifecycleRuleFilter,
      ID: 'string',
      noncurrentVersionExpiration: LifecycleRuleNoncurrentVersionExpiration,
      noncurrentVersionTransition: { 'type': 'array', 'itemType': LifecycleRuleNoncurrentVersionTransition },
      prefix: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': Tag },
      lifecycleTransition: { 'type': 'array', 'itemType': LifecycleRuleLifecycleTransition },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResult extends $tea.Model {
  accessPoints?: AccessPoint[];
  accountId?: string;
  isTruncated?: string;
  nextContinuationToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessPoints: 'AccessPoints',
      accountId: 'AccountId',
      isTruncated: 'IsTruncated',
      nextContinuationToken: 'NextContinuationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoints: { 'type': 'array', 'itemType': AccessPoint },
      accountId: 'string',
      isTruncated: 'string',
      nextContinuationToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannel extends $tea.Model {
  description?: string;
  lastModified?: string;
  name?: string;
  playUrls?: LiveChannelPlayUrls;
  publishUrls?: LiveChannelPublishUrls;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      lastModified: 'LastModified',
      name: 'Name',
      playUrls: 'PlayUrls',
      publishUrls: 'PublishUrls',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      lastModified: 'string',
      name: 'string',
      playUrls: LiveChannelPlayUrls,
      publishUrls: LiveChannelPublishUrls,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannelAudio extends $tea.Model {
  bandwidth?: number;
  codec?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      codec: 'Codec',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      codec: 'string',
      sampleRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannelConfiguration extends $tea.Model {
  description?: string;
  snapshot?: LiveChannelSnapshot;
  status?: string;
  target?: LiveChannelTarget;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      snapshot: 'Snapshot',
      status: 'Status',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      snapshot: LiveChannelSnapshot,
      status: 'string',
      target: LiveChannelTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannelPlayUrls extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannelPublishUrls extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannelSnapshot extends $tea.Model {
  destBucket?: string;
  interval?: number;
  notifyTopic?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      destBucket: 'DestBucket',
      interval: 'Interval',
      notifyTopic: 'NotifyTopic',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destBucket: 'string',
      interval: 'number',
      notifyTopic: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannelTarget extends $tea.Model {
  fragCount?: number;
  fragDuration?: number;
  playlistName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fragCount: 'FragCount',
      fragDuration: 'FragDuration',
      playlistName: 'PlaylistName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fragCount: 'number',
      fragDuration: 'number',
      playlistName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveChannelVideo extends $tea.Model {
  bandwidth?: number;
  codec?: string;
  frameRate?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      codec: 'Codec',
      frameRate: 'FrameRate',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      codec: 'string',
      frameRate: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveRecord extends $tea.Model {
  endTime?: string;
  remoteAddr?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      remoteAddr: 'RemoteAddr',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      remoteAddr: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocationTransferType extends $tea.Model {
  location?: string;
  transferTypes?: LocationTransferTypeTransferTypes;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      transferTypes: 'TransferTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      transferTypes: LocationTransferTypeTransferTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoggingEnabled extends $tea.Model {
  targetBucket?: string;
  targetPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      targetBucket: 'TargetBucket',
      targetPrefix: 'TargetPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetBucket: 'string',
      targetPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQuery extends $tea.Model {
  aggregations?: MetaQueryAggregations;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  query?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'Aggregations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      query: 'Query',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: MetaQueryAggregations,
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      query: 'string',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQueryAggregation extends $tea.Model {
  field?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQueryFile extends $tea.Model {
  ETag?: string;
  fileModifiedTime?: string;
  filename?: string;
  OSSCRC64?: string;
  OSSObjectType?: string;
  OSSStorageClass?: string;
  OSSTagging?: MetaQueryFileOSSTagging;
  OSSTaggingCount?: number;
  OSSUserMeta?: MetaQueryFileOSSUserMeta;
  objectACL?: string;
  serverSideEncryption?: string;
  serverSideEncryptionCustomerAlgorithm?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      fileModifiedTime: 'FileModifiedTime',
      filename: 'Filename',
      OSSCRC64: 'OSSCRC64',
      OSSObjectType: 'OSSObjectType',
      OSSStorageClass: 'OSSStorageClass',
      OSSTagging: 'OSSTagging',
      OSSTaggingCount: 'OSSTaggingCount',
      OSSUserMeta: 'OSSUserMeta',
      objectACL: 'ObjectACL',
      serverSideEncryption: 'ServerSideEncryption',
      serverSideEncryptionCustomerAlgorithm: 'ServerSideEncryptionCustomerAlgorithm',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      fileModifiedTime: 'string',
      filename: 'string',
      OSSCRC64: 'string',
      OSSObjectType: 'string',
      OSSStorageClass: 'string',
      OSSTagging: MetaQueryFileOSSTagging,
      OSSTaggingCount: 'number',
      OSSUserMeta: MetaQueryFileOSSUserMeta,
      objectACL: 'string',
      serverSideEncryption: 'string',
      serverSideEncryptionCustomerAlgorithm: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQueryTagging extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQueryUserMeta extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObjectIdentifier extends $tea.Model {
  key?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObjectSummary extends $tea.Model {
  ETag?: string;
  key?: string;
  lastModified?: string;
  owner?: Owner;
  resoreInfo?: string;
  size?: number;
  storageClass?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      key: 'Key',
      lastModified: 'LastModified',
      owner: 'Owner',
      resoreInfo: 'ResoreInfo',
      size: 'Size',
      storageClass: 'StorageClass',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      key: 'string',
      lastModified: 'string',
      owner: Owner,
      resoreInfo: 'string',
      size: 'number',
      storageClass: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObjectVersion extends $tea.Model {
  ETag?: string;
  isLatest?: boolean;
  key?: string;
  lastModified?: string;
  owner?: Owner;
  size?: number;
  storageClass?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      isLatest: 'IsLatest',
      key: 'Key',
      lastModified: 'LastModified',
      owner: 'Owner',
      size: 'Size',
      storageClass: 'StorageClass',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      isLatest: 'boolean',
      key: 'string',
      lastModified: 'string',
      owner: Owner,
      size: 'number',
      storageClass: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OutputSerialization extends $tea.Model {
  csv?: CSVOutput;
  enablePayloadCrc?: boolean;
  json?: JSONOutput;
  keepAllColumns?: boolean;
  outputHeader?: boolean;
  outputRawData?: boolean;
  static names(): { [key: string]: string } {
    return {
      csv: 'CSV',
      enablePayloadCrc: 'EnablePayloadCrc',
      json: 'JSON',
      keepAllColumns: 'KeepAllColumns',
      outputHeader: 'OutputHeader',
      outputRawData: 'OutputRawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csv: CSVOutput,
      enablePayloadCrc: 'boolean',
      json: JSONOutput,
      keepAllColumns: 'boolean',
      outputHeader: 'boolean',
      outputRawData: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Owner extends $tea.Model {
  displayName?: string;
  ID?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      ID: 'ID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      ID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Part extends $tea.Model {
  ETag?: string;
  lastModified?: string;
  partNumber?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      lastModified: 'LastModified',
      partNumber: 'PartNumber',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      lastModified: 'string',
      partNumber: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RTC extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefererConfiguration extends $tea.Model {
  allowEmptyReferer?: boolean;
  allowTruncateQueryString?: boolean;
  refererList?: RefererConfigurationRefererList;
  truncatePath?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowEmptyReferer: 'AllowEmptyReferer',
      allowTruncateQueryString: 'AllowTruncateQueryString',
      refererList: 'RefererList',
      truncatePath: 'TruncatePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowEmptyReferer: 'boolean',
      allowTruncateQueryString: 'boolean',
      refererList: RefererConfigurationRefererList,
      truncatePath: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegionInfo extends $tea.Model {
  accelerateEndpoint?: string;
  internalEndpoint?: string;
  internetEndpoint?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateEndpoint: 'AccelerateEndpoint',
      internalEndpoint: 'InternalEndpoint',
      internetEndpoint: 'InternetEndpoint',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateEndpoint: 'string',
      internalEndpoint: 'string',
      internetEndpoint: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationConfiguration extends $tea.Model {
  rule?: ReplicationRule;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: ReplicationRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationDestination extends $tea.Model {
  bucket?: string;
  location?: string;
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      transferType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationPrefixSet extends $tea.Model {
  prefixs?: string[];
  static names(): { [key: string]: string } {
    return {
      prefixs: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationProgressRule extends $tea.Model {
  action?: string;
  destination?: ReplicationDestination;
  historicalObjectReplication?: string;
  ID?: string;
  prefixSet?: ReplicationPrefixSet;
  progress?: ReplicationProgressRuleProgress;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      destination: 'Destination',
      historicalObjectReplication: 'HistoricalObjectReplication',
      ID: 'ID',
      prefixSet: 'PrefixSet',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destination: ReplicationDestination,
      historicalObjectReplication: 'string',
      ID: 'string',
      prefixSet: ReplicationPrefixSet,
      progress: ReplicationProgressRuleProgress,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationRule extends $tea.Model {
  action?: string;
  destination?: ReplicationDestination;
  encryptionConfiguration?: ReplicationRuleEncryptionConfiguration;
  historicalObjectReplication?: string;
  ID?: string;
  prefixSet?: ReplicationPrefixSet;
  sourceSelectionCriteria?: ReplicationSourceSelectionCriteria;
  status?: string;
  syncRole?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      destination: 'Destination',
      encryptionConfiguration: 'EncryptionConfiguration',
      historicalObjectReplication: 'HistoricalObjectReplication',
      ID: 'ID',
      prefixSet: 'PrefixSet',
      sourceSelectionCriteria: 'SourceSelectionCriteria',
      status: 'Status',
      syncRole: 'SyncRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destination: ReplicationDestination,
      encryptionConfiguration: ReplicationRuleEncryptionConfiguration,
      historicalObjectReplication: 'string',
      ID: 'string',
      prefixSet: ReplicationPrefixSet,
      sourceSelectionCriteria: ReplicationSourceSelectionCriteria,
      status: 'string',
      syncRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationRuleProgress extends $tea.Model {
  action?: string;
  ID?: string;
  prefixSet?: ReplicationPrefixSet;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      ID: 'ID',
      prefixSet: 'PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      ID: 'string',
      prefixSet: ReplicationPrefixSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationRules extends $tea.Model {
  ids?: string[];
  static names(): { [key: string]: string } {
    return {
      ids: 'ID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationSourceSelectionCriteria extends $tea.Model {
  sseKmsEncryptedObjects?: ReplicationSourceSelectionCriteriaSseKmsEncryptedObjects;
  static names(): { [key: string]: string } {
    return {
      sseKmsEncryptedObjects: 'SseKmsEncryptedObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sseKmsEncryptedObjects: ReplicationSourceSelectionCriteriaSseKmsEncryptedObjects,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestPaymentConfiguration extends $tea.Model {
  payer?: string;
  static names(): { [key: string]: string } {
    return {
      payer: 'Payer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreRequest extends $tea.Model {
  days?: number;
  jobParameters?: RestoreRequestJobParameters;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      jobParameters: 'JobParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
      jobParameters: RestoreRequestJobParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutingRule extends $tea.Model {
  condition?: RoutingRuleCondition;
  redirect?: RoutingRuleRedirect;
  ruleNumber?: number;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      redirect: 'Redirect',
      ruleNumber: 'RuleNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: RoutingRuleCondition,
      redirect: RoutingRuleRedirect,
      ruleNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutingRuleCondition extends $tea.Model {
  httpErrorCodeReturnedEquals?: number;
  keyPrefixEquals?: string;
  static names(): { [key: string]: string } {
    return {
      httpErrorCodeReturnedEquals: 'HttpErrorCodeReturnedEquals',
      keyPrefixEquals: 'KeyPrefixEquals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpErrorCodeReturnedEquals: 'number',
      keyPrefixEquals: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutingRuleRedirect extends $tea.Model {
  enableReplacePrefix?: boolean;
  hostName?: string;
  httpRedirectCode?: number;
  mirrorCheckMd5?: boolean;
  mirrorFollowRedirect?: boolean;
  mirrorHeaders?: RoutingRuleRedirectMirrorHeaders;
  mirrorPassQueryString?: boolean;
  mirrorURL?: string;
  passQueryString?: boolean;
  protocol?: string;
  redirectType?: string;
  replaceKeyPrefixWith?: string;
  replaceKeyWith?: string;
  transparentMirrorResponseCodes?: string;
  static names(): { [key: string]: string } {
    return {
      enableReplacePrefix: 'EnableReplacePrefix',
      hostName: 'HostName',
      httpRedirectCode: 'HttpRedirectCode',
      mirrorCheckMd5: 'MirrorCheckMd5',
      mirrorFollowRedirect: 'MirrorFollowRedirect',
      mirrorHeaders: 'MirrorHeaders',
      mirrorPassQueryString: 'MirrorPassQueryString',
      mirrorURL: 'MirrorURL',
      passQueryString: 'PassQueryString',
      protocol: 'Protocol',
      redirectType: 'RedirectType',
      replaceKeyPrefixWith: 'ReplaceKeyPrefixWith',
      replaceKeyWith: 'ReplaceKeyWith',
      transparentMirrorResponseCodes: 'TransparentMirrorResponseCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableReplacePrefix: 'boolean',
      hostName: 'string',
      httpRedirectCode: 'number',
      mirrorCheckMd5: 'boolean',
      mirrorFollowRedirect: 'boolean',
      mirrorHeaders: RoutingRuleRedirectMirrorHeaders,
      mirrorPassQueryString: 'boolean',
      mirrorURL: 'string',
      passQueryString: 'boolean',
      protocol: 'string',
      redirectType: 'string',
      replaceKeyPrefixWith: 'string',
      replaceKeyWith: 'string',
      transparentMirrorResponseCodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RtcConfiguration extends $tea.Model {
  ID?: string;
  RTC?: RTC;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      RTC: 'RTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'string',
      RTC: RTC,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SSEKMS extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SSEOSS extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectMetaRequest extends $tea.Model {
  inputSerialization?: InputSerialization;
  overwriteIfExists?: boolean;
  static names(): { [key: string]: string } {
    return {
      inputSerialization: 'InputSerialization',
      overwriteIfExists: 'OverwriteIfExists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputSerialization: InputSerialization,
      overwriteIfExists: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectMetaStatus extends $tea.Model {
  colsCount?: number;
  errorMessage?: string;
  offset?: number;
  rowsCount?: number;
  splitsCount?: number;
  status?: number;
  totalScannedBytes?: number;
  static names(): { [key: string]: string } {
    return {
      colsCount: 'ColsCount',
      errorMessage: 'ErrorMessage',
      offset: 'Offset',
      rowsCount: 'RowsCount',
      splitsCount: 'SplitsCount',
      status: 'Status',
      totalScannedBytes: 'TotalScannedBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colsCount: 'number',
      errorMessage: 'string',
      offset: 'number',
      rowsCount: 'number',
      splitsCount: 'number',
      status: 'number',
      totalScannedBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectRequest extends $tea.Model {
  expression?: string;
  inputSerialization?: InputSerialization;
  options?: SelectRequestOptions;
  outputSerialization?: OutputSerialization;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      inputSerialization: 'InputSerialization',
      options: 'Options',
      outputSerialization: 'OutputSerialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      inputSerialization: InputSerialization,
      options: SelectRequestOptions,
      outputSerialization: OutputSerialization,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectRequestOptions extends $tea.Model {
  maxSkippedRecordsAllowed?: number;
  skipPartialDataRecord?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxSkippedRecordsAllowed: 'MaxSkippedRecordsAllowed',
      skipPartialDataRecord: 'SkipPartialDataRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSkippedRecordsAllowed: 'number',
      skipPartialDataRecord: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServerSideEncryptionRule extends $tea.Model {
  applyServerSideEncryptionByDefault?: ApplyServerSideEncryptionByDefault;
  static names(): { [key: string]: string } {
    return {
      applyServerSideEncryptionByDefault: 'ApplyServerSideEncryptionByDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyServerSideEncryptionByDefault: ApplyServerSideEncryptionByDefault,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Style extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StyleInfo extends $tea.Model {
  content?: string;
  createTime?: string;
  lastModifyTime?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      lastModifyTime: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagSet extends $tea.Model {
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tagging extends $tea.Model {
  tagSet?: TagSet;
  static names(): { [key: string]: string } {
    return {
      tagSet: 'TagSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagSet: TagSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferAccelerationConfiguration extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Upload extends $tea.Model {
  initiated?: string;
  key?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      initiated: 'Initiated',
      key: 'Key',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initiated: 'string',
      key: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserAntiDDOSInfo extends $tea.Model {
  activeTime?: number;
  ctime?: number;
  instanceId?: string;
  mtime?: number;
  owner?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      ctime: 'Ctime',
      instanceId: 'InstanceId',
      mtime: 'Mtime',
      owner: 'Owner',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'number',
      ctime: 'number',
      instanceId: 'string',
      mtime: 'number',
      owner: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VersioningConfiguration extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebsiteConfiguration extends $tea.Model {
  errorDocument?: ErrorDocument;
  indexDocument?: IndexDocument;
  routingRules?: WebsiteConfigurationRoutingRules;
  static names(): { [key: string]: string } {
    return {
      errorDocument: 'ErrorDocument',
      indexDocument: 'IndexDocument',
      routingRules: 'RoutingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDocument: ErrorDocument,
      indexDocument: IndexDocument,
      routingRules: WebsiteConfigurationRoutingRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortBucketWormResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortMultipartUploadRequest extends $tea.Model {
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      uploadId: 'uploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortMultipartUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendObjectHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  cacheControl?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  contentMD5?: string;
  expires?: string;
  metaData?: { [key: string]: string };
  acl?: string;
  serverSideEncryption?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      cacheControl: 'Cache-Control',
      contentDisposition: 'Content-Disposition',
      contentEncoding: 'Content-Encoding',
      contentMD5: 'Content-MD5',
      expires: 'Expires',
      metaData: 'x-oss-meta-*',
      acl: 'x-oss-object-acl',
      serverSideEncryption: 'x-oss-server-side-encryption',
      storageClass: 'x-oss-storage-class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      cacheControl: 'string',
      contentDisposition: 'string',
      contentEncoding: 'string',
      contentMD5: 'string',
      expires: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      acl: 'string',
      serverSideEncryption: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendObjectRequest extends $tea.Model {
  body?: Readable;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      position: 'position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'Readable',
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBucketWormRequest extends $tea.Model {
  wormId?: string;
  static names(): { [key: string]: string } {
    return {
      wormId: 'wormId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wormId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBucketWormResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteMultipartUploadHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  completeAll?: string;
  forbidOverwrite?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      completeAll: 'x-oss-complete-all',
      forbidOverwrite: 'x-oss-forbid-overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      completeAll: 'string',
      forbidOverwrite: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteMultipartUploadRequest extends $tea.Model {
  body?: CompleteMultipartUpload;
  encodingType?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'CompleteMultipartUpload',
      encodingType: 'encoding-type',
      uploadId: 'uploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CompleteMultipartUpload,
      encodingType: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteMultipartUploadResponseBody extends $tea.Model {
  bucket?: string;
  ETag?: string;
  encodingType?: string;
  key?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ETag: 'ETag',
      encodingType: 'EncodingType',
      key: 'Key',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      ETag: 'string',
      encodingType: 'string',
      key: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteMultipartUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CompleteMultipartUploadResponseBody;
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
      body: CompleteMultipartUploadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyObjectHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  copySource?: string;
  copySourceIfMatch?: string;
  copySourceIfModifiedSince?: string;
  copySourceIfNoneMatch?: string;
  copySourceIfUnmodifiedSince?: string;
  forbidOverwrite?: string;
  metaData?: { [key: string]: string };
  metadataDirective?: string;
  acl?: string;
  serverSideEncryption?: string;
  sseKeyId?: string;
  storageClass?: string;
  tagging?: string;
  taggingDirective?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      copySource: 'x-oss-copy-source',
      copySourceIfMatch: 'x-oss-copy-source-if-match',
      copySourceIfModifiedSince: 'x-oss-copy-source-if-modified-since',
      copySourceIfNoneMatch: 'x-oss-copy-source-if-none-match',
      copySourceIfUnmodifiedSince: 'x-oss-copy-source-if-unmodified-since',
      forbidOverwrite: 'x-oss-forbid-overwrite',
      metaData: 'x-oss-meta-*',
      metadataDirective: 'x-oss-metadata-directive',
      acl: 'x-oss-object-acl',
      serverSideEncryption: 'x-oss-server-side-encryption',
      sseKeyId: 'x-oss-server-side-encryption-key-id',
      storageClass: 'x-oss-storage-class',
      tagging: 'x-oss-tagging',
      taggingDirective: 'x-oss-tagging-directive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      copySource: 'string',
      copySourceIfMatch: 'string',
      copySourceIfModifiedSince: 'string',
      copySourceIfNoneMatch: 'string',
      copySourceIfUnmodifiedSince: 'string',
      forbidOverwrite: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metadataDirective: 'string',
      acl: 'string',
      serverSideEncryption: 'string',
      sseKeyId: 'string',
      storageClass: 'string',
      tagging: 'string',
      taggingDirective: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyObjectResponseBody extends $tea.Model {
  ETag?: string;
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      lastModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CopyObjectResponseBody;
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
      body: CopyObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSelectObjectMetaRequest extends $tea.Model {
  selectMetaRequest?: SelectMetaRequest;
  static names(): { [key: string]: string } {
    return {
      selectMetaRequest: 'SelectMetaRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectMetaRequest: SelectMetaRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSelectObjectMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SelectMetaStatus;
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
      body: SelectMetaStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketCorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketEncryptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketInventoryRequest extends $tea.Model {
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryId: 'inventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketLifecycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketLoggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketReplicationRequest extends $tea.Model {
  body?: ReplicationRules;
  static names(): { [key: string]: string } {
    return {
      body: 'ReplicationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ReplicationRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketReplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketWebsiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultipleObjectsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  contentMd5?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      contentMd5: 'content-md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      contentMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultipleObjectsRequest extends $tea.Model {
  delete?: Delete;
  encodingType?: string;
  static names(): { [key: string]: string } {
    return {
      delete: 'Delete',
      encodingType: 'encoding-type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delete: Delete,
      encodingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultipleObjectsResponseBody extends $tea.Model {
  deleted?: DeletedObject[];
  encodingType?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      encodingType: 'EncodingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: { 'type': 'array', 'itemType': DeletedObject },
      encodingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMultipleObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMultipleObjectsResponseBody;
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
      body: DeleteMultipleObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteObjectRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteObjectTaggingRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteObjectTaggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regions?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regionInfos?: RegionInfo[];
  static names(): { [key: string]: string } {
    return {
      regionInfos: 'RegionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionInfos: { 'type': 'array', 'itemType': RegionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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

export class ExtendBucketWormRequest extends $tea.Model {
  body?: ExtendWormConfiguration;
  wormId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'ExtendWormConfiguration',
      wormId: 'wormId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ExtendWormConfiguration,
      wormId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendBucketWormResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketAclResponseBody extends $tea.Model {
  accessControlList?: GetBucketAclResponseBodyAccessControlList;
  owner?: Owner;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'AccessControlList',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: GetBucketAclResponseBodyAccessControlList,
      owner: Owner,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketAclResponseBody;
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
      body: GetBucketAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketCorsResponseBody extends $tea.Model {
  CORSRule?: CORSRule[];
  responseVary?: boolean;
  static names(): { [key: string]: string } {
    return {
      CORSRule: 'CORSRule',
      responseVary: 'ResponseVary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CORSRule: { 'type': 'array', 'itemType': CORSRule },
      responseVary: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketCorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketCorsResponseBody;
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
      body: GetBucketCorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketEncryptionResponseBody extends $tea.Model {
  applyServerSideEncryptionByDefault?: ApplyServerSideEncryptionByDefault;
  static names(): { [key: string]: string } {
    return {
      applyServerSideEncryptionByDefault: 'ApplyServerSideEncryptionByDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyServerSideEncryptionByDefault: ApplyServerSideEncryptionByDefault,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketEncryptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketEncryptionResponseBody;
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
      body: GetBucketEncryptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BucketInfo;
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
      body: BucketInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketInventoryRequest extends $tea.Model {
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryId: 'inventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketInventoryResponseBody extends $tea.Model {
  destination?: InventoryDestination;
  filter?: InventoryFilter;
  id?: string;
  includedObjectVersions?: string;
  isEnabled?: boolean;
  optionalFields?: GetBucketInventoryResponseBodyOptionalFields;
  schedule?: InventorySchedule;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      filter: 'Filter',
      id: 'Id',
      includedObjectVersions: 'IncludedObjectVersions',
      isEnabled: 'IsEnabled',
      optionalFields: 'OptionalFields',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: InventoryDestination,
      filter: InventoryFilter,
      id: 'string',
      includedObjectVersions: 'string',
      isEnabled: 'boolean',
      optionalFields: GetBucketInventoryResponseBodyOptionalFields,
      schedule: InventorySchedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketInventoryResponseBody;
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
      body: GetBucketInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketLifecycleResponseBody extends $tea.Model {
  rules?: LifecycleRule[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': LifecycleRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketLifecycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketLifecycleResponseBody;
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
      body: GetBucketLifecycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketLocationResponseBody extends $tea.Model {
  locationConstraint?: string;
  static names(): { [key: string]: string } {
    return {
      locationConstraint: 'LocationConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationConstraint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketLocationResponseBody;
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
      body: GetBucketLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketLoggingResponseBody extends $tea.Model {
  loggingEnabled?: LoggingEnabled;
  static names(): { [key: string]: string } {
    return {
      loggingEnabled: 'LoggingEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggingEnabled: LoggingEnabled,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketLoggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketLoggingResponseBody;
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
      body: GetBucketLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketRefererResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefererConfiguration;
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
      body: RefererConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationResponseBody extends $tea.Model {
  rules?: ReplicationRule[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': ReplicationRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketReplicationResponseBody;
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
      body: GetBucketReplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationLocationResponseBody extends $tea.Model {
  locations?: string[];
  locationTransferTypeConstraint?: GetBucketReplicationLocationResponseBodyLocationTransferTypeConstraint;
  static names(): { [key: string]: string } {
    return {
      locations: 'Location',
      locationTransferTypeConstraint: 'LocationTransferTypeConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locations: { 'type': 'array', 'itemType': 'string' },
      locationTransferTypeConstraint: GetBucketReplicationLocationResponseBodyLocationTransferTypeConstraint,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketReplicationLocationResponseBody;
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
      body: GetBucketReplicationLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationProgressRequest extends $tea.Model {
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'rule-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationProgressResponseBody extends $tea.Model {
  rule?: ReplicationProgressRule;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: ReplicationProgressRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketReplicationProgressResponseBody;
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
      body: GetBucketReplicationProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketRequestPaymentResponseBody extends $tea.Model {
  payer?: string;
  static names(): { [key: string]: string } {
    return {
      payer: 'Payer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketRequestPaymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketRequestPaymentResponseBody;
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
      body: GetBucketRequestPaymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketTagsResponseBody extends $tea.Model {
  tagSet?: TagSet;
  static names(): { [key: string]: string } {
    return {
      tagSet: 'TagSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagSet: TagSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketTagsResponseBody;
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
      body: GetBucketTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketTransferAccelerationResponseBody extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketTransferAccelerationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketTransferAccelerationResponseBody;
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
      body: GetBucketTransferAccelerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketVersioningResponseBody extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketVersioningResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketVersioningResponseBody;
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
      body: GetBucketVersioningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketWebsiteResponseBody extends $tea.Model {
  errorDocument?: ErrorDocument;
  indexDocument?: IndexDocument;
  routingRules?: GetBucketWebsiteResponseBodyRoutingRules;
  static names(): { [key: string]: string } {
    return {
      errorDocument: 'ErrorDocument',
      indexDocument: 'IndexDocument',
      routingRules: 'RoutingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDocument: ErrorDocument,
      indexDocument: IndexDocument,
      routingRules: GetBucketWebsiteResponseBodyRoutingRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketWebsiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketWebsiteResponseBody;
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
      body: GetBucketWebsiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketWormResponseBody extends $tea.Model {
  creationDate?: string;
  retentionPeriodInDays?: number;
  state?: string;
  wormId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      retentionPeriodInDays: 'RetentionPeriodInDays',
      state: 'State',
      wormId: 'WormId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      retentionPeriodInDays: 'number',
      state: 'string',
      wormId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketWormResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBucketWormResponseBody;
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
      body: GetBucketWormResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveChannelHistoryResponseBody extends $tea.Model {
  liveRecords?: LiveRecord[];
  static names(): { [key: string]: string } {
    return {
      liveRecords: 'LiveRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecords: { 'type': 'array', 'itemType': LiveRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveChannelHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveChannelHistoryResponseBody;
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
      body: GetLiveChannelHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveChannelInfoResponseBody extends $tea.Model {
  description?: string;
  status?: string;
  target?: LiveChannelTarget;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      status: 'Status',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      status: 'string',
      target: LiveChannelTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveChannelInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveChannelInfoResponseBody;
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
      body: GetLiveChannelInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveChannelStatResponseBody extends $tea.Model {
  audio?: LiveChannelAudio;
  connectedTime?: string;
  remoteAddr?: string;
  status?: string;
  video?: LiveChannelVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      connectedTime: 'ConnectedTime',
      remoteAddr: 'RemoteAddr',
      status: 'Status',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: LiveChannelAudio,
      connectedTime: 'string',
      remoteAddr: 'string',
      status: 'string',
      video: LiveChannelVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveChannelStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLiveChannelStatResponseBody;
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
      body: GetLiveChannelStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  acceptEncoding?: string;
  ifMatch?: string;
  ifModifiedSince?: string;
  ifNoneMatch?: string;
  ifUnmodifiedSince?: string;
  range?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      acceptEncoding: 'Accept-Encoding',
      ifMatch: 'If-Match',
      ifModifiedSince: 'If-Modified-Since',
      ifNoneMatch: 'If-None-Match',
      ifUnmodifiedSince: 'If-Unmodified-Since',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      acceptEncoding: 'string',
      ifMatch: 'string',
      ifModifiedSince: 'string',
      ifNoneMatch: 'string',
      ifUnmodifiedSince: 'string',
      range: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectRequest extends $tea.Model {
  responseCacheControl?: string;
  responseContentDisposition?: string;
  responseContentEncoding?: string;
  responseContentLanguage?: string;
  responseContentType?: string;
  responseExpires?: string;
  static names(): { [key: string]: string } {
    return {
      responseCacheControl: 'response-cache-control',
      responseContentDisposition: 'response-content-disposition',
      responseContentEncoding: 'response-content-encoding',
      responseContentLanguage: 'response-content-language',
      responseContentType: 'response-content-type',
      responseExpires: 'response-expires',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseCacheControl: 'string',
      responseContentDisposition: 'string',
      responseContentEncoding: 'string',
      responseContentLanguage: 'string',
      responseContentType: 'string',
      responseExpires: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Readable;
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
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectAclRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectAclResponseBody extends $tea.Model {
  accessControlList?: GetObjectAclResponseBodyAccessControlList;
  owner?: Owner;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'AccessControlList',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: GetObjectAclResponseBodyAccessControlList,
      owner: Owner,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetObjectAclResponseBody;
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
      body: GetObjectAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectMetaRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectTaggingRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectTaggingResponseBody extends $tea.Model {
  tagSet?: TagSet;
  static names(): { [key: string]: string } {
    return {
      tagSet: 'TagSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagSet: TagSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectTaggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetObjectTaggingResponseBody;
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
      body: GetObjectTaggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymlinkRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymlinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodPlaylistRequest extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodPlaylistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Readable;
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
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeadObjectHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  ifModifiedSince?: string;
  ifNoneMatch?: string;
  ifUnmodifiedSince?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      ifModifiedSince: 'If-Modified-Since',
      ifNoneMatch: 'If-None-Match',
      ifUnmodifiedSince: 'If-Unmodified-Since',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      ifModifiedSince: 'string',
      ifNoneMatch: 'string',
      ifUnmodifiedSince: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeadObjectRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeadObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateBucketWormRequest extends $tea.Model {
  initiateWormConfiguration?: InitiateWormConfiguration;
  static names(): { [key: string]: string } {
    return {
      initiateWormConfiguration: 'InitiateWormConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initiateWormConfiguration: InitiateWormConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateBucketWormResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateMultipartUploadHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  cacheControl?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  expires?: string;
  forbidOverwrite?: string;
  sseDataEncryption?: string;
  serverSideEncryption?: string;
  sseKeyId?: string;
  storageClass?: string;
  tagging?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      cacheControl: 'Cache-Control',
      contentDisposition: 'Content-Disposition',
      contentEncoding: 'Content-Encoding',
      expires: 'Expires',
      forbidOverwrite: 'x-oss-forbid-overwrite',
      sseDataEncryption: 'x-oss-server-side-data-encryption',
      serverSideEncryption: 'x-oss-server-side-encryption',
      sseKeyId: 'x-oss-server-side-encryption-key-id',
      storageClass: 'x-oss-storage-class',
      tagging: 'x-oss-tagging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      cacheControl: 'string',
      contentDisposition: 'string',
      contentEncoding: 'string',
      expires: 'string',
      forbidOverwrite: 'string',
      sseDataEncryption: 'string',
      serverSideEncryption: 'string',
      sseKeyId: 'string',
      storageClass: 'string',
      tagging: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateMultipartUploadRequest extends $tea.Model {
  encodingType?: string;
  static names(): { [key: string]: string } {
    return {
      encodingType: 'encoding-type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateMultipartUploadResponseBody extends $tea.Model {
  bucket?: string;
  encodingType?: string;
  key?: string;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      encodingType: 'EncodingType',
      key: 'Key',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      encodingType: 'string',
      key: 'string',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateMultipartUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitiateMultipartUploadResponseBody;
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
      body: InitiateMultipartUploadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketInventoryRequest extends $tea.Model {
  continuationToken?: string;
  static names(): { [key: string]: string } {
    return {
      continuationToken: 'continuation-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuationToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketInventoryResponseBody extends $tea.Model {
  inventoryConfigurations?: InventoryConfiguration[];
  isTruncated?: boolean;
  nextContinuationToken?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryConfigurations: 'InventoryConfiguration',
      isTruncated: 'IsTruncated',
      nextContinuationToken: 'NextContinuationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryConfigurations: { 'type': 'array', 'itemType': InventoryConfiguration },
      isTruncated: 'boolean',
      nextContinuationToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBucketInventoryResponseBody;
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
      body: ListBucketInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xOssResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xOssResourceGroupId: 'x-oss-resource-group-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xOssResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketsRequest extends $tea.Model {
  marker?: string;
  maxKeys?: number;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxKeys: 'max-keys',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxKeys: 'number',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketsResponseBody extends $tea.Model {
  buckets?: Bucket[];
  isTruncated?: boolean;
  marker?: string;
  maxKeys?: number;
  nextMarker?: string;
  owner?: Owner;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'buckets',
      isTruncated: 'isTruncated',
      marker: 'marker',
      maxKeys: 'maxKeys',
      nextMarker: 'nextMarker',
      owner: 'owner',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: { 'type': 'array', 'itemType': Bucket },
      isTruncated: 'boolean',
      marker: 'string',
      maxKeys: 'number',
      nextMarker: 'string',
      owner: Owner,
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBucketsResponseBody;
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
      body: ListBucketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveChannelRequest extends $tea.Model {
  marker?: string;
  maxKeys?: number;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxKeys: 'max-keys',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxKeys: 'number',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveChannelResponseBody extends $tea.Model {
  isTruncated?: boolean;
  liveChannels?: LiveChannel[];
  marker?: string;
  maxKeys?: number;
  nextMarker?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      liveChannels: 'LiveChannel',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
      nextMarker: 'NextMarker',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      liveChannels: { 'type': 'array', 'itemType': LiveChannel },
      marker: 'string',
      maxKeys: 'number',
      nextMarker: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLiveChannelResponseBody;
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
      body: ListLiveChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultipartUploadsRequest extends $tea.Model {
  delimiter?: string;
  encodingType?: string;
  keyMarker?: string;
  maxUploads?: number;
  prefix?: string;
  uploadIdMarker?: string;
  static names(): { [key: string]: string } {
    return {
      delimiter: 'delimiter',
      encodingType: 'encoding-type',
      keyMarker: 'key-marker',
      maxUploads: 'max-uploads',
      prefix: 'prefix',
      uploadIdMarker: 'upload-id-marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delimiter: 'string',
      encodingType: 'string',
      keyMarker: 'string',
      maxUploads: 'number',
      prefix: 'string',
      uploadIdMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultipartUploadsResponseBody extends $tea.Model {
  bucket?: string;
  commonPrefixes?: CommonPrefix[];
  delimiter?: string;
  encodingType?: string;
  isTruncated?: boolean;
  keyMarker?: string;
  maxUploads?: number;
  nextKeyMarker?: string;
  nextUploadIdMarker?: string;
  prefix?: string;
  uploads?: Upload[];
  uploadIdMarker?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      commonPrefixes: 'CommonPrefixes',
      delimiter: 'Delimiter',
      encodingType: 'EncodingType',
      isTruncated: 'IsTruncated',
      keyMarker: 'KeyMarker',
      maxUploads: 'MaxUploads',
      nextKeyMarker: 'NextKeyMarker',
      nextUploadIdMarker: 'NextUploadIdMarker',
      prefix: 'Prefix',
      uploads: 'Upload',
      uploadIdMarker: 'UploadIdMarker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      commonPrefixes: { 'type': 'array', 'itemType': CommonPrefix },
      delimiter: 'string',
      encodingType: 'string',
      isTruncated: 'boolean',
      keyMarker: 'string',
      maxUploads: 'number',
      nextKeyMarker: 'string',
      nextUploadIdMarker: 'string',
      prefix: 'string',
      uploads: { 'type': 'array', 'itemType': Upload },
      uploadIdMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultipartUploadsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMultipartUploadsResponseBody;
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
      body: ListMultipartUploadsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectVersionsRequest extends $tea.Model {
  delimiter?: string;
  encodingType?: string;
  keyMarker?: string;
  maxKeys?: number;
  prefix?: string;
  versionIdMarker?: string;
  static names(): { [key: string]: string } {
    return {
      delimiter: 'delimiter',
      encodingType: 'encoding-type',
      keyMarker: 'key-marker',
      maxKeys: 'max-keys',
      prefix: 'prefix',
      versionIdMarker: 'version-id-marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delimiter: 'string',
      encodingType: 'string',
      keyMarker: 'string',
      maxKeys: 'number',
      prefix: 'string',
      versionIdMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectVersionsResponseBody extends $tea.Model {
  commonPrefixes?: CommonPrefix[];
  deleteMarkers?: DeleteMarkerEntry[];
  delimiter?: string;
  encodingType?: string;
  isTruncated?: boolean;
  keyMarker?: string;
  maxKeys?: number;
  name?: string;
  nextKeyMarker?: string;
  nextVersionIdMarker?: string;
  prefix?: string;
  versions?: ObjectVersion[];
  versionIdMarker?: string;
  static names(): { [key: string]: string } {
    return {
      commonPrefixes: 'CommonPrefixes',
      deleteMarkers: 'DeleteMarker',
      delimiter: 'Delimiter',
      encodingType: 'EncodingType',
      isTruncated: 'IsTruncated',
      keyMarker: 'KeyMarker',
      maxKeys: 'MaxKeys',
      name: 'Name',
      nextKeyMarker: 'NextKeyMarker',
      nextVersionIdMarker: 'NextVersionIdMarker',
      prefix: 'Prefix',
      versions: 'Version',
      versionIdMarker: 'VersionIdMarker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonPrefixes: { 'type': 'array', 'itemType': CommonPrefix },
      deleteMarkers: { 'type': 'array', 'itemType': DeleteMarkerEntry },
      delimiter: 'string',
      encodingType: 'string',
      isTruncated: 'boolean',
      keyMarker: 'string',
      maxKeys: 'number',
      name: 'string',
      nextKeyMarker: 'string',
      nextVersionIdMarker: 'string',
      prefix: 'string',
      versions: { 'type': 'array', 'itemType': ObjectVersion },
      versionIdMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListObjectVersionsResponseBody;
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
      body: ListObjectVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsRequest extends $tea.Model {
  delimiter?: string;
  encodingType?: string;
  marker?: string;
  maxKeys?: number;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      delimiter: 'delimiter',
      encodingType: 'encoding-type',
      marker: 'marker',
      maxKeys: 'max-keys',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delimiter: 'string',
      encodingType: 'string',
      marker: 'string',
      maxKeys: 'number',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsResponseBody extends $tea.Model {
  commonPrefixes?: CommonPrefix[];
  contents?: ObjectSummary[];
  delimiter?: string;
  encodingType?: string;
  isTruncated?: boolean;
  marker?: string;
  maxKeys?: number;
  name?: string;
  nextMarker?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      commonPrefixes: 'CommonPrefixes',
      contents: 'Contents',
      delimiter: 'Delimiter',
      encodingType: 'EncodingType',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
      name: 'Name',
      nextMarker: 'NextMarker',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonPrefixes: { 'type': 'array', 'itemType': CommonPrefix },
      contents: { 'type': 'array', 'itemType': ObjectSummary },
      delimiter: 'string',
      encodingType: 'string',
      isTruncated: 'boolean',
      marker: 'string',
      maxKeys: 'number',
      name: 'string',
      nextMarker: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListObjectsResponseBody;
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
      body: ListObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsV2Request extends $tea.Model {
  continuationToken?: string;
  delimiter?: string;
  encodingType?: string;
  fetchOwner?: boolean;
  maxKeys?: number;
  prefix?: string;
  startAfter?: string;
  static names(): { [key: string]: string } {
    return {
      continuationToken: 'continuation-token',
      delimiter: 'delimiter',
      encodingType: 'encoding-type',
      fetchOwner: 'fetch-owner',
      maxKeys: 'max-keys',
      prefix: 'prefix',
      startAfter: 'start-after',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuationToken: 'string',
      delimiter: 'string',
      encodingType: 'string',
      fetchOwner: 'boolean',
      maxKeys: 'number',
      prefix: 'string',
      startAfter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsV2ResponseBody extends $tea.Model {
  commonPrefixes?: CommonPrefix[];
  contents?: ObjectSummary[];
  continuationToken?: string;
  delimiter?: string;
  encodingType?: string;
  isTruncated?: boolean;
  keyCount?: number;
  maxKeys?: number;
  name?: string;
  nextContinuationToken?: string;
  prefix?: string;
  startAfter?: string;
  static names(): { [key: string]: string } {
    return {
      commonPrefixes: 'CommonPrefixes',
      contents: 'Contents',
      continuationToken: 'ContinuationToken',
      delimiter: 'Delimiter',
      encodingType: 'EncodingType',
      isTruncated: 'IsTruncated',
      keyCount: 'KeyCount',
      maxKeys: 'MaxKeys',
      name: 'Name',
      nextContinuationToken: 'NextContinuationToken',
      prefix: 'Prefix',
      startAfter: 'StartAfter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonPrefixes: { 'type': 'array', 'itemType': CommonPrefix },
      contents: { 'type': 'array', 'itemType': ObjectSummary },
      continuationToken: 'string',
      delimiter: 'string',
      encodingType: 'string',
      isTruncated: 'boolean',
      keyCount: 'number',
      maxKeys: 'number',
      name: 'string',
      nextContinuationToken: 'string',
      prefix: 'string',
      startAfter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListObjectsV2ResponseBody;
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
      body: ListObjectsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartsRequest extends $tea.Model {
  encodingType?: string;
  maxParts?: number;
  partNumberMarker?: number;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      encodingType: 'encoding-type',
      maxParts: 'max-parts',
      partNumberMarker: 'part-number-marker',
      uploadId: 'uploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodingType: 'string',
      maxParts: 'number',
      partNumberMarker: 'number',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartsShrinkRequest extends $tea.Model {
  encodingTypeShrink?: string;
  maxParts?: number;
  partNumberMarker?: number;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      encodingTypeShrink: 'encoding-type',
      maxParts: 'max-parts',
      partNumberMarker: 'part-number-marker',
      uploadId: 'uploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodingTypeShrink: 'string',
      maxParts: 'number',
      partNumberMarker: 'number',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartsResponseBody extends $tea.Model {
  bucket?: string;
  isTruncated?: boolean;
  key?: string;
  maxParts?: number;
  nextPartNumberMarker?: number;
  part?: Part[];
  partNumberMarker?: number;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      isTruncated: 'IsTruncated',
      key: 'Key',
      maxParts: 'MaxParts',
      nextPartNumberMarker: 'NextPartNumberMarker',
      part: 'Part',
      partNumberMarker: 'PartNumberMarker',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      isTruncated: 'boolean',
      key: 'string',
      maxParts: 'number',
      nextPartNumberMarker: 'number',
      part: { 'type': 'array', 'itemType': Part },
      partNumberMarker: 'number',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPartsResponseBody;
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
      body: ListPartsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OptionObjectHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accessControlRequestHeaders?: string;
  accessControlRequestMethod?: string;
  origin?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accessControlRequestHeaders: 'Access-Control-Request-Headers',
      accessControlRequestMethod: 'Access-Control-Request-Method',
      origin: 'Origin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accessControlRequestHeaders: 'string',
      accessControlRequestMethod: 'string',
      origin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OptionObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostVodPlaylistRequest extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostVodPlaylistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  acl?: string;
  xOssResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      acl: 'x-oss-acl',
      xOssResourceGroupId: 'x-oss-resource-group-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      acl: 'string',
      xOssResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketRequest extends $tea.Model {
  createBucketConfiguration?: CreateBucketConfiguration;
  static names(): { [key: string]: string } {
    return {
      createBucketConfiguration: 'CreateBucketConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createBucketConfiguration: CreateBucketConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketAclHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  acl?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      acl: 'x-oss-acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      acl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketCorsRequest extends $tea.Model {
  cORSConfiguration?: CORSConfiguration;
  static names(): { [key: string]: string } {
    return {
      cORSConfiguration: 'CORSConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cORSConfiguration: CORSConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketCorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketEncryptionRequest extends $tea.Model {
  serverSideEncryptionRule?: ServerSideEncryptionRule;
  static names(): { [key: string]: string } {
    return {
      serverSideEncryptionRule: 'ServerSideEncryptionRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverSideEncryptionRule: ServerSideEncryptionRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketEncryptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketInventoryRequest extends $tea.Model {
  inventoryConfiguration?: InventoryConfiguration;
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryConfiguration: 'InventoryConfiguration',
      inventoryId: 'inventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryConfiguration: InventoryConfiguration,
      inventoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketLifecycleRequest extends $tea.Model {
  lifecycleConfiguration?: LifecycleConfiguration;
  static names(): { [key: string]: string } {
    return {
      lifecycleConfiguration: 'LifecycleConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleConfiguration: LifecycleConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketLifecycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketLoggingRequest extends $tea.Model {
  bucketLoggingStatus?: BucketLoggingStatus;
  static names(): { [key: string]: string } {
    return {
      bucketLoggingStatus: 'BucketLoggingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketLoggingStatus: BucketLoggingStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketLoggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketPolicyRequest extends $tea.Model {
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketRefererRequest extends $tea.Model {
  refererConfiguration?: RefererConfiguration;
  static names(): { [key: string]: string } {
    return {
      refererConfiguration: 'RefererConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refererConfiguration: RefererConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketRefererResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketReplicationRequest extends $tea.Model {
  replicationConfiguration?: ReplicationConfiguration;
  static names(): { [key: string]: string } {
    return {
      replicationConfiguration: 'ReplicationConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicationConfiguration: ReplicationConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketReplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketRequestPaymentRequest extends $tea.Model {
  requestPaymentConfiguration?: RequestPaymentConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestPaymentConfiguration: 'RequestPaymentConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPaymentConfiguration: RequestPaymentConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketRequestPaymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketTagsRequest extends $tea.Model {
  tagging?: Tagging;
  static names(): { [key: string]: string } {
    return {
      tagging: 'Tagging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagging: Tagging,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketTransferAccelerationRequest extends $tea.Model {
  transferAccelerationConfiguration?: TransferAccelerationConfiguration;
  static names(): { [key: string]: string } {
    return {
      transferAccelerationConfiguration: 'TransferAccelerationConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferAccelerationConfiguration: TransferAccelerationConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketTransferAccelerationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketVersioningRequest extends $tea.Model {
  versioningConfiguration?: VersioningConfiguration;
  static names(): { [key: string]: string } {
    return {
      versioningConfiguration: 'VersioningConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versioningConfiguration: VersioningConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketVersioningResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketWebsiteRequest extends $tea.Model {
  websiteConfiguration?: WebsiteConfiguration;
  static names(): { [key: string]: string } {
    return {
      websiteConfiguration: 'WebsiteConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      websiteConfiguration: WebsiteConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketWebsiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLiveChannelRequest extends $tea.Model {
  liveChannelConfiguration?: LiveChannelConfiguration;
  static names(): { [key: string]: string } {
    return {
      liveChannelConfiguration: 'LiveChannelConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveChannelConfiguration: LiveChannelConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLiveChannelResponseBody extends $tea.Model {
  playUrls?: LiveChannelPlayUrls;
  publishUrls?: LiveChannelPublishUrls;
  static names(): { [key: string]: string } {
    return {
      playUrls: 'PlayUrls',
      publishUrls: 'PublishUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playUrls: LiveChannelPlayUrls,
      publishUrls: LiveChannelPublishUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLiveChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutLiveChannelResponseBody;
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
      body: PutLiveChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLiveChannelStatusRequest extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLiveChannelStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  forbidOverwrite?: boolean;
  metaData?: { [key: string]: string };
  acl?: string;
  sseDataEncryption?: string;
  serverSideEncryption?: string;
  sseKeyId?: string;
  storageClass?: string;
  tagging?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      forbidOverwrite: 'x-oss-forbid-overwrite',
      metaData: 'x-oss-meta-*',
      acl: 'x-oss-object-acl',
      sseDataEncryption: 'x-oss-server-side-data-encryption',
      serverSideEncryption: 'x-oss-server-side-encryption',
      sseKeyId: 'x-oss-server-side-encryption-key-id',
      storageClass: 'x-oss-storage-class',
      tagging: 'x-oss-tagging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      forbidOverwrite: 'boolean',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      acl: 'string',
      sseDataEncryption: 'string',
      serverSideEncryption: 'string',
      sseKeyId: 'string',
      storageClass: 'string',
      tagging: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectRequest extends $tea.Model {
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectAclHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  acl?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      acl: 'x-oss-object-acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      acl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectAclRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectTaggingRequest extends $tea.Model {
  tagging?: Tagging;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      tagging: 'Tagging',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagging: Tagging,
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutObjectTaggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSymlinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  forbidOverwrite?: string;
  acl?: string;
  storageClass?: string;
  symlinkTargetKey?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      forbidOverwrite: 'x-oss-forbid-overwrite',
      acl: 'x-oss-object-acl',
      storageClass: 'x-oss-storage-class',
      symlinkTargetKey: 'x-oss-symlink-target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      forbidOverwrite: 'string',
      acl: 'string',
      storageClass: 'string',
      symlinkTargetKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSymlinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreObjectRequest extends $tea.Model {
  restoreRequest?: RestoreRequest;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      restoreRequest: 'RestoreRequest',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreRequest: RestoreRequest,
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectObjectRequest extends $tea.Model {
  selectRequest?: SelectRequest;
  static names(): { [key: string]: string } {
    return {
      selectRequest: 'SelectRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectRequest: SelectRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Readable;
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
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartRequest extends $tea.Model {
  body?: Readable;
  partNumber?: number;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      partNumber: 'partNumber',
      uploadId: 'uploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'Readable',
      partNumber: 'number',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartCopyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  copySource?: string;
  copySourceIfMatch?: string;
  copySourceIfModifiedSince?: string;
  copySourceIfNoneMatch?: string;
  copySourceIfUnmodifiedSince?: string;
  copySourceRange?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      copySource: 'x-oss-copy-source',
      copySourceIfMatch: 'x-oss-copy-source-if-match',
      copySourceIfModifiedSince: 'x-oss-copy-source-if-modified-since',
      copySourceIfNoneMatch: 'x-oss-copy-source-if-none-match',
      copySourceIfUnmodifiedSince: 'x-oss-copy-source-if-unmodified-since',
      copySourceRange: 'x-oss-copy-source-range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      copySource: 'string',
      copySourceIfMatch: 'string',
      copySourceIfModifiedSince: 'string',
      copySourceIfNoneMatch: 'string',
      copySourceIfUnmodifiedSince: 'string',
      copySourceRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartCopyRequest extends $tea.Model {
  partNumber?: number;
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      partNumber: 'partNumber',
      uploadId: 'uploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partNumber: 'number',
      uploadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartCopyResponseBody extends $tea.Model {
  ETag?: string;
  lastModified?: string;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      lastModified: 'LastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      lastModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartCopyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadPartCopyResponseBody;
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
      body: UploadPartCopyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketAntiDDOSConfigurationCnames extends $tea.Model {
  domain?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketAntiDDOSInfoCnames extends $tea.Model {
  domain?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketCnameConfigurationCname extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketInfoBucketServerSideEncryptionRule extends $tea.Model {
  KMSDataEncryption?: string;
  KMSMasterKeyID?: string;
  SSEAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      KMSDataEncryption: 'KMSDataEncryption',
      KMSMasterKeyID: 'KMSMasterKeyID',
      SSEAlgorithm: 'SSEAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KMSDataEncryption: 'string',
      KMSMasterKeyID: 'string',
      SSEAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BucketInfoBucket extends $tea.Model {
  accessControlList?: AccessControlList;
  accessMonitor?: string;
  bucketPolicy?: LoggingEnabled;
  creationDate?: string;
  crossRegionReplication?: string;
  dataRedundancyType?: string;
  extranetEndpoint?: string;
  intranetEndpoint?: string;
  location?: string;
  name?: string;
  owner?: Owner;
  resourceGroupId?: string;
  serverSideEncryptionRule?: BucketInfoBucketServerSideEncryptionRule;
  storageClass?: string;
  transferAcceleration?: string;
  versioning?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'AccessControlList',
      accessMonitor: 'AccessMonitor',
      bucketPolicy: 'BucketPolicy',
      creationDate: 'CreationDate',
      crossRegionReplication: 'CrossRegionReplication',
      dataRedundancyType: 'DataRedundancyType',
      extranetEndpoint: 'ExtranetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      location: 'Location',
      name: 'Name',
      owner: 'Owner',
      resourceGroupId: 'ResourceGroupId',
      serverSideEncryptionRule: 'ServerSideEncryptionRule',
      storageClass: 'StorageClass',
      transferAcceleration: 'TransferAcceleration',
      versioning: 'Versioning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: AccessControlList,
      accessMonitor: 'string',
      bucketPolicy: LoggingEnabled,
      creationDate: 'string',
      crossRegionReplication: 'string',
      dataRedundancyType: 'string',
      extranetEndpoint: 'string',
      intranetEndpoint: 'string',
      location: 'string',
      name: 'string',
      owner: Owner,
      resourceGroupId: 'string',
      serverSideEncryptionRule: BucketInfoBucketServerSideEncryptionRule,
      storageClass: 'string',
      transferAcceleration: 'string',
      versioning: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessPointResultEndpoints extends $tea.Model {
  publicEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      publicEndpoint: 'PublicEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InventoryConfigurationOptionalFields extends $tea.Model {
  fields?: string[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRuleLifecycleAbortMultipartUpload extends $tea.Model {
  createdBeforeDate?: string;
  days?: number;
  static names(): { [key: string]: string } {
    return {
      createdBeforeDate: 'CreatedBeforeDate',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBeforeDate: 'string',
      days: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRuleLifecycleExpiration extends $tea.Model {
  createdBeforeDate?: string;
  days?: number;
  expiredObjectDeleteMarker?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdBeforeDate: 'CreatedBeforeDate',
      days: 'Days',
      expiredObjectDeleteMarker: 'ExpiredObjectDeleteMarker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBeforeDate: 'string',
      days: 'number',
      expiredObjectDeleteMarker: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRuleFilterNot extends $tea.Model {
  prefix?: string;
  tag?: Tag;
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
      tag: Tag,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRuleFilter extends $tea.Model {
  not?: LifecycleRuleFilterNot;
  static names(): { [key: string]: string } {
    return {
      not: 'Not',
    };
  }

  static types(): { [key: string]: any } {
    return {
      not: LifecycleRuleFilterNot,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRuleNoncurrentVersionExpiration extends $tea.Model {
  noncurrentDays?: number;
  static names(): { [key: string]: string } {
    return {
      noncurrentDays: 'NoncurrentDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noncurrentDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRuleNoncurrentVersionTransition extends $tea.Model {
  allowSmallFile?: boolean;
  isAccessTime?: boolean;
  noncurrentDays?: number;
  returnToStdWhenVisit?: boolean;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      allowSmallFile: 'AllowSmallFile',
      isAccessTime: 'IsAccessTime',
      noncurrentDays: 'NoncurrentDays',
      returnToStdWhenVisit: 'ReturnToStdWhenVisit',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSmallFile: 'boolean',
      isAccessTime: 'boolean',
      noncurrentDays: 'number',
      returnToStdWhenVisit: 'boolean',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRuleLifecycleTransition extends $tea.Model {
  allowSmallFile?: boolean;
  createdBeforeDate?: string;
  days?: number;
  isAccessTime?: boolean;
  returnToStdWhenVisit?: boolean;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      allowSmallFile: 'AllowSmallFile',
      createdBeforeDate: 'CreatedBeforeDate',
      days: 'Days',
      isAccessTime: 'IsAccessTime',
      returnToStdWhenVisit: 'ReturnToStdWhenVisit',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSmallFile: 'boolean',
      createdBeforeDate: 'string',
      days: 'number',
      isAccessTime: 'boolean',
      returnToStdWhenVisit: 'boolean',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocationTransferTypeTransferTypes extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQueryAggregations extends $tea.Model {
  aggregation?: MetaQueryAggregation[];
  static names(): { [key: string]: string } {
    return {
      aggregation: 'Aggregation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregation: { 'type': 'array', 'itemType': MetaQueryAggregation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQueryFileOSSTagging extends $tea.Model {
  tagging?: MetaQueryTagging[];
  static names(): { [key: string]: string } {
    return {
      tagging: 'Tagging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagging: { 'type': 'array', 'itemType': MetaQueryTagging },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaQueryFileOSSUserMeta extends $tea.Model {
  userMeta?: MetaQueryUserMeta[];
  static names(): { [key: string]: string } {
    return {
      userMeta: 'UserMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userMeta: { 'type': 'array', 'itemType': MetaQueryUserMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefererConfigurationRefererList extends $tea.Model {
  referer?: string[];
  static names(): { [key: string]: string } {
    return {
      referer: 'Referer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationProgressRuleProgress extends $tea.Model {
  historicalObject?: string;
  newObject?: string;
  static names(): { [key: string]: string } {
    return {
      historicalObject: 'HistoricalObject',
      newObject: 'NewObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalObject: 'string',
      newObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationRuleEncryptionConfiguration extends $tea.Model {
  replicaKmsKeyID?: string;
  static names(): { [key: string]: string } {
    return {
      replicaKmsKeyID: 'ReplicaKmsKeyID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaKmsKeyID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicationSourceSelectionCriteriaSseKmsEncryptedObjects extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreRequestJobParameters extends $tea.Model {
  tier?: string;
  static names(): { [key: string]: string } {
    return {
      tier: 'Tier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutingRuleRedirectMirrorHeadersSet extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutingRuleRedirectMirrorHeaders extends $tea.Model {
  pass?: string[];
  passAll?: boolean;
  remove?: string[];
  set?: RoutingRuleRedirectMirrorHeadersSet[];
  static names(): { [key: string]: string } {
    return {
      pass: 'Pass',
      passAll: 'PassAll',
      remove: 'Remove',
      set: 'Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pass: { 'type': 'array', 'itemType': 'string' },
      passAll: 'boolean',
      remove: { 'type': 'array', 'itemType': 'string' },
      set: { 'type': 'array', 'itemType': RoutingRuleRedirectMirrorHeadersSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebsiteConfigurationRoutingRules extends $tea.Model {
  routingRule?: RoutingRule[];
  static names(): { [key: string]: string } {
    return {
      routingRule: 'RoutingRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routingRule: { 'type': 'array', 'itemType': RoutingRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketAclResponseBodyAccessControlList extends $tea.Model {
  grant?: string;
  static names(): { [key: string]: string } {
    return {
      grant: 'Grant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grant: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketInventoryResponseBodyOptionalFields extends $tea.Model {
  field?: string[];
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketReplicationLocationResponseBodyLocationTransferTypeConstraint extends $tea.Model {
  locationTransferTypes?: LocationTransferType[];
  static names(): { [key: string]: string } {
    return {
      locationTransferTypes: 'LocationTransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationTransferTypes: { 'type': 'array', 'itemType': LocationTransferType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketWebsiteResponseBodyRoutingRules extends $tea.Model {
  routingRules?: RoutingRule[];
  static names(): { [key: string]: string } {
    return {
      routingRules: 'RoutingRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routingRules: { 'type': 'array', 'itemType': RoutingRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectAclResponseBodyAccessControlList extends $tea.Model {
  ACL?: string;
  static names(): { [key: string]: string } {
    return {
      ACL: 'Grant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {
  _client: SPI;

  constructor(config: $OpenApi.Config) {
    super(config);
    this._client = new GatewayClient();
    this._spi = this._client;
    this._endpointRule = "";
  }


  async abortBucketWormWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortBucketWormResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "AbortBucketWorm",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?worm`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<AbortBucketWormResponse>(await this.execute(params, req, runtime), new AbortBucketWormResponse({}));
  }

  async abortBucketWorm(bucket: string): Promise<AbortBucketWormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortBucketWormWithOptions(bucket, headers, runtime);
  }

  async abortMultipartUploadWithOptions(bucket: string, key: string, request: AbortMultipartUploadRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortMultipartUploadResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.uploadId)) {
      query["uploadId"] = request.uploadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortMultipartUpload",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<AbortMultipartUploadResponse>(await this.execute(params, req, runtime), new AbortMultipartUploadResponse({}));
  }

  async abortMultipartUpload(bucket: string, key: string, request: AbortMultipartUploadRequest): Promise<AbortMultipartUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortMultipartUploadWithOptions(bucket, key, request, headers, runtime);
  }

  async appendObjectWithOptions(bucket: string, key: string, request: AppendObjectRequest, headers: AppendObjectHeaders, runtime: $Util.RuntimeOptions): Promise<AppendObjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.position)) {
      query["position"] = request.position;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.cacheControl)) {
      realHeaders["Cache-Control"] = Util.toJSONString(headers.cacheControl);
    }

    if (!Util.isUnset(headers.contentDisposition)) {
      realHeaders["Content-Disposition"] = Util.toJSONString(headers.contentDisposition);
    }

    if (!Util.isUnset(headers.contentEncoding)) {
      realHeaders["Content-Encoding"] = Util.toJSONString(headers.contentEncoding);
    }

    if (!Util.isUnset(headers.contentMD5)) {
      realHeaders["Content-MD5"] = Util.toJSONString(headers.contentMD5);
    }

    if (!Util.isUnset(headers.expires)) {
      realHeaders["Expires"] = Util.toJSONString(headers.expires);
    }

    if (!Util.isUnset(headers.metaData)) {
      realHeaders["x-oss-meta-*"] = Util.toJSONString(headers.metaData);
    }

    if (!Util.isUnset(headers.acl)) {
      realHeaders["x-oss-object-acl"] = Util.toJSONString(headers.acl);
    }

    if (!Util.isUnset(headers.serverSideEncryption)) {
      realHeaders["x-oss-server-side-encryption"] = Util.toJSONString(headers.serverSideEncryption);
    }

    if (!Util.isUnset(headers.storageClass)) {
      realHeaders["x-oss-storage-class"] = Util.toJSONString(headers.storageClass);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "AppendObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?append`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "binary",
      bodyType: "xml",
    });
    return $tea.cast<AppendObjectResponse>(await this.execute(params, req, runtime), new AppendObjectResponse({}));
  }

  async appendObject(bucket: string, key: string, request: AppendObjectRequest): Promise<AppendObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AppendObjectHeaders({ });
    return await this.appendObjectWithOptions(bucket, key, request, headers, runtime);
  }

  async completeBucketWormWithOptions(bucket: string, request: CompleteBucketWormRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CompleteBucketWormResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.wormId)) {
      query["wormId"] = request.wormId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CompleteBucketWorm",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<CompleteBucketWormResponse>(await this.execute(params, req, runtime), new CompleteBucketWormResponse({}));
  }

  async completeBucketWorm(bucket: string, request: CompleteBucketWormRequest): Promise<CompleteBucketWormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.completeBucketWormWithOptions(bucket, request, headers, runtime);
  }

  async completeMultipartUploadWithOptions(bucket: string, key: string, request: CompleteMultipartUploadRequest, headers: CompleteMultipartUploadHeaders, runtime: $Util.RuntimeOptions): Promise<CompleteMultipartUploadResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodingType)) {
      query["encoding-type"] = request.encodingType;
    }

    if (!Util.isUnset(request.uploadId)) {
      query["uploadId"] = request.uploadId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.completeAll)) {
      realHeaders["x-oss-complete-all"] = Util.toJSONString(headers.completeAll);
    }

    if (!Util.isUnset(headers.forbidOverwrite)) {
      realHeaders["x-oss-forbid-overwrite"] = Util.toJSONString(headers.forbidOverwrite);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CompleteMultipartUpload",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<CompleteMultipartUploadResponse>(await this.execute(params, req, runtime), new CompleteMultipartUploadResponse({}));
  }

  async completeMultipartUpload(bucket: string, key: string, request: CompleteMultipartUploadRequest): Promise<CompleteMultipartUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CompleteMultipartUploadHeaders({ });
    return await this.completeMultipartUploadWithOptions(bucket, key, request, headers, runtime);
  }

  async copyObjectWithOptions(bucket: string, key: string, headers: CopyObjectHeaders, runtime: $Util.RuntimeOptions): Promise<CopyObjectResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.copySource)) {
      realHeaders["x-oss-copy-source"] = Util.toJSONString(headers.copySource);
    }

    if (!Util.isUnset(headers.copySourceIfMatch)) {
      realHeaders["x-oss-copy-source-if-match"] = Util.toJSONString(headers.copySourceIfMatch);
    }

    if (!Util.isUnset(headers.copySourceIfModifiedSince)) {
      realHeaders["x-oss-copy-source-if-modified-since"] = Util.toJSONString(headers.copySourceIfModifiedSince);
    }

    if (!Util.isUnset(headers.copySourceIfNoneMatch)) {
      realHeaders["x-oss-copy-source-if-none-match"] = Util.toJSONString(headers.copySourceIfNoneMatch);
    }

    if (!Util.isUnset(headers.copySourceIfUnmodifiedSince)) {
      realHeaders["x-oss-copy-source-if-unmodified-since"] = Util.toJSONString(headers.copySourceIfUnmodifiedSince);
    }

    if (!Util.isUnset(headers.forbidOverwrite)) {
      realHeaders["x-oss-forbid-overwrite"] = Util.toJSONString(headers.forbidOverwrite);
    }

    if (!Util.isUnset(headers.metaData)) {
      realHeaders["x-oss-meta-*"] = Util.toJSONString(headers.metaData);
    }

    if (!Util.isUnset(headers.metadataDirective)) {
      realHeaders["x-oss-metadata-directive"] = Util.toJSONString(headers.metadataDirective);
    }

    if (!Util.isUnset(headers.acl)) {
      realHeaders["x-oss-object-acl"] = Util.toJSONString(headers.acl);
    }

    if (!Util.isUnset(headers.serverSideEncryption)) {
      realHeaders["x-oss-server-side-encryption"] = Util.toJSONString(headers.serverSideEncryption);
    }

    if (!Util.isUnset(headers.sseKeyId)) {
      realHeaders["x-oss-server-side-encryption-key-id"] = Util.toJSONString(headers.sseKeyId);
    }

    if (!Util.isUnset(headers.storageClass)) {
      realHeaders["x-oss-storage-class"] = Util.toJSONString(headers.storageClass);
    }

    if (!Util.isUnset(headers.tagging)) {
      realHeaders["x-oss-tagging"] = Util.toJSONString(headers.tagging);
    }

    if (!Util.isUnset(headers.taggingDirective)) {
      realHeaders["x-oss-tagging-directive"] = Util.toJSONString(headers.taggingDirective);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "CopyObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<CopyObjectResponse>(await this.execute(params, req, runtime), new CopyObjectResponse({}));
  }

  async copyObject(bucket: string, key: string): Promise<CopyObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CopyObjectHeaders({ });
    return await this.copyObjectWithOptions(bucket, key, headers, runtime);
  }

  async createSelectObjectMetaWithOptions(bucket: string, key: string, request: CreateSelectObjectMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSelectObjectMetaResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.selectMetaRequest),
    });
    let params = new $OpenApi.Params({
      action: "CreateSelectObjectMeta",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "json",
    });
    return $tea.cast<CreateSelectObjectMetaResponse>(await this.execute(params, req, runtime), new CreateSelectObjectMetaResponse({}));
  }

  async createSelectObjectMeta(bucket: string, key: string, request: CreateSelectObjectMetaRequest): Promise<CreateSelectObjectMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSelectObjectMetaWithOptions(bucket, key, request, headers, runtime);
  }

  async deleteBucketWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucket",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketResponse>(await this.execute(params, req, runtime), new DeleteBucketResponse({}));
  }

  async deleteBucket(bucket: string): Promise<DeleteBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketWithOptions(bucket, headers, runtime);
  }

  async deleteBucketCorsWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketCorsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketCors",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?cors`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketCorsResponse>(await this.execute(params, req, runtime), new DeleteBucketCorsResponse({}));
  }

  async deleteBucketCors(bucket: string): Promise<DeleteBucketCorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketCorsWithOptions(bucket, headers, runtime);
  }

  async deleteBucketEncryptionWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketEncryptionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketEncryption",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?encryption`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketEncryptionResponse>(await this.execute(params, req, runtime), new DeleteBucketEncryptionResponse({}));
  }

  async deleteBucketEncryption(bucket: string): Promise<DeleteBucketEncryptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketEncryptionWithOptions(bucket, headers, runtime);
  }

  async deleteBucketInventoryWithOptions(bucket: string, request: DeleteBucketInventoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketInventoryResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inventoryId)) {
      query["inventoryId"] = request.inventoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketInventory",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?inventory`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketInventoryResponse>(await this.execute(params, req, runtime), new DeleteBucketInventoryResponse({}));
  }

  async deleteBucketInventory(bucket: string, request: DeleteBucketInventoryRequest): Promise<DeleteBucketInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketInventoryWithOptions(bucket, request, headers, runtime);
  }

  async deleteBucketLifecycleWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketLifecycleResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketLifecycle",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?lifecycle`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketLifecycleResponse>(await this.execute(params, req, runtime), new DeleteBucketLifecycleResponse({}));
  }

  async deleteBucketLifecycle(bucket: string): Promise<DeleteBucketLifecycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketLifecycleWithOptions(bucket, headers, runtime);
  }

  async deleteBucketLoggingWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketLoggingResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketLogging",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?logging`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketLoggingResponse>(await this.execute(params, req, runtime), new DeleteBucketLoggingResponse({}));
  }

  async deleteBucketLogging(bucket: string): Promise<DeleteBucketLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketLoggingWithOptions(bucket, headers, runtime);
  }

  async deleteBucketPolicyWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketPolicyResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketPolicy",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?policy`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketPolicyResponse>(await this.execute(params, req, runtime), new DeleteBucketPolicyResponse({}));
  }

  async deleteBucketPolicy(bucket: string): Promise<DeleteBucketPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketPolicyWithOptions(bucket, headers, runtime);
  }

  async deleteBucketReplicationWithOptions(bucket: string, request: DeleteBucketReplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketReplicationResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketReplication",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?replication&comp=delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketReplicationResponse>(await this.execute(params, req, runtime), new DeleteBucketReplicationResponse({}));
  }

  async deleteBucketReplication(bucket: string, request: DeleteBucketReplicationRequest): Promise<DeleteBucketReplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketReplicationWithOptions(bucket, request, headers, runtime);
  }

  async deleteBucketTagsWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketTagsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketTags",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?tagging`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketTagsResponse>(await this.execute(params, req, runtime), new DeleteBucketTagsResponse({}));
  }

  async deleteBucketTags(bucket: string): Promise<DeleteBucketTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketTagsWithOptions(bucket, headers, runtime);
  }

  async deleteBucketWebsiteWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBucketWebsiteResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucketWebsite",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?website`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteBucketWebsiteResponse>(await this.execute(params, req, runtime), new DeleteBucketWebsiteResponse({}));
  }

  async deleteBucketWebsite(bucket: string): Promise<DeleteBucketWebsiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBucketWebsiteWithOptions(bucket, headers, runtime);
  }

  async deleteLiveChannelWithOptions(bucket: string, channel: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLiveChannelResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLiveChannel",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}?live`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteLiveChannelResponse>(await this.execute(params, req, runtime), new DeleteLiveChannelResponse({}));
  }

  async deleteLiveChannel(bucket: string, channel: string): Promise<DeleteLiveChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLiveChannelWithOptions(bucket, channel, headers, runtime);
  }

  async deleteMultipleObjectsWithOptions(bucket: string, request: DeleteMultipleObjectsRequest, headers: DeleteMultipleObjectsHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMultipleObjectsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodingType)) {
      query["encoding-type"] = request.encodingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.contentMd5)) {
      realHeaders["content-md5"] = Util.toJSONString(headers.contentMd5);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.delete),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMultipleObjects",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteMultipleObjectsResponse>(await this.execute(params, req, runtime), new DeleteMultipleObjectsResponse({}));
  }

  async deleteMultipleObjects(bucket: string, request: DeleteMultipleObjectsRequest): Promise<DeleteMultipleObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMultipleObjectsHeaders({ });
    return await this.deleteMultipleObjectsWithOptions(bucket, request, headers, runtime);
  }

  async deleteObjectWithOptions(bucket: string, key: string, request: DeleteObjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteObjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "none",
    });
    return $tea.cast<DeleteObjectResponse>(await this.execute(params, req, runtime), new DeleteObjectResponse({}));
  }

  async deleteObject(bucket: string, key: string, request: DeleteObjectRequest): Promise<DeleteObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteObjectWithOptions(bucket, key, request, headers, runtime);
  }

  async deleteObjectTaggingWithOptions(bucket: string, key: string, request: DeleteObjectTaggingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteObjectTaggingResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteObjectTagging",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?tagging`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DeleteObjectTaggingResponse>(await this.execute(params, req, runtime), new DeleteObjectTaggingResponse({}));
  }

  async deleteObjectTagging(bucket: string, key: string, request: DeleteObjectTaggingRequest): Promise<DeleteObjectTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteObjectTaggingWithOptions(bucket, key, request, headers, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regions)) {
      query["regions"] = request.regions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  async extendBucketWormWithOptions(bucket: string, request: ExtendBucketWormRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExtendBucketWormResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.wormId)) {
      query["wormId"] = request.wormId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ExtendBucketWorm",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?wormExtend`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ExtendBucketWormResponse>(await this.execute(params, req, runtime), new ExtendBucketWormResponse({}));
  }

  async extendBucketWorm(bucket: string, request: ExtendBucketWormRequest): Promise<ExtendBucketWormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.extendBucketWormWithOptions(bucket, request, headers, runtime);
  }

  async getBucketAclWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketAclResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketAcl",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketAclResponse>(await this.execute(params, req, runtime), new GetBucketAclResponse({}));
  }

  async getBucketAcl(bucket: string): Promise<GetBucketAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketAclWithOptions(bucket, headers, runtime);
  }

  async getBucketCorsWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketCorsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketCors",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?cors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketCorsResponse>(await this.execute(params, req, runtime), new GetBucketCorsResponse({}));
  }

  async getBucketCors(bucket: string): Promise<GetBucketCorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketCorsWithOptions(bucket, headers, runtime);
  }

  async getBucketEncryptionWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketEncryptionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketEncryption",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?encryption`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketEncryptionResponse>(await this.execute(params, req, runtime), new GetBucketEncryptionResponse({}));
  }

  async getBucketEncryption(bucket: string): Promise<GetBucketEncryptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketEncryptionWithOptions(bucket, headers, runtime);
  }

  async getBucketInfoWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketInfoResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketInfo",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?bucketInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketInfoResponse>(await this.execute(params, req, runtime), new GetBucketInfoResponse({}));
  }

  async getBucketInfo(bucket: string): Promise<GetBucketInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketInfoWithOptions(bucket, headers, runtime);
  }

  async getBucketInventoryWithOptions(bucket: string, request: GetBucketInventoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketInventoryResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inventoryId)) {
      query["inventoryId"] = request.inventoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBucketInventory",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?inventory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketInventoryResponse>(await this.execute(params, req, runtime), new GetBucketInventoryResponse({}));
  }

  async getBucketInventory(bucket: string, request: GetBucketInventoryRequest): Promise<GetBucketInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketInventoryWithOptions(bucket, request, headers, runtime);
  }

  async getBucketLifecycleWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketLifecycleResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketLifecycle",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?lifecycle`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketLifecycleResponse>(await this.execute(params, req, runtime), new GetBucketLifecycleResponse({}));
  }

  async getBucketLifecycle(bucket: string): Promise<GetBucketLifecycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketLifecycleWithOptions(bucket, headers, runtime);
  }

  async getBucketLocationWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketLocationResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketLocation",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?location`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketLocationResponse>(await this.execute(params, req, runtime), new GetBucketLocationResponse({}));
  }

  async getBucketLocation(bucket: string): Promise<GetBucketLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketLocationWithOptions(bucket, headers, runtime);
  }

  async getBucketLoggingWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketLoggingResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketLogging",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?logging`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketLoggingResponse>(await this.execute(params, req, runtime), new GetBucketLoggingResponse({}));
  }

  async getBucketLogging(bucket: string): Promise<GetBucketLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketLoggingWithOptions(bucket, headers, runtime);
  }

  async getBucketPolicyWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketPolicyResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketPolicy",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<GetBucketPolicyResponse>(await this.execute(params, req, runtime), new GetBucketPolicyResponse({}));
  }

  async getBucketPolicy(bucket: string): Promise<GetBucketPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketPolicyWithOptions(bucket, headers, runtime);
  }

  async getBucketRefererWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketRefererResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketReferer",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?referer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "json",
    });
    return $tea.cast<GetBucketRefererResponse>(await this.execute(params, req, runtime), new GetBucketRefererResponse({}));
  }

  async getBucketReferer(bucket: string): Promise<GetBucketRefererResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketRefererWithOptions(bucket, headers, runtime);
  }

  async getBucketReplicationWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketReplicationResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketReplication",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?replication`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketReplicationResponse>(await this.execute(params, req, runtime), new GetBucketReplicationResponse({}));
  }

  async getBucketReplication(bucket: string): Promise<GetBucketReplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketReplicationWithOptions(bucket, headers, runtime);
  }

  async getBucketReplicationLocationWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketReplicationLocationResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketReplicationLocation",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?replicationLocation`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketReplicationLocationResponse>(await this.execute(params, req, runtime), new GetBucketReplicationLocationResponse({}));
  }

  async getBucketReplicationLocation(bucket: string): Promise<GetBucketReplicationLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketReplicationLocationWithOptions(bucket, headers, runtime);
  }

  async getBucketReplicationProgressWithOptions(bucket: string, request: GetBucketReplicationProgressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketReplicationProgressResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleId)) {
      query["rule-id"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBucketReplicationProgress",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?replicationProgress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketReplicationProgressResponse>(await this.execute(params, req, runtime), new GetBucketReplicationProgressResponse({}));
  }

  async getBucketReplicationProgress(bucket: string, request: GetBucketReplicationProgressRequest): Promise<GetBucketReplicationProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketReplicationProgressWithOptions(bucket, request, headers, runtime);
  }

  async getBucketRequestPaymentWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketRequestPaymentResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketRequestPayment",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?requestPayment`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketRequestPaymentResponse>(await this.execute(params, req, runtime), new GetBucketRequestPaymentResponse({}));
  }

  async getBucketRequestPayment(bucket: string): Promise<GetBucketRequestPaymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketRequestPaymentWithOptions(bucket, headers, runtime);
  }

  async getBucketTagsWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketTagsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketTags",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?tagging`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketTagsResponse>(await this.execute(params, req, runtime), new GetBucketTagsResponse({}));
  }

  async getBucketTags(bucket: string): Promise<GetBucketTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketTagsWithOptions(bucket, headers, runtime);
  }

  async getBucketTransferAccelerationWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketTransferAccelerationResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketTransferAcceleration",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?transferAcceleration`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketTransferAccelerationResponse>(await this.execute(params, req, runtime), new GetBucketTransferAccelerationResponse({}));
  }

  async getBucketTransferAcceleration(bucket: string): Promise<GetBucketTransferAccelerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketTransferAccelerationWithOptions(bucket, headers, runtime);
  }

  async getBucketVersioningWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketVersioningResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketVersioning",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?versioning`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketVersioningResponse>(await this.execute(params, req, runtime), new GetBucketVersioningResponse({}));
  }

  async getBucketVersioning(bucket: string): Promise<GetBucketVersioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketVersioningWithOptions(bucket, headers, runtime);
  }

  async getBucketWebsiteWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketWebsiteResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketWebsite",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?website`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketWebsiteResponse>(await this.execute(params, req, runtime), new GetBucketWebsiteResponse({}));
  }

  async getBucketWebsite(bucket: string): Promise<GetBucketWebsiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketWebsiteWithOptions(bucket, headers, runtime);
  }

  async getBucketWormWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBucketWormResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBucketWorm",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?worm`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetBucketWormResponse>(await this.execute(params, req, runtime), new GetBucketWormResponse({}));
  }

  async getBucketWorm(bucket: string): Promise<GetBucketWormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBucketWormWithOptions(bucket, headers, runtime);
  }

  async getLiveChannelHistoryWithOptions(bucket: string, channel: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLiveChannelHistoryResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLiveChannelHistory",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}?live&comp=history`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetLiveChannelHistoryResponse>(await this.execute(params, req, runtime), new GetLiveChannelHistoryResponse({}));
  }

  async getLiveChannelHistory(bucket: string, channel: string): Promise<GetLiveChannelHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLiveChannelHistoryWithOptions(bucket, channel, headers, runtime);
  }

  async getLiveChannelInfoWithOptions(bucket: string, channel: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLiveChannelInfoResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLiveChannelInfo",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}?live`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetLiveChannelInfoResponse>(await this.execute(params, req, runtime), new GetLiveChannelInfoResponse({}));
  }

  async getLiveChannelInfo(bucket: string, channel: string): Promise<GetLiveChannelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLiveChannelInfoWithOptions(bucket, channel, headers, runtime);
  }

  async getLiveChannelStatWithOptions(bucket: string, channel: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLiveChannelStatResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLiveChannelStat",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}?live&comp=stat`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetLiveChannelStatResponse>(await this.execute(params, req, runtime), new GetLiveChannelStatResponse({}));
  }

  async getLiveChannelStat(bucket: string, channel: string): Promise<GetLiveChannelStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLiveChannelStatWithOptions(bucket, channel, headers, runtime);
  }

  /**
    * **Usage notes**
    * - By default, the GetObject operation supports access over HTTP and HTTPS. To impose a limit on access to a bucket only over HTTPS, configure a bucket policy for the bucket to specify the access method. For more information, see [Configure bucket policies to authorize other users to access OSS resources](~~85111~~).
    * - If the storage class of the object that you want to query is Archive, you must send a RestoreObject request to restore the object before you call the GetObject operation.
    * **Versioning**
    * By default, only the current version of an object is returned after GetObject is called. 
    * If the version ID of the object is specified in the request, OSS returns the specified version of the object. If the version ID is set to null in the request, OSS returns the version of the object whose version ID is null.
    *
    * @param request GetObjectRequest
    * @param headers GetObjectHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetObjectResponse
   */
  async getObjectWithOptions(bucket: string, key: string, request: GetObjectRequest, headers: GetObjectHeaders, runtime: $Util.RuntimeOptions): Promise<GetObjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.responseCacheControl)) {
      query["response-cache-control"] = request.responseCacheControl;
    }

    if (!Util.isUnset(request.responseContentDisposition)) {
      query["response-content-disposition"] = request.responseContentDisposition;
    }

    if (!Util.isUnset(request.responseContentEncoding)) {
      query["response-content-encoding"] = request.responseContentEncoding;
    }

    if (!Util.isUnset(request.responseContentLanguage)) {
      query["response-content-language"] = request.responseContentLanguage;
    }

    if (!Util.isUnset(request.responseContentType)) {
      query["response-content-type"] = request.responseContentType;
    }

    if (!Util.isUnset(request.responseExpires)) {
      query["response-expires"] = request.responseExpires;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.acceptEncoding)) {
      realHeaders["Accept-Encoding"] = Util.toJSONString(headers.acceptEncoding);
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.ifModifiedSince)) {
      realHeaders["If-Modified-Since"] = Util.toJSONString(headers.ifModifiedSince);
    }

    if (!Util.isUnset(headers.ifNoneMatch)) {
      realHeaders["If-None-Match"] = Util.toJSONString(headers.ifNoneMatch);
    }

    if (!Util.isUnset(headers.ifUnmodifiedSince)) {
      realHeaders["If-Unmodified-Since"] = Util.toJSONString(headers.ifUnmodifiedSince);
    }

    if (!Util.isUnset(headers.range)) {
      realHeaders["Range"] = Util.toJSONString(headers.range);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "binary",
    });
    return $tea.cast<GetObjectResponse>(await this.execute(params, req, runtime), new GetObjectResponse({}));
  }

  /**
    * **Usage notes**
    * - By default, the GetObject operation supports access over HTTP and HTTPS. To impose a limit on access to a bucket only over HTTPS, configure a bucket policy for the bucket to specify the access method. For more information, see [Configure bucket policies to authorize other users to access OSS resources](~~85111~~).
    * - If the storage class of the object that you want to query is Archive, you must send a RestoreObject request to restore the object before you call the GetObject operation.
    * **Versioning**
    * By default, only the current version of an object is returned after GetObject is called. 
    * If the version ID of the object is specified in the request, OSS returns the specified version of the object. If the version ID is set to null in the request, OSS returns the version of the object whose version ID is null.
    *
    * @param request GetObjectRequest
    * @return GetObjectResponse
   */
  async getObject(bucket: string, key: string, request: GetObjectRequest): Promise<GetObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetObjectHeaders({ });
    return await this.getObjectWithOptions(bucket, key, request, headers, runtime);
  }

  async getObjectAclWithOptions(bucket: string, key: string, request: GetObjectAclRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetObjectAclResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetObjectAcl",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetObjectAclResponse>(await this.execute(params, req, runtime), new GetObjectAclResponse({}));
  }

  async getObjectAcl(bucket: string, key: string, request: GetObjectAclRequest): Promise<GetObjectAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getObjectAclWithOptions(bucket, key, request, headers, runtime);
  }

  async getObjectMetaWithOptions(bucket: string, key: string, request: GetObjectMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetObjectMetaResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetObjectMeta",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?objectMeta`,
      method: "HEAD",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "none",
    });
    return $tea.cast<GetObjectMetaResponse>(await this.execute(params, req, runtime), new GetObjectMetaResponse({}));
  }

  async getObjectMeta(bucket: string, key: string, request: GetObjectMetaRequest): Promise<GetObjectMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getObjectMetaWithOptions(bucket, key, request, headers, runtime);
  }

  async getObjectTaggingWithOptions(bucket: string, key: string, request: GetObjectTaggingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetObjectTaggingResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetObjectTagging",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?tagging`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetObjectTaggingResponse>(await this.execute(params, req, runtime), new GetObjectTaggingResponse({}));
  }

  async getObjectTagging(bucket: string, key: string, request: GetObjectTaggingRequest): Promise<GetObjectTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getObjectTaggingWithOptions(bucket, key, request, headers, runtime);
  }

  async getSymlinkWithOptions(bucket: string, key: string, request: GetSymlinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSymlinkResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSymlink",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?symlink`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<GetSymlinkResponse>(await this.execute(params, req, runtime), new GetSymlinkResponse({}));
  }

  async getSymlink(bucket: string, key: string, request: GetSymlinkRequest): Promise<GetSymlinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSymlinkWithOptions(bucket, key, request, headers, runtime);
  }

  async getVodPlaylistWithOptions(bucket: string, channel: string, request: GetVodPlaylistRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetVodPlaylistResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVodPlaylist",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}?vod`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "binary",
    });
    return $tea.cast<GetVodPlaylistResponse>(await this.execute(params, req, runtime), new GetVodPlaylistResponse({}));
  }

  async getVodPlaylist(bucket: string, channel: string, request: GetVodPlaylistRequest): Promise<GetVodPlaylistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVodPlaylistWithOptions(bucket, channel, request, headers, runtime);
  }

  /**
    * - When you call this operation, the object content is not returned in the results. 
    * - By default, you can call the HeadObject operation to query the metadata of the object of the current version. If the current version of the object is a delete marker, OSS returns 404 Not Found. If you specify a version ID in the request, OSS returns the metadata of the object of the specified version.
    *
    * @param request HeadObjectRequest
    * @param headers HeadObjectHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return HeadObjectResponse
   */
  async headObjectWithOptions(bucket: string, key: string, request: HeadObjectRequest, headers: HeadObjectHeaders, runtime: $Util.RuntimeOptions): Promise<HeadObjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.ifModifiedSince)) {
      realHeaders["If-Modified-Since"] = Util.toJSONString(headers.ifModifiedSince);
    }

    if (!Util.isUnset(headers.ifNoneMatch)) {
      realHeaders["If-None-Match"] = Util.toJSONString(headers.ifNoneMatch);
    }

    if (!Util.isUnset(headers.ifUnmodifiedSince)) {
      realHeaders["If-Unmodified-Since"] = Util.toJSONString(headers.ifUnmodifiedSince);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HeadObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "HEAD",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "none",
    });
    return $tea.cast<HeadObjectResponse>(await this.execute(params, req, runtime), new HeadObjectResponse({}));
  }

  /**
    * - When you call this operation, the object content is not returned in the results. 
    * - By default, you can call the HeadObject operation to query the metadata of the object of the current version. If the current version of the object is a delete marker, OSS returns 404 Not Found. If you specify a version ID in the request, OSS returns the metadata of the object of the specified version.
    *
    * @param request HeadObjectRequest
    * @return HeadObjectResponse
   */
  async headObject(bucket: string, key: string, request: HeadObjectRequest): Promise<HeadObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HeadObjectHeaders({ });
    return await this.headObjectWithOptions(bucket, key, request, headers, runtime);
  }

  async initiateBucketWormWithOptions(bucket: string, request: InitiateBucketWormRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InitiateBucketWormResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.initiateWormConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "InitiateBucketWorm",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?worm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<InitiateBucketWormResponse>(await this.execute(params, req, runtime), new InitiateBucketWormResponse({}));
  }

  async initiateBucketWorm(bucket: string, request: InitiateBucketWormRequest): Promise<InitiateBucketWormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initiateBucketWormWithOptions(bucket, request, headers, runtime);
  }

  /**
    * - When you call the InitiateMultipartUpload operation, OSS creates and returns a unique upload ID to identify the multipart upload task. You can initiate operations such as stopping or querying the multipart upload task by using this upload ID.
    * - When you initiate a multipart upload request to upload an object, the existing object that has the same name is not affected.
    * - If you want to calculate the signature for authentication when you call this operation, you must add `?uploads` to `CanonicalizedResource`.
    *
    * @param request InitiateMultipartUploadRequest
    * @param headers InitiateMultipartUploadHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return InitiateMultipartUploadResponse
   */
  async initiateMultipartUploadWithOptions(bucket: string, key: string, request: InitiateMultipartUploadRequest, headers: InitiateMultipartUploadHeaders, runtime: $Util.RuntimeOptions): Promise<InitiateMultipartUploadResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodingType)) {
      query["encoding-type"] = request.encodingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.cacheControl)) {
      realHeaders["Cache-Control"] = Util.toJSONString(headers.cacheControl);
    }

    if (!Util.isUnset(headers.contentDisposition)) {
      realHeaders["Content-Disposition"] = Util.toJSONString(headers.contentDisposition);
    }

    if (!Util.isUnset(headers.contentEncoding)) {
      realHeaders["Content-Encoding"] = Util.toJSONString(headers.contentEncoding);
    }

    if (!Util.isUnset(headers.expires)) {
      realHeaders["Expires"] = Util.toJSONString(headers.expires);
    }

    if (!Util.isUnset(headers.forbidOverwrite)) {
      realHeaders["x-oss-forbid-overwrite"] = Util.toJSONString(headers.forbidOverwrite);
    }

    if (!Util.isUnset(headers.sseDataEncryption)) {
      realHeaders["x-oss-server-side-data-encryption"] = Util.toJSONString(headers.sseDataEncryption);
    }

    if (!Util.isUnset(headers.serverSideEncryption)) {
      realHeaders["x-oss-server-side-encryption"] = Util.toJSONString(headers.serverSideEncryption);
    }

    if (!Util.isUnset(headers.sseKeyId)) {
      realHeaders["x-oss-server-side-encryption-key-id"] = Util.toJSONString(headers.sseKeyId);
    }

    if (!Util.isUnset(headers.storageClass)) {
      realHeaders["x-oss-storage-class"] = Util.toJSONString(headers.storageClass);
    }

    if (!Util.isUnset(headers.tagging)) {
      realHeaders["x-oss-tagging"] = Util.toJSONString(headers.tagging);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitiateMultipartUpload",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?uploads`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<InitiateMultipartUploadResponse>(await this.execute(params, req, runtime), new InitiateMultipartUploadResponse({}));
  }

  /**
    * - When you call the InitiateMultipartUpload operation, OSS creates and returns a unique upload ID to identify the multipart upload task. You can initiate operations such as stopping or querying the multipart upload task by using this upload ID.
    * - When you initiate a multipart upload request to upload an object, the existing object that has the same name is not affected.
    * - If you want to calculate the signature for authentication when you call this operation, you must add `?uploads` to `CanonicalizedResource`.
    *
    * @param request InitiateMultipartUploadRequest
    * @return InitiateMultipartUploadResponse
   */
  async initiateMultipartUpload(bucket: string, key: string, request: InitiateMultipartUploadRequest): Promise<InitiateMultipartUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InitiateMultipartUploadHeaders({ });
    return await this.initiateMultipartUploadWithOptions(bucket, key, request, headers, runtime);
  }

  async listBucketInventoryWithOptions(bucket: string, request: ListBucketInventoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListBucketInventoryResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.continuationToken)) {
      query["continuation-token"] = request.continuationToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBucketInventory",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?inventory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListBucketInventoryResponse>(await this.execute(params, req, runtime), new ListBucketInventoryResponse({}));
  }

  async listBucketInventory(bucket: string, request: ListBucketInventoryRequest): Promise<ListBucketInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBucketInventoryWithOptions(bucket, request, headers, runtime);
  }

  async listBucketsWithOptions(request: ListBucketsRequest, headers: ListBucketsHeaders, runtime: $Util.RuntimeOptions): Promise<ListBucketsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxKeys)) {
      query["max-keys"] = request.maxKeys;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xOssResourceGroupId)) {
      realHeaders["x-oss-resource-group-id"] = Util.toJSONString(headers.xOssResourceGroupId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBuckets",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListBucketsResponse>(await this.execute(params, req, runtime), new ListBucketsResponse({}));
  }

  async listBuckets(request: ListBucketsRequest): Promise<ListBucketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListBucketsHeaders({ });
    return await this.listBucketsWithOptions(request, headers, runtime);
  }

  async listLiveChannelWithOptions(bucket: string, request: ListLiveChannelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLiveChannelResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxKeys)) {
      query["max-keys"] = request.maxKeys;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLiveChannel",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?live`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListLiveChannelResponse>(await this.execute(params, req, runtime), new ListLiveChannelResponse({}));
  }

  async listLiveChannel(bucket: string, request: ListLiveChannelRequest): Promise<ListLiveChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLiveChannelWithOptions(bucket, request, headers, runtime);
  }

  async listMultipartUploadsWithOptions(bucket: string, request: ListMultipartUploadsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMultipartUploadsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.delimiter)) {
      query["delimiter"] = request.delimiter;
    }

    if (!Util.isUnset(request.encodingType)) {
      query["encoding-type"] = request.encodingType;
    }

    if (!Util.isUnset(request.keyMarker)) {
      query["key-marker"] = request.keyMarker;
    }

    if (!Util.isUnset(request.maxUploads)) {
      query["max-uploads"] = request.maxUploads;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.uploadIdMarker)) {
      query["upload-id-marker"] = request.uploadIdMarker;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMultipartUploads",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?uploads`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListMultipartUploadsResponse>(await this.execute(params, req, runtime), new ListMultipartUploadsResponse({}));
  }

  async listMultipartUploads(bucket: string, request: ListMultipartUploadsRequest): Promise<ListMultipartUploadsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMultipartUploadsWithOptions(bucket, request, headers, runtime);
  }

  async listObjectVersionsWithOptions(bucket: string, request: ListObjectVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListObjectVersionsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.delimiter)) {
      query["delimiter"] = request.delimiter;
    }

    if (!Util.isUnset(request.encodingType)) {
      query["encoding-type"] = request.encodingType;
    }

    if (!Util.isUnset(request.keyMarker)) {
      query["key-marker"] = request.keyMarker;
    }

    if (!Util.isUnset(request.maxKeys)) {
      query["max-keys"] = request.maxKeys;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.versionIdMarker)) {
      query["version-id-marker"] = request.versionIdMarker;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListObjectVersions",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListObjectVersionsResponse>(await this.execute(params, req, runtime), new ListObjectVersionsResponse({}));
  }

  async listObjectVersions(bucket: string, request: ListObjectVersionsRequest): Promise<ListObjectVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listObjectVersionsWithOptions(bucket, request, headers, runtime);
  }

  async listObjectsWithOptions(bucket: string, request: ListObjectsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListObjectsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.delimiter)) {
      query["delimiter"] = request.delimiter;
    }

    if (!Util.isUnset(request.encodingType)) {
      query["encoding-type"] = request.encodingType;
    }

    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxKeys)) {
      query["max-keys"] = request.maxKeys;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListObjects",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListObjectsResponse>(await this.execute(params, req, runtime), new ListObjectsResponse({}));
  }

  async listObjects(bucket: string, request: ListObjectsRequest): Promise<ListObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listObjectsWithOptions(bucket, request, headers, runtime);
  }

  async listObjectsV2WithOptions(bucket: string, request: ListObjectsV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListObjectsV2Response> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.continuationToken)) {
      query["continuation-token"] = request.continuationToken;
    }

    if (!Util.isUnset(request.delimiter)) {
      query["delimiter"] = request.delimiter;
    }

    if (!Util.isUnset(request.encodingType)) {
      query["encoding-type"] = request.encodingType;
    }

    if (!Util.isUnset(request.fetchOwner)) {
      query["fetch-owner"] = request.fetchOwner;
    }

    if (!Util.isUnset(request.maxKeys)) {
      query["max-keys"] = request.maxKeys;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startAfter)) {
      query["start-after"] = request.startAfter;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListObjectsV2",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?list-type=2`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListObjectsV2Response>(await this.execute(params, req, runtime), new ListObjectsV2Response({}));
  }

  async listObjectsV2(bucket: string, request: ListObjectsV2Request): Promise<ListObjectsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listObjectsV2WithOptions(bucket, request, headers, runtime);
  }

  async listPartsWithOptions(bucket: string, key: string, tmpReq: ListPartsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPartsResponse> {
    Util.validateModel(tmpReq);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let request = new ListPartsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encodingType)) {
      request.encodingTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encodingType, "encoding-type", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodingTypeShrink)) {
      query["encoding-type"] = request.encodingTypeShrink;
    }

    if (!Util.isUnset(request.maxParts)) {
      query["max-parts"] = request.maxParts;
    }

    if (!Util.isUnset(request.partNumberMarker)) {
      query["part-number-marker"] = request.partNumberMarker;
    }

    if (!Util.isUnset(request.uploadId)) {
      query["uploadId"] = request.uploadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListParts",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<ListPartsResponse>(await this.execute(params, req, runtime), new ListPartsResponse({}));
  }

  async listParts(bucket: string, key: string, request: ListPartsRequest): Promise<ListPartsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPartsWithOptions(bucket, key, request, headers, runtime);
  }

  async optionObjectWithOptions(bucket: string, key: string, headers: OptionObjectHeaders, runtime: $Util.RuntimeOptions): Promise<OptionObjectResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accessControlRequestHeaders)) {
      realHeaders["Access-Control-Request-Headers"] = Util.toJSONString(headers.accessControlRequestHeaders);
    }

    if (!Util.isUnset(headers.accessControlRequestMethod)) {
      realHeaders["Access-Control-Request-Method"] = Util.toJSONString(headers.accessControlRequestMethod);
    }

    if (!Util.isUnset(headers.origin)) {
      realHeaders["Origin"] = Util.toJSONString(headers.origin);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "OptionObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "OPTIONS",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<OptionObjectResponse>(await this.execute(params, req, runtime), new OptionObjectResponse({}));
  }

  async optionObject(bucket: string, key: string): Promise<OptionObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OptionObjectHeaders({ });
    return await this.optionObjectWithOptions(bucket, key, headers, runtime);
  }

  /**
    * - 
    *   The object that is uploaded by calling the PostObject operation cannot be
    *   larger than 5 GB in size.
    * - 
    *   To initiate a PostObject request to a bucket, you must have write permissions
    *   on the bucket. If the ACL of the bucket to which you want to initiate a
    *   PostObject request is public-read-write, you do not need to sign the
    *   PostObject request. In other cases, Object Storage Service (OSS) verifies the
    *   signature information contained in the request.
    * - 
    *   Unlike the PutObject operation, the PostObject operation uses an AccessKey
    *   secret to calculate the signature for the policy form field. The calculated
    *   signature string is used as the value of the Signature form field. OSS checks
    *   this value to verify the validity of the signature.
    * - 
    *   The URL of the submitted form is the domain name of the bucket. You do not
    *   need to specify the object that you want to upload in the URL. In other words,
    *   the request line is in the format of `POST T/ HTTP/1.1` instead of `POST
    *   /ObjectName HTTP/1.1`.
    * - 
    *   OSS does not check the signature information that is contained in headers or
    *   URLs in PostObject requests.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return PostObjectResponse
   */
  async postObjectWithOptions(bucket: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PostObjectResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PostObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "multiFormData",
      bodyType: "xml",
    });
    return $tea.cast<PostObjectResponse>(await this.execute(params, req, runtime), new PostObjectResponse({}));
  }

  /**
    * - 
    *   The object that is uploaded by calling the PostObject operation cannot be
    *   larger than 5 GB in size.
    * - 
    *   To initiate a PostObject request to a bucket, you must have write permissions
    *   on the bucket. If the ACL of the bucket to which you want to initiate a
    *   PostObject request is public-read-write, you do not need to sign the
    *   PostObject request. In other cases, Object Storage Service (OSS) verifies the
    *   signature information contained in the request.
    * - 
    *   Unlike the PutObject operation, the PostObject operation uses an AccessKey
    *   secret to calculate the signature for the policy form field. The calculated
    *   signature string is used as the value of the Signature form field. OSS checks
    *   this value to verify the validity of the signature.
    * - 
    *   The URL of the submitted form is the domain name of the bucket. You do not
    *   need to specify the object that you want to upload in the URL. In other words,
    *   the request line is in the format of `POST T/ HTTP/1.1` instead of `POST
    *   /ObjectName HTTP/1.1`.
    * - 
    *   OSS does not check the signature information that is contained in headers or
    *   URLs in PostObject requests.
    *
    * @return PostObjectResponse
   */
  async postObject(bucket: string): Promise<PostObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.postObjectWithOptions(bucket, headers, runtime);
  }

  async postVodPlaylistWithOptions(bucket: string, channel: string, playlist: string, request: PostVodPlaylistRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PostVodPlaylistResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PostVodPlaylist",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}/${playlist}?vod`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PostVodPlaylistResponse>(await this.execute(params, req, runtime), new PostVodPlaylistResponse({}));
  }

  async postVodPlaylist(bucket: string, channel: string, playlist: string, request: PostVodPlaylistRequest): Promise<PostVodPlaylistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.postVodPlaylistWithOptions(bucket, channel, playlist, request, headers, runtime);
  }

  async putBucketWithOptions(bucket: string, request: PutBucketRequest, headers: PutBucketHeaders, runtime: $Util.RuntimeOptions): Promise<PutBucketResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.acl)) {
      realHeaders["x-oss-acl"] = Util.toJSONString(headers.acl);
    }

    if (!Util.isUnset(headers.xOssResourceGroupId)) {
      realHeaders["x-oss-resource-group-id"] = Util.toJSONString(headers.xOssResourceGroupId);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.createBucketConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucket",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketResponse>(await this.execute(params, req, runtime), new PutBucketResponse({}));
  }

  async putBucket(bucket: string, request: PutBucketRequest): Promise<PutBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutBucketHeaders({ });
    return await this.putBucketWithOptions(bucket, request, headers, runtime);
  }

  async putBucketAclWithOptions(bucket: string, headers: PutBucketAclHeaders, runtime: $Util.RuntimeOptions): Promise<PutBucketAclResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.acl)) {
      realHeaders["x-oss-acl"] = Util.toJSONString(headers.acl);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "PutBucketAcl",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?acl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketAclResponse>(await this.execute(params, req, runtime), new PutBucketAclResponse({}));
  }

  async putBucketAcl(bucket: string): Promise<PutBucketAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutBucketAclHeaders({ });
    return await this.putBucketAclWithOptions(bucket, headers, runtime);
  }

  async putBucketCorsWithOptions(bucket: string, request: PutBucketCorsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketCorsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.cORSConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketCors",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?cors`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketCorsResponse>(await this.execute(params, req, runtime), new PutBucketCorsResponse({}));
  }

  async putBucketCors(bucket: string, request: PutBucketCorsRequest): Promise<PutBucketCorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketCorsWithOptions(bucket, request, headers, runtime);
  }

  async putBucketEncryptionWithOptions(bucket: string, request: PutBucketEncryptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketEncryptionResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.serverSideEncryptionRule),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketEncryption",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?encryption`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketEncryptionResponse>(await this.execute(params, req, runtime), new PutBucketEncryptionResponse({}));
  }

  async putBucketEncryption(bucket: string, request: PutBucketEncryptionRequest): Promise<PutBucketEncryptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketEncryptionWithOptions(bucket, request, headers, runtime);
  }

  async putBucketInventoryWithOptions(bucket: string, request: PutBucketInventoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketInventoryResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inventoryId)) {
      query["inventoryId"] = request.inventoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.inventoryConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketInventory",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?inventory`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketInventoryResponse>(await this.execute(params, req, runtime), new PutBucketInventoryResponse({}));
  }

  async putBucketInventory(bucket: string, request: PutBucketInventoryRequest): Promise<PutBucketInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketInventoryWithOptions(bucket, request, headers, runtime);
  }

  async putBucketLifecycleWithOptions(bucket: string, request: PutBucketLifecycleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketLifecycleResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.lifecycleConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketLifecycle",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?lifecycle`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketLifecycleResponse>(await this.execute(params, req, runtime), new PutBucketLifecycleResponse({}));
  }

  async putBucketLifecycle(bucket: string, request: PutBucketLifecycleRequest): Promise<PutBucketLifecycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketLifecycleWithOptions(bucket, request, headers, runtime);
  }

  async putBucketLoggingWithOptions(bucket: string, request: PutBucketLoggingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketLoggingResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.bucketLoggingStatus),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketLogging",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?logging`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketLoggingResponse>(await this.execute(params, req, runtime), new PutBucketLoggingResponse({}));
  }

  async putBucketLogging(bucket: string, request: PutBucketLoggingRequest): Promise<PutBucketLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketLoggingWithOptions(bucket, request, headers, runtime);
  }

  async putBucketPolicyWithOptions(bucket: string, request: PutBucketPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketPolicyResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: request.policy,
    });
    let params = new $OpenApi.Params({
      action: "PutBucketPolicy",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?policy`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutBucketPolicyResponse>(await this.execute(params, req, runtime), new PutBucketPolicyResponse({}));
  }

  async putBucketPolicy(bucket: string, request: PutBucketPolicyRequest): Promise<PutBucketPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketPolicyWithOptions(bucket, request, headers, runtime);
  }

  async putBucketRefererWithOptions(bucket: string, request: PutBucketRefererRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketRefererResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.refererConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketReferer",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?referer`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketRefererResponse>(await this.execute(params, req, runtime), new PutBucketRefererResponse({}));
  }

  async putBucketReferer(bucket: string, request: PutBucketRefererRequest): Promise<PutBucketRefererResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketRefererWithOptions(bucket, request, headers, runtime);
  }

  async putBucketReplicationWithOptions(bucket: string, request: PutBucketReplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketReplicationResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.replicationConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketReplication",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?replication&comp=add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketReplicationResponse>(await this.execute(params, req, runtime), new PutBucketReplicationResponse({}));
  }

  async putBucketReplication(bucket: string, request: PutBucketReplicationRequest): Promise<PutBucketReplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketReplicationWithOptions(bucket, request, headers, runtime);
  }

  async putBucketRequestPaymentWithOptions(bucket: string, request: PutBucketRequestPaymentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketRequestPaymentResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.requestPaymentConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketRequestPayment",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?requestPayment`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketRequestPaymentResponse>(await this.execute(params, req, runtime), new PutBucketRequestPaymentResponse({}));
  }

  async putBucketRequestPayment(bucket: string, request: PutBucketRequestPaymentRequest): Promise<PutBucketRequestPaymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketRequestPaymentWithOptions(bucket, request, headers, runtime);
  }

  async putBucketTagsWithOptions(bucket: string, request: PutBucketTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketTagsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.tagging),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketTags",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?tagging`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketTagsResponse>(await this.execute(params, req, runtime), new PutBucketTagsResponse({}));
  }

  async putBucketTags(bucket: string, request: PutBucketTagsRequest): Promise<PutBucketTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketTagsWithOptions(bucket, request, headers, runtime);
  }

  async putBucketTransferAccelerationWithOptions(bucket: string, request: PutBucketTransferAccelerationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketTransferAccelerationResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.transferAccelerationConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketTransferAcceleration",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?transferAcceleration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketTransferAccelerationResponse>(await this.execute(params, req, runtime), new PutBucketTransferAccelerationResponse({}));
  }

  async putBucketTransferAcceleration(bucket: string, request: PutBucketTransferAccelerationRequest): Promise<PutBucketTransferAccelerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketTransferAccelerationWithOptions(bucket, request, headers, runtime);
  }

  async putBucketVersioningWithOptions(bucket: string, request: PutBucketVersioningRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketVersioningResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.versioningConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketVersioning",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?versioning`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketVersioningResponse>(await this.execute(params, req, runtime), new PutBucketVersioningResponse({}));
  }

  async putBucketVersioning(bucket: string, request: PutBucketVersioningRequest): Promise<PutBucketVersioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketVersioningWithOptions(bucket, request, headers, runtime);
  }

  async putBucketWebsiteWithOptions(bucket: string, request: PutBucketWebsiteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutBucketWebsiteResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.websiteConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutBucketWebsite",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/?website`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutBucketWebsiteResponse>(await this.execute(params, req, runtime), new PutBucketWebsiteResponse({}));
  }

  async putBucketWebsite(bucket: string, request: PutBucketWebsiteRequest): Promise<PutBucketWebsiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putBucketWebsiteWithOptions(bucket, request, headers, runtime);
  }

  async putLiveChannelWithOptions(bucket: string, channel: string, request: PutLiveChannelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutLiveChannelResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.liveChannelConfiguration),
    });
    let params = new $OpenApi.Params({
      action: "PutLiveChannel",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}?live`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutLiveChannelResponse>(await this.execute(params, req, runtime), new PutLiveChannelResponse({}));
  }

  async putLiveChannel(bucket: string, channel: string, request: PutLiveChannelRequest): Promise<PutLiveChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putLiveChannelWithOptions(bucket, channel, request, headers, runtime);
  }

  async putLiveChannelStatusWithOptions(bucket: string, channel: string, request: PutLiveChannelStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutLiveChannelStatusResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutLiveChannelStatus",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${channel}?live`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutLiveChannelStatusResponse>(await this.execute(params, req, runtime), new PutLiveChannelStatusResponse({}));
  }

  async putLiveChannelStatus(bucket: string, channel: string, request: PutLiveChannelStatusRequest): Promise<PutLiveChannelStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putLiveChannelStatusWithOptions(bucket, channel, request, headers, runtime);
  }

  async putObjectWithOptions(bucket: string, key: string, request: PutObjectRequest, headers: PutObjectHeaders, runtime: $Util.RuntimeOptions): Promise<PutObjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.forbidOverwrite)) {
      realHeaders["x-oss-forbid-overwrite"] = Util.toJSONString(headers.forbidOverwrite);
    }

    if (!Util.isUnset(headers.metaData)) {
      realHeaders["x-oss-meta-*"] = Util.toJSONString(headers.metaData);
    }

    if (!Util.isUnset(headers.acl)) {
      realHeaders["x-oss-object-acl"] = Util.toJSONString(headers.acl);
    }

    if (!Util.isUnset(headers.sseDataEncryption)) {
      realHeaders["x-oss-server-side-data-encryption"] = Util.toJSONString(headers.sseDataEncryption);
    }

    if (!Util.isUnset(headers.serverSideEncryption)) {
      realHeaders["x-oss-server-side-encryption"] = Util.toJSONString(headers.serverSideEncryption);
    }

    if (!Util.isUnset(headers.sseKeyId)) {
      realHeaders["x-oss-server-side-encryption-key-id"] = Util.toJSONString(headers.sseKeyId);
    }

    if (!Util.isUnset(headers.storageClass)) {
      realHeaders["x-oss-storage-class"] = Util.toJSONString(headers.storageClass);
    }

    if (!Util.isUnset(headers.tagging)) {
      realHeaders["x-oss-tagging"] = Util.toJSONString(headers.tagging);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "PutObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "binary",
      bodyType: "none",
    });
    return $tea.cast<PutObjectResponse>(await this.execute(params, req, runtime), new PutObjectResponse({}));
  }

  async putObject(bucket: string, key: string, request: PutObjectRequest): Promise<PutObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutObjectHeaders({ });
    return await this.putObjectWithOptions(bucket, key, request, headers, runtime);
  }

  async putObjectAclWithOptions(bucket: string, key: string, request: PutObjectAclRequest, headers: PutObjectAclHeaders, runtime: $Util.RuntimeOptions): Promise<PutObjectAclResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.acl)) {
      realHeaders["x-oss-object-acl"] = Util.toJSONString(headers.acl);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutObjectAcl",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?acl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutObjectAclResponse>(await this.execute(params, req, runtime), new PutObjectAclResponse({}));
  }

  async putObjectAcl(bucket: string, key: string, request: PutObjectAclRequest): Promise<PutObjectAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutObjectAclHeaders({ });
    return await this.putObjectAclWithOptions(bucket, key, request, headers, runtime);
  }

  async putObjectTaggingWithOptions(bucket: string, key: string, request: PutObjectTaggingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutObjectTaggingResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.tagging),
    });
    let params = new $OpenApi.Params({
      action: "PutObjectTagging",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?tagging`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutObjectTaggingResponse>(await this.execute(params, req, runtime), new PutObjectTaggingResponse({}));
  }

  async putObjectTagging(bucket: string, key: string, request: PutObjectTaggingRequest): Promise<PutObjectTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putObjectTaggingWithOptions(bucket, key, request, headers, runtime);
  }

  async putSymlinkWithOptions(bucket: string, key: string, headers: PutSymlinkHeaders, runtime: $Util.RuntimeOptions): Promise<PutSymlinkResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.forbidOverwrite)) {
      realHeaders["x-oss-forbid-overwrite"] = Util.toJSONString(headers.forbidOverwrite);
    }

    if (!Util.isUnset(headers.acl)) {
      realHeaders["x-oss-object-acl"] = Util.toJSONString(headers.acl);
    }

    if (!Util.isUnset(headers.storageClass)) {
      realHeaders["x-oss-storage-class"] = Util.toJSONString(headers.storageClass);
    }

    if (!Util.isUnset(headers.symlinkTargetKey)) {
      realHeaders["x-oss-symlink-target"] = Util.toJSONString(headers.symlinkTargetKey);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "PutSymlink",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?symlink`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<PutSymlinkResponse>(await this.execute(params, req, runtime), new PutSymlinkResponse({}));
  }

  async putSymlink(bucket: string, key: string): Promise<PutSymlinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutSymlinkHeaders({ });
    return await this.putSymlinkWithOptions(bucket, key, headers, runtime);
  }

  async restoreObjectWithOptions(bucket: string, key: string, request: RestoreObjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestoreObjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.versionId)) {
      query["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.restoreRequest),
    });
    let params = new $OpenApi.Params({
      action: "RestoreObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}?restore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<RestoreObjectResponse>(await this.execute(params, req, runtime), new RestoreObjectResponse({}));
  }

  async restoreObject(bucket: string, key: string, request: RestoreObjectRequest): Promise<RestoreObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreObjectWithOptions(bucket, key, request, headers, runtime);
  }

  async selectObjectWithOptions(bucket: string, key: string, request: SelectObjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SelectObjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.selectRequest),
    });
    let params = new $OpenApi.Params({
      action: "SelectObject",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "binary",
    });
    return $tea.cast<SelectObjectResponse>(await this.execute(params, req, runtime), new SelectObjectResponse({}));
  }

  async selectObject(bucket: string, key: string, request: SelectObjectRequest): Promise<SelectObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectObjectWithOptions(bucket, key, request, headers, runtime);
  }

  async uploadPartWithOptions(bucket: string, key: string, request: UploadPartRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadPartResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.partNumber)) {
      query["partNumber"] = request.partNumber;
    }

    if (!Util.isUnset(request.uploadId)) {
      query["uploadId"] = request.uploadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UploadPart",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "binary",
      bodyType: "xml",
    });
    return $tea.cast<UploadPartResponse>(await this.execute(params, req, runtime), new UploadPartResponse({}));
  }

  async uploadPart(bucket: string, key: string, request: UploadPartRequest): Promise<UploadPartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadPartWithOptions(bucket, key, request, headers, runtime);
  }

  async uploadPartCopyWithOptions(bucket: string, key: string, request: UploadPartCopyRequest, headers: UploadPartCopyHeaders, runtime: $Util.RuntimeOptions): Promise<UploadPartCopyResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["bucket"] = bucket;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.partNumber)) {
      query["partNumber"] = request.partNumber;
    }

    if (!Util.isUnset(request.uploadId)) {
      query["uploadId"] = request.uploadId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.copySource)) {
      realHeaders["x-oss-copy-source"] = Util.toJSONString(headers.copySource);
    }

    if (!Util.isUnset(headers.copySourceIfMatch)) {
      realHeaders["x-oss-copy-source-if-match"] = Util.toJSONString(headers.copySourceIfMatch);
    }

    if (!Util.isUnset(headers.copySourceIfModifiedSince)) {
      realHeaders["x-oss-copy-source-if-modified-since"] = Util.toJSONString(headers.copySourceIfModifiedSince);
    }

    if (!Util.isUnset(headers.copySourceIfNoneMatch)) {
      realHeaders["x-oss-copy-source-if-none-match"] = Util.toJSONString(headers.copySourceIfNoneMatch);
    }

    if (!Util.isUnset(headers.copySourceIfUnmodifiedSince)) {
      realHeaders["x-oss-copy-source-if-unmodified-since"] = Util.toJSONString(headers.copySourceIfUnmodifiedSince);
    }

    if (!Util.isUnset(headers.copySourceRange)) {
      realHeaders["x-oss-copy-source-range"] = Util.toJSONString(headers.copySourceRange);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadPartCopy",
      version: "2019-05-17",
      protocol: "HTTPS",
      pathname: `/${key}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "xml",
      bodyType: "xml",
    });
    return $tea.cast<UploadPartCopyResponse>(await this.execute(params, req, runtime), new UploadPartCopyResponse({}));
  }

  async uploadPartCopy(bucket: string, key: string, request: UploadPartCopyRequest): Promise<UploadPartCopyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UploadPartCopyHeaders({ });
    return await this.uploadPartCopyWithOptions(bucket, key, request, headers, runtime);
  }

}
