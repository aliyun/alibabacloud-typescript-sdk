// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddZoneRequest extends $tea.Model {
  lang?: string;
  zoneName?: string;
  userClientIp?: string;
  proxyPattern?: string;
  resourceGroupId?: string;
  zoneType?: string;
  zoneTag?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneName: 'ZoneName',
      userClientIp: 'UserClientIp',
      proxyPattern: 'ProxyPattern',
      resourceGroupId: 'ResourceGroupId',
      zoneType: 'ZoneType',
      zoneTag: 'ZoneTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneName: 'string',
      userClientIp: 'string',
      proxyPattern: 'string',
      resourceGroupId: 'string',
      zoneType: 'string',
      zoneTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneResponseBody extends $tea.Model {
  zoneName?: string;
  zoneId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      zoneName: 'ZoneName',
      zoneId: 'ZoneId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneName: 'string',
      zoneId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordRequest extends $tea.Model {
  zoneId?: string;
  lang?: string;
  rr?: string;
  type?: string;
  ttl?: number;
  priority?: number;
  value?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      lang: 'Lang',
      rr: 'Rr',
      type: 'Type',
      ttl: 'Ttl',
      priority: 'Priority',
      value: 'Value',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      lang: 'string',
      rr: 'string',
      type: 'string',
      ttl: 'number',
      priority: 'number',
      value: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddZoneRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcRequest extends $tea.Model {
  lang?: string;
  zoneId?: string;
  userClientIp?: string;
  vpcs?: BindZoneVpcRequestVpcs[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
      userClientIp: 'UserClientIp',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
      userClientIp: 'string',
      vpcs: { 'type': 'array', 'itemType': BindZoneVpcRequestVpcs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcResponseBody extends $tea.Model {
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

export class BindZoneVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindZoneVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindZoneVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameRequest extends $tea.Model {
  lang?: string;
  zoneName?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneName: 'ZoneName',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneName: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameResponseBody extends $tea.Model {
  requestId?: string;
  check?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      check: 'Check',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      check: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckZoneNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckZoneNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRequest extends $tea.Model {
  lang?: string;
  zoneId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneResponseBody extends $tea.Model {
  zoneId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordRequest extends $tea.Model {
  lang?: string;
  recordId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteZoneRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  zoneId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTimestamp?: number;
  endTimestamp?: number;
  entityType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      zoneId: 'ZoneId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
      endTimestamp: 'EndTimestamp',
      entityType: 'EntityType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      zoneId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
      endTimestamp: 'number',
      entityType: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  changeLogs?: DescribeChangeLogsResponseBodyChangeLogs;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      changeLogs: 'ChangeLogs',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      changeLogs: DescribeChangeLogsResponseBodyChangeLogs,
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChangeLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChangeLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  acceptLanguage?: string;
  authorizedUserId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      acceptLanguage: 'AcceptLanguage',
      authorizedUserId: 'AuthorizedUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      acceptLanguage: 'string',
      authorizedUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeRequestGraphRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  zoneId?: string;
  vpcId?: string;
  startTimestamp?: number;
  endTimestamp?: number;
  bizType?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
      vpcId: 'VpcId',
      startTimestamp: 'StartTimestamp',
      endTimestamp: 'EndTimestamp',
      bizType: 'BizType',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      zoneId: 'string',
      vpcId: 'string',
      startTimestamp: 'number',
      endTimestamp: 'number',
      bizType: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBody extends $tea.Model {
  requestId?: string;
  requestDetails?: DescribeRequestGraphResponseBodyRequestDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestDetails: 'RequestDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestDetails: DescribeRequestGraphResponseBodyRequestDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestGraphResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  zoneRequestTops?: DescribeStatisticSummaryResponseBodyZoneRequestTops;
  vpcRequestTops?: DescribeStatisticSummaryResponseBodyVpcRequestTops;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      zoneRequestTops: 'ZoneRequestTops',
      vpcRequestTops: 'VpcRequestTops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      zoneRequestTops: DescribeStatisticSummaryResponseBodyZoneRequestTops,
      vpcRequestTops: DescribeStatisticSummaryResponseBodyVpcRequestTops,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStatisticSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStatisticSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoRequest extends $tea.Model {
  lang?: string;
  zoneId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBody extends $tea.Model {
  requestId?: string;
  slaveDns?: boolean;
  resourceGroupId?: string;
  zoneId?: string;
  proxyPattern?: string;
  createTime?: string;
  zoneType?: string;
  remark?: string;
  zoneName?: string;
  zoneTag?: string;
  updateTime?: string;
  updateTimestamp?: number;
  recordCount?: number;
  createTimestamp?: number;
  bindVpcs?: DescribeZoneInfoResponseBodyBindVpcs;
  isPtr?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      proxyPattern: 'ProxyPattern',
      createTime: 'CreateTime',
      zoneType: 'ZoneType',
      remark: 'Remark',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      recordCount: 'RecordCount',
      createTimestamp: 'CreateTimestamp',
      bindVpcs: 'BindVpcs',
      isPtr: 'IsPtr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slaveDns: 'boolean',
      resourceGroupId: 'string',
      zoneId: 'string',
      proxyPattern: 'string',
      createTime: 'string',
      zoneType: 'string',
      remark: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      recordCount: 'number',
      createTimestamp: 'number',
      bindVpcs: DescribeZoneInfoResponseBodyBindVpcs,
      isPtr: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZoneInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZoneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsRequest extends $tea.Model {
  lang?: string;
  keyword?: string;
  zoneId?: string;
  pageNumber?: number;
  pageSize?: number;
  userClientIp?: string;
  tag?: string;
  searchMode?: string;
  orderBy?: string;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      keyword: 'Keyword',
      zoneId: 'ZoneId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
      tag: 'Tag',
      searchMode: 'SearchMode',
      orderBy: 'OrderBy',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      keyword: 'string',
      zoneId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userClientIp: 'string',
      tag: 'string',
      searchMode: 'string',
      orderBy: 'string',
      direction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  records?: DescribeZoneRecordsResponseBodyRecords;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      records: DescribeZoneRecordsResponseBodyRecords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZoneRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZoneRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  userClientIp?: string;
  searchMode?: string;
  queryRegionId?: string;
  queryVpcId?: string;
  resourceGroupId?: string;
  orderBy?: string;
  direction?: string;
  zoneType?: string;
  zoneTag?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
      userClientIp: 'UserClientIp',
      searchMode: 'SearchMode',
      queryRegionId: 'QueryRegionId',
      queryVpcId: 'QueryVpcId',
      resourceGroupId: 'ResourceGroupId',
      orderBy: 'OrderBy',
      direction: 'Direction',
      zoneType: 'ZoneType',
      zoneTag: 'ZoneTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
      userClientIp: 'string',
      searchMode: 'string',
      queryRegionId: 'string',
      queryVpcId: 'string',
      resourceGroupId: 'string',
      orderBy: 'string',
      direction: 'string',
      zoneType: 'string',
      zoneTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZoneVpcTreeResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZoneVpcTreeResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZoneVpcTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZoneVpcTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  lang?: string;
  resourceId?: string;
  userClientIp?: string;
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceId: 'ResourceId',
      userClientIp: 'UserClientIp',
      newResourceGroupId: 'NewResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceId: 'string',
      userClientIp: 'string',
      newResourceGroupId: 'string',
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

export class SetProxyPatternRequest extends $tea.Model {
  lang?: string;
  zoneId?: string;
  proxyPattern?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
      proxyPattern: 'ProxyPattern',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
      proxyPattern: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternResponseBody extends $tea.Model {
  zoneId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetProxyPatternResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetProxyPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusRequest extends $tea.Model {
  lang?: string;
  recordId?: number;
  status?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'number',
      status: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      recordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetZoneRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetZoneRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkRequest extends $tea.Model {
  lang?: string;
  recordId?: number;
  remark?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'number',
      remark: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRecordRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRecordRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordRequest extends $tea.Model {
  rr?: string;
  lang?: string;
  recordId?: number;
  type?: string;
  ttl?: number;
  priority?: number;
  value?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      rr: 'Rr',
      lang: 'Lang',
      recordId: 'RecordId',
      type: 'Type',
      ttl: 'Ttl',
      priority: 'Priority',
      value: 'Value',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rr: 'string',
      lang: 'string',
      recordId: 'number',
      type: 'string',
      ttl: 'number',
      priority: 'number',
      value: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateZoneRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkRequest extends $tea.Model {
  lang?: string;
  zoneId?: string;
  remark?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
      remark: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkResponseBody extends $tea.Model {
  zoneId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateZoneRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateZoneRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcRequestVpcs extends $tea.Model {
  vpcId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBodyChangeLogsChangeLog extends $tea.Model {
  operTimestamp?: number;
  entityId?: string;
  operObject?: string;
  operTime?: string;
  operIp?: string;
  operAction?: string;
  content?: string;
  entityName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      operTimestamp: 'OperTimestamp',
      entityId: 'EntityId',
      operObject: 'OperObject',
      operTime: 'OperTime',
      operIp: 'OperIp',
      operAction: 'OperAction',
      content: 'Content',
      entityName: 'EntityName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operTimestamp: 'number',
      entityId: 'string',
      operObject: 'string',
      operTime: 'string',
      operIp: 'string',
      operAction: 'string',
      content: 'string',
      entityName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBodyChangeLogs extends $tea.Model {
  changeLog?: DescribeChangeLogsResponseBodyChangeLogsChangeLog[];
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: { 'type': 'array', 'itemType': DescribeChangeLogsResponseBodyChangeLogsChangeLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionName: 'RegionName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop extends $tea.Model {
  time?: string;
  requestCount?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      requestCount: 'RequestCount',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      requestCount: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBodyRequestDetails extends $tea.Model {
  zoneRequestTop?: DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop extends $tea.Model {
  requestCount?: number;
  zoneName?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      requestCount: 'RequestCount',
      zoneName: 'ZoneName',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCount: 'number',
      zoneName: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTops extends $tea.Model {
  zoneRequestTop?: DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop extends $tea.Model {
  vpcId?: string;
  regionName?: string;
  tunnelId?: string;
  requestCount?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      regionName: 'RegionName',
      tunnelId: 'TunnelId',
      requestCount: 'RequestCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      regionName: 'string',
      tunnelId: 'string',
      requestCount: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyVpcRequestTops extends $tea.Model {
  vpcRequestTop?: DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop[];
  static names(): { [key: string]: string } {
    return {
      vpcRequestTop: 'VpcRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcsVpc extends $tea.Model {
  vpcName?: string;
  vpcId?: string;
  regionName?: string;
  vpcUserId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcName: 'VpcName',
      vpcId: 'VpcId',
      regionName: 'RegionName',
      vpcUserId: 'VpcUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcName: 'string',
      vpcId: 'string',
      regionName: 'string',
      vpcUserId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcs extends $tea.Model {
  vpc?: DescribeZoneInfoResponseBodyBindVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneInfoResponseBodyBindVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBodyRecordsRecord extends $tea.Model {
  status?: string;
  type?: string;
  value?: string;
  ttl?: number;
  remark?: string;
  recordId?: number;
  rr?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      value: 'Value',
      ttl: 'Ttl',
      remark: 'Remark',
      recordId: 'RecordId',
      rr: 'Rr',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      value: 'string',
      ttl: 'number',
      remark: 'string',
      recordId: 'number',
      rr: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBodyRecords extends $tea.Model {
  record?: DescribeZoneRecordsResponseBodyRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeZoneRecordsResponseBodyRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  updateTime?: string;
  zoneType?: string;
  remark?: string;
  createTime?: string;
  recordCount?: number;
  zoneName?: string;
  proxyPattern?: string;
  updateTimestamp?: number;
  resourceGroupId?: string;
  zoneId?: string;
  zoneTag?: string;
  isPtr?: boolean;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      zoneType: 'ZoneType',
      remark: 'Remark',
      createTime: 'CreateTime',
      recordCount: 'RecordCount',
      zoneName: 'ZoneName',
      proxyPattern: 'ProxyPattern',
      updateTimestamp: 'UpdateTimestamp',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      zoneTag: 'ZoneTag',
      isPtr: 'IsPtr',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      zoneType: 'string',
      remark: 'string',
      createTime: 'string',
      recordCount: 'number',
      zoneName: 'string',
      proxyPattern: 'string',
      updateTimestamp: 'number',
      resourceGroupId: 'string',
      zoneId: 'string',
      zoneTag: 'string',
      isPtr: 'boolean',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc extends $tea.Model {
  vpcName?: string;
  vpcId?: string;
  regionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcName: 'VpcName',
      vpcId: 'VpcId',
      regionName: 'RegionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcName: 'string',
      vpcId: 'string',
      regionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcs extends $tea.Model {
  vpc?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZone extends $tea.Model {
  updateTime?: string;
  zoneType?: string;
  remark?: string;
  createTime?: string;
  vpcs?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs;
  recordCount?: number;
  zoneName?: string;
  updateTimestamp?: number;
  zoneId?: string;
  zoneTag?: string;
  isPtr?: boolean;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      zoneType: 'ZoneType',
      remark: 'Remark',
      createTime: 'CreateTime',
      vpcs: 'Vpcs',
      recordCount: 'RecordCount',
      zoneName: 'ZoneName',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneTag: 'ZoneTag',
      isPtr: 'IsPtr',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      zoneType: 'string',
      remark: 'string',
      createTime: 'string',
      vpcs: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs,
      recordCount: 'number',
      zoneName: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneTag: 'string',
      isPtr: 'boolean',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZones extends $tea.Model {
  zone?: DescribeZoneVpcTreeResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZone },
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
    this._endpoint = this.getEndpoint("pvtz", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addZoneWithOptions(request: AddZoneRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddZoneResponse>(await this.doRPCRequest("AddZone", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddZoneResponse({}));
  }

  async addZone(request: AddZoneRequest): Promise<AddZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneWithOptions(request, runtime);
  }

  async addZoneRecordWithOptions(request: AddZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddZoneRecordResponse>(await this.doRPCRequest("AddZoneRecord", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddZoneRecordResponse({}));
  }

  async addZoneRecord(request: AddZoneRecordRequest): Promise<AddZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneRecordWithOptions(request, runtime);
  }

  async bindZoneVpcWithOptions(request: BindZoneVpcRequest, runtime: $Util.RuntimeOptions): Promise<BindZoneVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindZoneVpcResponse>(await this.doRPCRequest("BindZoneVpc", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new BindZoneVpcResponse({}));
  }

  async bindZoneVpc(request: BindZoneVpcRequest): Promise<BindZoneVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindZoneVpcWithOptions(request, runtime);
  }

  async checkZoneNameWithOptions(request: CheckZoneNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckZoneNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckZoneNameResponse>(await this.doRPCRequest("CheckZoneName", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckZoneNameResponse({}));
  }

  async checkZoneName(request: CheckZoneNameRequest): Promise<CheckZoneNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkZoneNameWithOptions(request, runtime);
  }

  async deleteZoneWithOptions(request: DeleteZoneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteZoneResponse>(await this.doRPCRequest("DeleteZone", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteZoneResponse({}));
  }

  async deleteZone(request: DeleteZoneRequest): Promise<DeleteZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZoneWithOptions(request, runtime);
  }

  async deleteZoneRecordWithOptions(request: DeleteZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZoneRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteZoneRecordResponse>(await this.doRPCRequest("DeleteZoneRecord", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteZoneRecordResponse({}));
  }

  async deleteZoneRecord(request: DeleteZoneRecordRequest): Promise<DeleteZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZoneRecordWithOptions(request, runtime);
  }

  async describeChangeLogsWithOptions(request: DescribeChangeLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChangeLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeChangeLogsResponse>(await this.doRPCRequest("DescribeChangeLogs", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeChangeLogsResponse({}));
  }

  async describeChangeLogs(request: DescribeChangeLogsRequest): Promise<DescribeChangeLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChangeLogsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRequestGraphWithOptions(request: DescribeRequestGraphRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestGraphResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestGraphResponse>(await this.doRPCRequest("DescribeRequestGraph", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestGraphResponse({}));
  }

  async describeRequestGraph(request: DescribeRequestGraphRequest): Promise<DescribeRequestGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestGraphWithOptions(request, runtime);
  }

  async describeStatisticSummaryWithOptions(request: DescribeStatisticSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStatisticSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStatisticSummaryResponse>(await this.doRPCRequest("DescribeStatisticSummary", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStatisticSummaryResponse({}));
  }

  async describeStatisticSummary(request: DescribeStatisticSummaryRequest): Promise<DescribeStatisticSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStatisticSummaryWithOptions(request, runtime);
  }

  async describeZoneInfoWithOptions(request: DescribeZoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZoneInfoResponse>(await this.doRPCRequest("DescribeZoneInfo", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZoneInfoResponse({}));
  }

  async describeZoneInfo(request: DescribeZoneInfoRequest): Promise<DescribeZoneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneInfoWithOptions(request, runtime);
  }

  async describeZoneRecordsWithOptions(request: DescribeZoneRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZoneRecordsResponse>(await this.doRPCRequest("DescribeZoneRecords", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZoneRecordsResponse({}));
  }

  async describeZoneRecords(request: DescribeZoneRecordsRequest): Promise<DescribeZoneRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneRecordsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async describeZoneVpcTreeWithOptions(request: DescribeZoneVpcTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneVpcTreeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZoneVpcTreeResponse>(await this.doRPCRequest("DescribeZoneVpcTree", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZoneVpcTreeResponse({}));
  }

  async describeZoneVpcTree(request: DescribeZoneVpcTreeRequest): Promise<DescribeZoneVpcTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneVpcTreeWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async setProxyPatternWithOptions(request: SetProxyPatternRequest, runtime: $Util.RuntimeOptions): Promise<SetProxyPatternResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetProxyPatternResponse>(await this.doRPCRequest("SetProxyPattern", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetProxyPatternResponse({}));
  }

  async setProxyPattern(request: SetProxyPatternRequest): Promise<SetProxyPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setProxyPatternWithOptions(request, runtime);
  }

  async setZoneRecordStatusWithOptions(request: SetZoneRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetZoneRecordStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetZoneRecordStatusResponse>(await this.doRPCRequest("SetZoneRecordStatus", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetZoneRecordStatusResponse({}));
  }

  async setZoneRecordStatus(request: SetZoneRecordStatusRequest): Promise<SetZoneRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setZoneRecordStatusWithOptions(request, runtime);
  }

  async updateRecordRemarkWithOptions(request: UpdateRecordRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRecordRemarkResponse>(await this.doRPCRequest("UpdateRecordRemark", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRecordRemarkResponse({}));
  }

  async updateRecordRemark(request: UpdateRecordRemarkRequest): Promise<UpdateRecordRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordRemarkWithOptions(request, runtime);
  }

  async updateZoneRecordWithOptions(request: UpdateZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZoneRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateZoneRecordResponse>(await this.doRPCRequest("UpdateZoneRecord", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateZoneRecordResponse({}));
  }

  async updateZoneRecord(request: UpdateZoneRecordRequest): Promise<UpdateZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZoneRecordWithOptions(request, runtime);
  }

  async updateZoneRemarkWithOptions(request: UpdateZoneRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZoneRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateZoneRemarkResponse>(await this.doRPCRequest("UpdateZoneRemark", "2018-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateZoneRemarkResponse({}));
  }

  async updateZoneRemark(request: UpdateZoneRemarkRequest): Promise<UpdateZoneRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZoneRemarkWithOptions(request, runtime);
  }

}
