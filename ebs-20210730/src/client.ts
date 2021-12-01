// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDiskReplicaPairRequest extends $tea.Model {
  bandwidth?: number;
  chargeType?: string;
  clientToken?: string;
  description?: string;
  destinationDiskId?: string;
  destinationRegionId?: string;
  destinationZoneId?: string;
  diskId?: string;
  pairName?: string;
  period?: number;
  periodUnit?: string;
  sourceRegionId?: string;
  sourceZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationDiskId: 'DestinationDiskId',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      diskId: 'DiskId',
      pairName: 'PairName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      sourceRegionId: 'SourceRegionId',
      sourceZoneId: 'SourceZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      clientToken: 'string',
      description: 'string',
      destinationDiskId: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      diskId: 'string',
      pairName: 'string',
      period: 'number',
      periodUnit: 'string',
      sourceRegionId: 'string',
      sourceZoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairResponseBody extends $tea.Model {
  orderId?: string;
  replicaPairId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      replicaPairId: 'ReplicaPairId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      replicaPairId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaPairResponseBody extends $tea.Model {
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

export class DeleteDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  pairIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pairIds: 'PairIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pairIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponseBody extends $tea.Model {
  nextToken?: string;
  replicaPairs?: DescribeDiskReplicaPairsResponseBodyReplicaPairs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      replicaPairs: 'ReplicaPairs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      replicaPairs: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsResponseBodyReplicaPairs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiskReplicaPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiskReplicaPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
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

export class FailoverDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaPairResponseBody extends $tea.Model {
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

export class FailoverDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FailoverDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FailoverDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  pairName?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      pairName: 'PairName',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      pairName: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaPairResponseBody extends $tea.Model {
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

export class ModifyDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairResponseBody extends $tea.Model {
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

export class ReprotectDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReprotectDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReprotectDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaPairResponseBody extends $tea.Model {
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

export class StartDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaPairResponseBody extends $tea.Model {
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

export class StopDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponseBodyReplicaPairs extends $tea.Model {
  asyncCycle?: number;
  bandwidth?: number;
  description?: string;
  destinationDiskId?: string;
  destinationRegion?: string;
  lastRPO?: number;
  pairName?: string;
  replicaPairId?: string;
  sourceDiskId?: string;
  sourceRegion?: string;
  status?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      asyncCycle: 'AsyncCycle',
      bandwidth: 'Bandwidth',
      description: 'Description',
      destinationDiskId: 'DestinationDiskId',
      destinationRegion: 'DestinationRegion',
      lastRPO: 'LastRPO',
      pairName: 'PairName',
      replicaPairId: 'ReplicaPairId',
      sourceDiskId: 'SourceDiskId',
      sourceRegion: 'SourceRegion',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCycle: 'number',
      bandwidth: 'number',
      description: 'string',
      destinationDiskId: 'string',
      destinationRegion: 'string',
      lastRPO: 'number',
      pairName: 'string',
      replicaPairId: 'string',
      sourceDiskId: 'string',
      sourceRegion: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsZones extends $tea.Model {
  localName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  regionEndpoint?: string;
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsZones[];
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsZones },
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
    this._endpoint = this.getEndpoint("ebs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createDiskReplicaPairWithOptions(request: CreateDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    query["Bandwidth"] = request.bandwidth;
    query["ChargeType"] = request.chargeType;
    query["ClientToken"] = request.clientToken;
    query["Description"] = request.description;
    query["DestinationDiskId"] = request.destinationDiskId;
    query["DestinationRegionId"] = request.destinationRegionId;
    query["DestinationZoneId"] = request.destinationZoneId;
    query["DiskId"] = request.diskId;
    query["PairName"] = request.pairName;
    query["Period"] = request.period;
    query["PeriodUnit"] = request.periodUnit;
    query["SourceRegionId"] = request.sourceRegionId;
    query["SourceZoneId"] = request.sourceZoneId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new CreateDiskReplicaPairResponse({}));
  }

  async createDiskReplicaPair(request: CreateDiskReplicaPairRequest): Promise<CreateDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskReplicaPairWithOptions(request, runtime);
  }

  async deleteDiskReplicaPairWithOptions(request: DeleteDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientToken"] = request.clientToken;
    query["RegionId"] = request.regionId;
    query["ReplicaPairId"] = request.replicaPairId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new DeleteDiskReplicaPairResponse({}));
  }

  async deleteDiskReplicaPair(request: DeleteDiskReplicaPairRequest): Promise<DeleteDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiskReplicaPairWithOptions(request, runtime);
  }

  async describeDiskReplicaPairsWithOptions(request: DescribeDiskReplicaPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskReplicaPairsResponse> {
    Util.validateModel(request);
    let query = { };
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["PairIds"] = request.pairIds;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskReplicaPairs",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskReplicaPairsResponse>(await this.callApi(params, req, runtime), new DescribeDiskReplicaPairsResponse({}));
  }

  async describeDiskReplicaPairs(request: DescribeDiskReplicaPairsRequest): Promise<DescribeDiskReplicaPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskReplicaPairsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    query["AcceptLanguage"] = request.acceptLanguage;
    query["ResourceType"] = request.resourceType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async failoverDiskReplicaPairWithOptions(request: FailoverDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<FailoverDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientToken"] = request.clientToken;
    query["RegionId"] = request.regionId;
    query["ReplicaPairId"] = request.replicaPairId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "FailoverDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FailoverDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new FailoverDiskReplicaPairResponse({}));
  }

  async failoverDiskReplicaPair(request: FailoverDiskReplicaPairRequest): Promise<FailoverDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failoverDiskReplicaPairWithOptions(request, runtime);
  }

  async modifyDiskReplicaPairWithOptions(request: ModifyDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientToken"] = request.clientToken;
    query["Description"] = request.description;
    query["PairName"] = request.pairName;
    query["RegionId"] = request.regionId;
    query["ReplicaPairId"] = request.replicaPairId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new ModifyDiskReplicaPairResponse({}));
  }

  async modifyDiskReplicaPair(request: ModifyDiskReplicaPairRequest): Promise<ModifyDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskReplicaPairWithOptions(request, runtime);
  }

  async reprotectDiskReplicaPairWithOptions(request: ReprotectDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<ReprotectDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientToken"] = request.clientToken;
    query["RegionId"] = request.regionId;
    query["ReplicaPairId"] = request.replicaPairId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ReprotectDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReprotectDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new ReprotectDiskReplicaPairResponse({}));
  }

  async reprotectDiskReplicaPair(request: ReprotectDiskReplicaPairRequest): Promise<ReprotectDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reprotectDiskReplicaPairWithOptions(request, runtime);
  }

  async startDiskReplicaPairWithOptions(request: StartDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<StartDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientToken"] = request.clientToken;
    query["RegionId"] = request.regionId;
    query["ReplicaPairId"] = request.replicaPairId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "StartDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new StartDiskReplicaPairResponse({}));
  }

  async startDiskReplicaPair(request: StartDiskReplicaPairRequest): Promise<StartDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDiskReplicaPairWithOptions(request, runtime);
  }

  async stopDiskReplicaPairWithOptions(request: StopDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<StopDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientToken"] = request.clientToken;
    query["RegionId"] = request.regionId;
    query["ReplicaPairId"] = request.replicaPairId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "StopDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new StopDiskReplicaPairResponse({}));
  }

  async stopDiskReplicaPair(request: StopDiskReplicaPairRequest): Promise<StopDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDiskReplicaPairWithOptions(request, runtime);
  }

}
