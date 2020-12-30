// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListChangedBlocksRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  clientToken?: string;
  firstSnapshotId?: string;
  secondSnapshotId?: string;
  startingBlockIndex?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      clientToken: 'ClientToken',
      firstSnapshotId: 'FirstSnapshotId',
      secondSnapshotId: 'SecondSnapshotId',
      startingBlockIndex: 'StartingBlockIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      clientToken: 'string',
      firstSnapshotId: 'string',
      secondSnapshotId: 'string',
      startingBlockIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangedBlocksResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: Buffer;
  maxResults?: number;
  changedBlocks?: ListChangedBlocksResponseBodyChangedBlocks[];
  expiryTime?: number;
  volumeSize?: number;
  blockSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      changedBlocks: 'ChangedBlocks',
      expiryTime: 'ExpiryTime',
      volumeSize: 'VolumeSize',
      blockSize: 'BlockSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'Buffer',
      maxResults: 'number',
      changedBlocks: { 'type': 'array', 'itemType': ListChangedBlocksResponseBodyChangedBlocks },
      expiryTime: 'number',
      volumeSize: 'number',
      blockSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangedBlocksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChangedBlocksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChangedBlocksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangedBlocksResponseBodyChangedBlocks extends $tea.Model {
  blockIndex?: number;
  blockToken?: Buffer;
  static names(): { [key: string]: string } {
    return {
      blockIndex: 'BlockIndex',
      blockToken: 'BlockToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIndex: 'number',
      blockToken: 'Buffer',
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
    this._endpoint = this.getEndpoint("snapshot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async listChangedBlocks(request: ListChangedBlocksRequest): Promise<ListChangedBlocksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChangedBlocksWithOptions(request, headers, runtime);
  }

  async listChangedBlocksWithOptions(request: ListChangedBlocksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChangedBlocksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.firstSnapshotId)) {
      query["FirstSnapshotId"] = request.firstSnapshotId;
    }

    if (!Util.isUnset(request.secondSnapshotId)) {
      query["SecondSnapshotId"] = request.secondSnapshotId;
    }

    if (!Util.isUnset(request.startingBlockIndex)) {
      query["StartingBlockIndex"] = request.startingBlockIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListChangedBlocksResponse>(await this.doROARequest("ListChangedBlocks", "2020-11-18", "HTTPS", "GET", "AK", `/snapshots/changedblocks`, "json", req, runtime), new ListChangedBlocksResponse({}));
  }

}
