// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDiagnosticReportRequest extends $tea.Model {
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportResponseBody extends $tea.Model {
  requestId?: string;
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDiagnosticReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDiagnosticReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponseBody extends $tea.Model {
  requestId?: string;
  reportList?: DescribeDiagnosticReportListResponseBodyReportList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reportList: 'ReportList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reportList: { 'type': 'array', 'itemType': DescribeDiagnosticReportListResponseBodyReportList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiagnosticReportListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiagnosticReportListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceTopologyRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceTopologyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetDBInstanceTopologyResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetDBInstanceTopologyResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceTopologyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDBInstanceTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDBInstanceTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateConnectionToOtherZoneRequest extends $tea.Model {
  DBInstanceId?: string;
  connectionString?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionString: 'ConnectionString',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionString: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateConnectionToOtherZoneResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateConnectionToOtherZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateConnectionToOtherZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateConnectionToOtherZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  period?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      period: 'Period',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      period: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorResponseBody extends $tea.Model {
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

export class ModifyDBInstanceMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponseBodyReportList extends $tea.Model {
  endTime?: string;
  startTime?: string;
  diagnosticTime?: string;
  score?: number;
  downloadURL?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      diagnosticTime: 'DiagnosticTime',
      score: 'Score',
      downloadURL: 'DownloadURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      diagnosticTime: 'string',
      score: 'number',
      downloadURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceTopologyResponseBodyDataNodes extends $tea.Model {
  zoneId?: string;
  dedicatedHostId?: string;
  role?: string;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      role: 'Role',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      dedicatedHostId: 'string',
      role: 'string',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceTopologyResponseBodyDataConnections extends $tea.Model {
  connectionString?: string;
  netType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      netType: 'NetType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      netType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceTopologyResponseBodyData extends $tea.Model {
  nodes?: GetDBInstanceTopologyResponseBodyDataNodes[];
  DBInstanceName?: string;
  connections?: GetDBInstanceTopologyResponseBodyDataConnections[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      DBInstanceName: 'DBInstanceName',
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataNodes },
      DBInstanceName: 'string',
      connections: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataConnections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "rds.aliyuncs.com",
      'cn-beijing': "rds.aliyuncs.com",
      'cn-hangzhou': "rds.aliyuncs.com",
      'cn-shanghai': "rds.aliyuncs.com",
      'cn-shenzhen': "rds.aliyuncs.com",
      'cn-hongkong': "rds.aliyuncs.com",
      'ap-southeast-1': "rds.aliyuncs.com",
      'us-west-1': "rds.aliyuncs.com",
      'us-east-1': "rds.aliyuncs.com",
      'cn-shanghai-finance-1': "rds.aliyuncs.com",
      'cn-shenzhen-finance-1': "rds.aliyuncs.com",
      'cn-north-2-gov-1': "rds.aliyuncs.com",
      'ap-northeast-2-pop': "rds.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "rds.aliyuncs.com",
      'cn-beijing-finance-pop': "rds.aliyuncs.com",
      'cn-beijing-gov-1': "rds.aliyuncs.com",
      'cn-beijing-nu16-b01': "rds.aliyuncs.com",
      'cn-edge-1': "rds.aliyuncs.com",
      'cn-fujian': "rds.aliyuncs.com",
      'cn-haidian-cm12-c01': "rds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "rds.aliyuncs.com",
      'cn-hangzhou-finance': "rds.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "rds.aliyuncs.com",
      'cn-hangzhou-test-306': "rds.aliyuncs.com",
      'cn-hongkong-finance-pop': "rds.aliyuncs.com",
      'cn-qingdao-nebula': "rds.aliyuncs.com",
      'cn-shanghai-et15-b01': "rds.aliyuncs.com",
      'cn-shanghai-et2-b01': "rds.aliyuncs.com",
      'cn-shanghai-inner': "rds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "rds.aliyuncs.com",
      'cn-shenzhen-inner': "rds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "rds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "rds.aliyuncs.com",
      'cn-wuhan': "rds.aliyuncs.com",
      'cn-yushanfang': "rds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "rds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "rds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "rds.aliyuncs.com",
      'eu-west-1-oxs': "rds.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "rds.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createDiagnosticReportWithOptions(request: CreateDiagnosticReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiagnosticReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDiagnosticReportResponse>(await this.doRPCRequest("CreateDiagnosticReport", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDiagnosticReportResponse({}));
  }

  async createDiagnosticReport(request: CreateDiagnosticReportRequest): Promise<CreateDiagnosticReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiagnosticReportWithOptions(request, runtime);
  }

  async describeDiagnosticReportListWithOptions(request: DescribeDiagnosticReportListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosticReportListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDiagnosticReportListResponse>(await this.doRPCRequest("DescribeDiagnosticReportList", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDiagnosticReportListResponse({}));
  }

  async describeDiagnosticReportList(request: DescribeDiagnosticReportListRequest): Promise<DescribeDiagnosticReportListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosticReportListWithOptions(request, runtime);
  }

  async getDBInstanceTopologyWithOptions(request: GetDBInstanceTopologyRequest, runtime: $Util.RuntimeOptions): Promise<GetDBInstanceTopologyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDBInstanceTopologyResponse>(await this.doRPCRequest("GetDBInstanceTopology", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetDBInstanceTopologyResponse({}));
  }

  async getDBInstanceTopology(request: GetDBInstanceTopologyRequest): Promise<GetDBInstanceTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDBInstanceTopologyWithOptions(request, runtime);
  }

  async migrateConnectionToOtherZoneWithOptions(request: MigrateConnectionToOtherZoneRequest, runtime: $Util.RuntimeOptions): Promise<MigrateConnectionToOtherZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateConnectionToOtherZoneResponse>(await this.doRPCRequest("MigrateConnectionToOtherZone", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateConnectionToOtherZoneResponse({}));
  }

  async migrateConnectionToOtherZone(request: MigrateConnectionToOtherZoneRequest): Promise<MigrateConnectionToOtherZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateConnectionToOtherZoneWithOptions(request, runtime);
  }

  async modifyDBInstanceMonitorWithOptions(request: ModifyDBInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceMonitorResponse>(await this.doRPCRequest("ModifyDBInstanceMonitor", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceMonitorResponse({}));
  }

  async modifyDBInstanceMonitor(request: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

}
