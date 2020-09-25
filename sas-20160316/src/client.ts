// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class IsSasServiceOpeningRequest extends $tea.Model {
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

export class IsSasServiceOpeningResponse extends $tea.Model {
  data: boolean;
  code: string;
  message: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      code: 'code',
      message: 'message',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventsCountRequest extends $tea.Model {
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

export class GetEventsCountResponse extends $tea.Model {
  code: string;
  message: string;
  success: boolean;
  eventCount: GetEventsCountResponseEventCount;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      success: 'success',
      eventCount: 'EventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      success: 'boolean',
      eventCount: GetEventsCountResponseEventCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventsCountResponseEventCount extends $tea.Model {
  event: number;
  attack: number;
  vul: number;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      attack: 'attack',
      vul: 'vul',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'number',
      attack: 'number',
      vul: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-hangzhou': "tds.aliyuncs.com",
      'ap-southeast-3': "tds.ap-southeast-3.aliyuncs.com",
      'cn-shanghai-et2-b01': "tds.cn-shanghai-et2-b01.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async isSasServiceOpeningWithOptions(request: IsSasServiceOpeningRequest, runtime: $Util.RuntimeOptions): Promise<IsSasServiceOpeningResponse> {
    Util.validateModel(request);
    return $tea.cast<IsSasServiceOpeningResponse>(await this.doRequest("IsSasServiceOpening", "HTTPS", "POST", "2016-03-16", "AK", null, $tea.toMap(request), runtime), new IsSasServiceOpeningResponse({}));
  }

  async isSasServiceOpening(request: IsSasServiceOpeningRequest): Promise<IsSasServiceOpeningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isSasServiceOpeningWithOptions(request, runtime);
  }

  async getEventsCountWithOptions(request: GetEventsCountRequest, runtime: $Util.RuntimeOptions): Promise<GetEventsCountResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEventsCountResponse>(await this.doRequest("GetEventsCount", "HTTPS", "POST", "2016-03-16", "AK", null, $tea.toMap(request), runtime), new GetEventsCountResponse({}));
  }

  async getEventsCount(request: GetEventsCountRequest): Promise<GetEventsCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventsCountWithOptions(request, runtime);
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

}
