// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ClearInstanceStorageRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  storageSpace?: string;
  storageCategory?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      storageSpace: 'StorageSpace',
      storageCategory: 'StorageCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      storageSpace: 'string',
      storageCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearInstanceStorageResponseBody extends $tea.Model {
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

export class ClearInstanceStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearInstanceStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearInstanceStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhiteListRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ipVersion?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ipVersion: 'IpVersion',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ipVersion: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhiteListResponseBody extends $tea.Model {
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

export class ConfigInstanceWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigInstanceWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigInstanceWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogsRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  startTime?: string;
  endTime?: string;
  currentPage?: number;
  pageSize?: number;
  sort?: string;
  dir?: string;
  dbId?: string;
  queryString?: string;
  payload?: string;
  loginUser?: string;
  opType?: string;
  sip?: string;
  dip?: string;
  result?: string;
  accessid?: string;
  sessionid?: string;
  sqlid?: string;
  dbType?: string;
  sport?: string;
  dport?: string;
  smac?: string;
  dmac?: string;
  dbName?: string;
  clientPrg?: string;
  hostName?: string;
  clientUser?: string;
  sqlLen?: string;
  effectRow?: string;
  cost?: string;
  resultDesc?: string;
  dataSet?: string;
  alarmName?: string;
  alarmLevel?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      sort: 'Sort',
      dir: 'Dir',
      dbId: 'DbId',
      queryString: 'QueryString',
      payload: 'Payload',
      loginUser: 'LoginUser',
      opType: 'OpType',
      sip: 'Sip',
      dip: 'Dip',
      result: 'Result',
      accessid: 'Accessid',
      sessionid: 'Sessionid',
      sqlid: 'Sqlid',
      dbType: 'DbType',
      sport: 'Sport',
      dport: 'Dport',
      smac: 'Smac',
      dmac: 'Dmac',
      dbName: 'DbName',
      clientPrg: 'ClientPrg',
      hostName: 'HostName',
      clientUser: 'ClientUser',
      sqlLen: 'SqlLen',
      effectRow: 'EffectRow',
      cost: 'Cost',
      resultDesc: 'ResultDesc',
      dataSet: 'DataSet',
      alarmName: 'AlarmName',
      alarmLevel: 'AlarmLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      startTime: 'string',
      endTime: 'string',
      currentPage: 'number',
      pageSize: 'number',
      sort: 'string',
      dir: 'string',
      dbId: 'string',
      queryString: 'string',
      payload: 'string',
      loginUser: 'string',
      opType: 'string',
      sip: 'string',
      dip: 'string',
      result: 'string',
      accessid: 'string',
      sessionid: 'string',
      sqlid: 'string',
      dbType: 'string',
      sport: 'string',
      dport: 'string',
      smac: 'string',
      dmac: 'string',
      dbName: 'string',
      clientPrg: 'string',
      hostName: 'string',
      clientUser: 'string',
      sqlLen: 'string',
      effectRow: 'string',
      cost: 'string',
      resultDesc: 'string',
      dataSet: 'string',
      alarmName: 'string',
      alarmLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  auditLogs?: DescribeAuditLogsResponseBodyAuditLogs[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      auditLogs: 'AuditLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      auditLogs: { 'type': 'array', 'itemType': DescribeAuditLogsResponseBodyAuditLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuditLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuditLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttribueRequest extends $tea.Model {
  lang?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttribueResponseBody extends $tea.Model {
  requestId?: string;
  instanceAttribue?: DescribeInstanceAttribueResponseBodyInstanceAttribue;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceAttribue: 'InstanceAttribue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceAttribue: DescribeInstanceAttribueResponseBodyInstanceAttribue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttribueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAttribueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAttribueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceAttribute: 'InstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceAttribute: DescribeInstanceAttributeResponseBodyInstanceAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  pageSize?: number;
  currentPage?: number;
  regionId?: string;
  instanceStatus?: string;
  resourceGroupId?: string;
  instanceId?: string[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      regionId: 'RegionId',
      instanceStatus: 'InstanceStatus',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      currentPage: 'number',
      regionId: 'string',
      instanceStatus: 'string',
      resourceGroupId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  instances?: DescribeInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageResponseBody extends $tea.Model {
  requestId?: string;
  instanceStorages?: DescribeInstanceStorageResponseBodyInstanceStorages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceStorages: 'InstanceStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceStorages: { 'type': 'array', 'itemType': DescribeInstanceStorageResponseBodyInstanceStorages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewStatusRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewStatusResponseBody extends $tea.Model {
  requestId?: string;
  instances?: DescribeRenewStatusResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': DescribeRenewStatusResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRenewStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRenewStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionLogsRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  startTime?: string;
  endTime?: string;
  currentPage?: number;
  pageSize?: number;
  sort?: string;
  dir?: string;
  dbId?: string;
  sip?: string;
  sport?: string;
  loginUser?: string;
  dip?: string;
  dport?: string;
  sessionid?: string;
  dbType?: string;
  smac?: string;
  dmac?: string;
  clientPrg?: string;
  hostName?: string;
  clientUser?: string;
  dbName?: string;
  sessionStatus?: string;
  sqlCount?: string;
  reqFlow?: string;
  rspFlow?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      sort: 'Sort',
      dir: 'Dir',
      dbId: 'DbId',
      sip: 'Sip',
      sport: 'Sport',
      loginUser: 'LoginUser',
      dip: 'Dip',
      dport: 'Dport',
      sessionid: 'Sessionid',
      dbType: 'DbType',
      smac: 'Smac',
      dmac: 'Dmac',
      clientPrg: 'ClientPrg',
      hostName: 'HostName',
      clientUser: 'ClientUser',
      dbName: 'DbName',
      sessionStatus: 'SessionStatus',
      sqlCount: 'SqlCount',
      reqFlow: 'ReqFlow',
      rspFlow: 'RspFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      startTime: 'string',
      endTime: 'string',
      currentPage: 'number',
      pageSize: 'number',
      sort: 'string',
      dir: 'string',
      dbId: 'string',
      sip: 'string',
      sport: 'string',
      loginUser: 'string',
      dip: 'string',
      dport: 'string',
      sessionid: 'string',
      dbType: 'string',
      smac: 'string',
      dmac: 'string',
      clientPrg: 'string',
      hostName: 'string',
      clientUser: 'string',
      dbName: 'string',
      sessionStatus: 'string',
      sqlCount: 'string',
      reqFlow: 'string',
      rspFlow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionLogsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  sessionLogs?: DescribeSessionLogsResponseBodySessionLogs[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      sessionLogs: 'SessionLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      sessionLogs: { 'type': 'array', 'itemType': DescribeSessionLogsResponseBodySessionLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSessionLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSessionLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstancePublicAccessRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstancePublicAccessResponseBody extends $tea.Model {
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

export class DisableInstancePublicAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableInstancePublicAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableInstancePublicAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstancePublicAccessRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstancePublicAccessResponseBody extends $tea.Model {
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

export class EnableInstancePublicAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableInstancePublicAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableInstancePublicAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadAuthRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadAuthResponseBody extends $tea.Model {
  requestId?: string;
  uploadConfig?: GenerateUploadAuthResponseBodyUploadConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadConfig: 'UploadConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadConfig: GenerateUploadAuthResponseBodyUploadConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateUploadAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateUploadAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantServiceRoleRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantServiceRoleResponseBody extends $tea.Model {
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

export class GrantServiceRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantServiceRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantServiceRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  instanceId?: string;
  description?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
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

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceStorageRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  storageSpace?: string;
  storageCategory?: string;
  storageTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      storageSpace: 'StorageSpace',
      storageCategory: 'StorageCategory',
      storageTime: 'StorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      storageSpace: 'string',
      storageCategory: 'string',
      storageTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceStorageResponseBody extends $tea.Model {
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

export class ModifyInstanceStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  resourceId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponseBody extends $tea.Model {
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

export class RefundInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefundInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefundInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  instanceId?: string;
  vswitchId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vswitchId: 'VswitchId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vswitchId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
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

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogsResponseBodyAuditLogs extends $tea.Model {
  clientUser?: string;
  effectRow?: number;
  c5?: string;
  clientPrg?: string;
  accessid?: string;
  resultDesc?: string;
  sqlLen?: number;
  payload?: string;
  c4?: string;
  dateTime?: string;
  dbName?: string;
  dataSet?: string;
  sqlid?: string;
  relateIp?: string;
  alarmLevel?: number;
  c2?: string;
  dip?: string;
  result?: number;
  cost?: number;
  relateUser?: string;
  sip?: string;
  c3?: string;
  hostName?: string;
  alarmName?: string;
  pickIp?: string;
  relateInfo?: string;
  pickUser?: string;
  opType?: string;
  sport?: number;
  dataSetSize?: number;
  dbType?: string;
  alarmFlag?: number;
  smac?: number;
  dport?: number;
  c1?: string;
  dmac?: number;
  loginUser?: string;
  sessionid?: string;
  static names(): { [key: string]: string } {
    return {
      clientUser: 'ClientUser',
      effectRow: 'EffectRow',
      c5: 'C5',
      clientPrg: 'ClientPrg',
      accessid: 'Accessid',
      resultDesc: 'ResultDesc',
      sqlLen: 'SqlLen',
      payload: 'Payload',
      c4: 'C4',
      dateTime: 'DateTime',
      dbName: 'DbName',
      dataSet: 'DataSet',
      sqlid: 'Sqlid',
      relateIp: 'RelateIp',
      alarmLevel: 'AlarmLevel',
      c2: 'C2',
      dip: 'Dip',
      result: 'Result',
      cost: 'Cost',
      relateUser: 'RelateUser',
      sip: 'Sip',
      c3: 'C3',
      hostName: 'HostName',
      alarmName: 'AlarmName',
      pickIp: 'PickIp',
      relateInfo: 'RelateInfo',
      pickUser: 'PickUser',
      opType: 'OpType',
      sport: 'Sport',
      dataSetSize: 'DataSetSize',
      dbType: 'DbType',
      alarmFlag: 'AlarmFlag',
      smac: 'Smac',
      dport: 'Dport',
      c1: 'C1',
      dmac: 'Dmac',
      loginUser: 'LoginUser',
      sessionid: 'Sessionid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUser: 'string',
      effectRow: 'number',
      c5: 'string',
      clientPrg: 'string',
      accessid: 'string',
      resultDesc: 'string',
      sqlLen: 'number',
      payload: 'string',
      c4: 'string',
      dateTime: 'string',
      dbName: 'string',
      dataSet: 'string',
      sqlid: 'string',
      relateIp: 'string',
      alarmLevel: 'number',
      c2: 'string',
      dip: 'string',
      result: 'number',
      cost: 'number',
      relateUser: 'string',
      sip: 'string',
      c3: 'string',
      hostName: 'string',
      alarmName: 'string',
      pickIp: 'string',
      relateInfo: 'string',
      pickUser: 'string',
      opType: 'string',
      sport: 'number',
      dataSetSize: 'number',
      dbType: 'string',
      alarmFlag: 'number',
      smac: 'number',
      dport: 'number',
      c1: 'string',
      dmac: 'number',
      loginUser: 'string',
      sessionid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttribueResponseBodyInstanceAttribue extends $tea.Model {
  vpcId?: string;
  vswitchId?: string;
  expireTime?: number;
  instanceId?: string;
  internetEndpoint?: string;
  regionId?: string;
  intranetEndpoint?: string;
  startTime?: number;
  seriesCode?: string;
  description?: string;
  instanceStatus?: number;
  licenseCode?: string;
  publicNetworkAccess?: boolean;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      internetEndpoint: 'InternetEndpoint',
      regionId: 'RegionId',
      intranetEndpoint: 'IntranetEndpoint',
      startTime: 'StartTime',
      seriesCode: 'SeriesCode',
      description: 'Description',
      instanceStatus: 'InstanceStatus',
      licenseCode: 'LicenseCode',
      publicNetworkAccess: 'PublicNetworkAccess',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      expireTime: 'number',
      instanceId: 'string',
      internetEndpoint: 'string',
      regionId: 'string',
      intranetEndpoint: 'string',
      startTime: 'number',
      seriesCode: 'string',
      description: 'string',
      instanceStatus: 'number',
      licenseCode: 'string',
      publicNetworkAccess: 'boolean',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttribute extends $tea.Model {
  vpcId?: string;
  vswitchId?: string;
  expireTime?: number;
  imageVersion?: string;
  instanceId?: string;
  internetEndpoint?: string;
  regionId?: string;
  intranetEndpoint?: string;
  startTime?: number;
  seriesCode?: string;
  description?: string;
  instanceStatus?: string;
  licenseCode?: string;
  publicNetworkAccess?: boolean;
  whiteList?: string[];
  ipv6WhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      expireTime: 'ExpireTime',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      internetEndpoint: 'InternetEndpoint',
      regionId: 'RegionId',
      intranetEndpoint: 'IntranetEndpoint',
      startTime: 'StartTime',
      seriesCode: 'SeriesCode',
      description: 'Description',
      instanceStatus: 'InstanceStatus',
      licenseCode: 'LicenseCode',
      publicNetworkAccess: 'PublicNetworkAccess',
      whiteList: 'WhiteList',
      ipv6WhiteList: 'Ipv6WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      expireTime: 'number',
      imageVersion: 'string',
      instanceId: 'string',
      internetEndpoint: 'string',
      regionId: 'string',
      intranetEndpoint: 'string',
      startTime: 'number',
      seriesCode: 'string',
      description: 'string',
      instanceStatus: 'string',
      licenseCode: 'string',
      publicNetworkAccess: 'boolean',
      whiteList: { 'type': 'array', 'itemType': 'string' },
      ipv6WhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  vpcId?: string;
  vswitchId?: string;
  expireTime?: number;
  imageVersion?: string;
  instanceId?: string;
  internetEndpoint?: string;
  regionId?: string;
  intranetEndpoint?: string;
  startTime?: number;
  seriesCode?: string;
  description?: string;
  instanceStatus?: string;
  licenseCode?: string;
  publicNetworkAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      expireTime: 'ExpireTime',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      internetEndpoint: 'InternetEndpoint',
      regionId: 'RegionId',
      intranetEndpoint: 'IntranetEndpoint',
      startTime: 'StartTime',
      seriesCode: 'SeriesCode',
      description: 'Description',
      instanceStatus: 'InstanceStatus',
      licenseCode: 'LicenseCode',
      publicNetworkAccess: 'PublicNetworkAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      expireTime: 'number',
      imageVersion: 'string',
      instanceId: 'string',
      internetEndpoint: 'string',
      regionId: 'string',
      intranetEndpoint: 'string',
      startTime: 'number',
      seriesCode: 'string',
      description: 'string',
      instanceStatus: 'string',
      licenseCode: 'string',
      publicNetworkAccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageResponseBodyInstanceStorages extends $tea.Model {
  storageTime?: number;
  storageCapacity?: number;
  storageCategory?: string;
  storageSpace?: string;
  storageUsed?: number;
  static names(): { [key: string]: string } {
    return {
      storageTime: 'StorageTime',
      storageCapacity: 'StorageCapacity',
      storageCategory: 'StorageCategory',
      storageSpace: 'StorageSpace',
      storageUsed: 'StorageUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageTime: 'number',
      storageCapacity: 'number',
      storageCategory: 'string',
      storageSpace: 'string',
      storageUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewStatusResponseBodyInstances extends $tea.Model {
  renewStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renewStatus: 'RenewStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renewStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionLogsResponseBodySessionLogs extends $tea.Model {
  clientUser?: string;
  sessionStatus?: number;
  c5?: string;
  clientPrg?: string;
  accessid?: string;
  c4?: string;
  dbName?: string;
  requestFlow?: number;
  proCon?: number;
  c2?: string;
  dip?: string;
  sip?: string;
  c3?: string;
  hostName?: string;
  responseFlow?: number;
  encode?: string;
  normalEnd?: number;
  endTime?: number;
  sport?: number;
  startTime?: number;
  dbType?: string;
  strInfo?: string;
  sqlCount?: number;
  smac?: number;
  dport?: number;
  dmac?: number;
  c1?: string;
  loginUser?: string;
  sessionid?: string;
  static names(): { [key: string]: string } {
    return {
      clientUser: 'ClientUser',
      sessionStatus: 'SessionStatus',
      c5: 'C5',
      clientPrg: 'ClientPrg',
      accessid: 'Accessid',
      c4: 'C4',
      dbName: 'DbName',
      requestFlow: 'RequestFlow',
      proCon: 'ProCon',
      c2: 'C2',
      dip: 'Dip',
      sip: 'Sip',
      c3: 'C3',
      hostName: 'HostName',
      responseFlow: 'ResponseFlow',
      encode: 'Encode',
      normalEnd: 'NormalEnd',
      endTime: 'EndTime',
      sport: 'Sport',
      startTime: 'StartTime',
      dbType: 'DbType',
      strInfo: 'StrInfo',
      sqlCount: 'SqlCount',
      smac: 'Smac',
      dport: 'Dport',
      dmac: 'Dmac',
      c1: 'C1',
      loginUser: 'LoginUser',
      sessionid: 'Sessionid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUser: 'string',
      sessionStatus: 'number',
      c5: 'string',
      clientPrg: 'string',
      accessid: 'string',
      c4: 'string',
      dbName: 'string',
      requestFlow: 'number',
      proCon: 'number',
      c2: 'string',
      dip: 'string',
      sip: 'string',
      c3: 'string',
      hostName: 'string',
      responseFlow: 'number',
      encode: 'string',
      normalEnd: 'number',
      endTime: 'number',
      sport: 'number',
      startTime: 'number',
      dbType: 'string',
      strInfo: 'string',
      sqlCount: 'number',
      smac: 'number',
      dport: 'number',
      dmac: 'number',
      c1: 'string',
      loginUser: 'string',
      sessionid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadAuthResponseBodyUploadConfig extends $tea.Model {
  signature?: string;
  filePath?: string;
  policy?: string;
  expireTime?: number;
  uploadHost?: string;
  accessId?: string;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      filePath: 'FilePath',
      policy: 'Policy',
      expireTime: 'ExpireTime',
      uploadHost: 'UploadHost',
      accessId: 'AccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      filePath: 'string',
      policy: 'string',
      expireTime: 'number',
      uploadHost: 'string',
      accessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $tea.Model {
  tagCount?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yundun-dbaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async clearInstanceStorageWithOptions(request: ClearInstanceStorageRequest, runtime: $Util.RuntimeOptions): Promise<ClearInstanceStorageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearInstanceStorageResponse>(await this.doRPCRequest("ClearInstanceStorage", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new ClearInstanceStorageResponse({}));
  }

  async clearInstanceStorage(request: ClearInstanceStorageRequest): Promise<ClearInstanceStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearInstanceStorageWithOptions(request, runtime);
  }

  async configInstanceWhiteListWithOptions(request: ConfigInstanceWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigInstanceWhiteListResponse>(await this.doRPCRequest("ConfigInstanceWhiteList", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigInstanceWhiteListResponse({}));
  }

  async configInstanceWhiteList(request: ConfigInstanceWhiteListRequest): Promise<ConfigInstanceWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceWhiteListWithOptions(request, runtime);
  }

  async describeAuditLogsWithOptions(request: DescribeAuditLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditLogsResponse>(await this.doRPCRequest("DescribeAuditLogs", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditLogsResponse({}));
  }

  async describeAuditLogs(request: DescribeAuditLogsRequest): Promise<DescribeAuditLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogsWithOptions(request, runtime);
  }

  async describeInstanceAttribueWithOptions(request: DescribeInstanceAttribueRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttribueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAttribueResponse>(await this.doRPCRequest("DescribeInstanceAttribue", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAttribueResponse({}));
  }

  async describeInstanceAttribue(request: DescribeInstanceAttribueRequest): Promise<DescribeInstanceAttribueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttribueWithOptions(request, runtime);
  }

  async describeInstanceAttributeWithOptions(request: DescribeInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAttributeResponse>(await this.doRPCRequest("DescribeInstanceAttribute", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAttributeResponse({}));
  }

  async describeInstanceAttribute(request: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeInstanceStorageWithOptions(request: DescribeInstanceStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStorageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceStorageResponse>(await this.doRPCRequest("DescribeInstanceStorage", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceStorageResponse({}));
  }

  async describeInstanceStorage(request: DescribeInstanceStorageRequest): Promise<DescribeInstanceStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStorageWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRenewStatusWithOptions(request: DescribeRenewStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRenewStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRenewStatusResponse>(await this.doRPCRequest("DescribeRenewStatus", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRenewStatusResponse({}));
  }

  async describeRenewStatus(request: DescribeRenewStatusRequest): Promise<DescribeRenewStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRenewStatusWithOptions(request, runtime);
  }

  async describeSessionLogsWithOptions(request: DescribeSessionLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSessionLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSessionLogsResponse>(await this.doRPCRequest("DescribeSessionLogs", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSessionLogsResponse({}));
  }

  async describeSessionLogs(request: DescribeSessionLogsRequest): Promise<DescribeSessionLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSessionLogsWithOptions(request, runtime);
  }

  async disableInstancePublicAccessWithOptions(request: DisableInstancePublicAccessRequest, runtime: $Util.RuntimeOptions): Promise<DisableInstancePublicAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableInstancePublicAccessResponse>(await this.doRPCRequest("DisableInstancePublicAccess", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new DisableInstancePublicAccessResponse({}));
  }

  async disableInstancePublicAccess(request: DisableInstancePublicAccessRequest): Promise<DisableInstancePublicAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInstancePublicAccessWithOptions(request, runtime);
  }

  async enableInstancePublicAccessWithOptions(request: EnableInstancePublicAccessRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstancePublicAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableInstancePublicAccessResponse>(await this.doRPCRequest("EnableInstancePublicAccess", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new EnableInstancePublicAccessResponse({}));
  }

  async enableInstancePublicAccess(request: EnableInstancePublicAccessRequest): Promise<EnableInstancePublicAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstancePublicAccessWithOptions(request, runtime);
  }

  async generateUploadAuthWithOptions(request: GenerateUploadAuthRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadAuthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateUploadAuthResponse>(await this.doRPCRequest("GenerateUploadAuth", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateUploadAuthResponse({}));
  }

  async generateUploadAuth(request: GenerateUploadAuthRequest): Promise<GenerateUploadAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadAuthWithOptions(request, runtime);
  }

  async grantServiceRoleWithOptions(request: GrantServiceRoleRequest, runtime: $Util.RuntimeOptions): Promise<GrantServiceRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantServiceRoleResponse>(await this.doRPCRequest("GrantServiceRole", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new GrantServiceRoleResponse({}));
  }

  async grantServiceRole(request: GrantServiceRoleRequest): Promise<GrantServiceRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantServiceRoleWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.doRPCRequest("ModifyInstanceAttribute", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyInstanceStorageWithOptions(request: ModifyInstanceStorageRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceStorageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceStorageResponse>(await this.doRPCRequest("ModifyInstanceStorage", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceStorageResponse({}));
  }

  async modifyInstanceStorage(request: ModifyInstanceStorageRequest): Promise<ModifyInstanceStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceStorageWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async refundInstanceWithOptions(request: RefundInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RefundInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefundInstanceResponse>(await this.doRPCRequest("RefundInstance", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new RefundInstanceResponse({}));
  }

  async refundInstance(request: RefundInstanceRequest): Promise<RefundInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundInstanceWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartInstanceResponse>(await this.doRPCRequest("StartInstance", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2018-10-29", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
