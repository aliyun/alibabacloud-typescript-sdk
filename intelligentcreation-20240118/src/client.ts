// This file is auto-generated, don't edit it
/**
 *
 */
import Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActualDeductResourceCmd extends $tea.Model {
  cost?: number;
  extraInfo?: string;
  idempotentId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      extraInfo: 'extraInfo',
      idempotentId: 'idempotentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      extraInfo: 'string',
      idempotentId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActualDeductResourceResult extends $tea.Model {
  errorMessage?: string;
  errorcode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      errorcode: 'errorcode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorcode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourceCmd extends $tea.Model {
  accountId?: string;
  cost?: number;
  extraInfo?: string;
  idempotentId?: string;
  resourceType?: number;
  subAccountId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      cost: 'cost',
      extraInfo: 'extraInfo',
      idempotentId: 'idempotentId',
      resourceType: 'resourceType',
      subAccountId: 'subAccountId',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cost: 'number',
      extraInfo: 'string',
      idempotentId: 'string',
      resourceType: 'number',
      subAccountId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DirectDeductResourceResult extends $tea.Model {
  errorMessage?: string;
  errorcode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      errorcode: 'errorcode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorcode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourceCmd extends $tea.Model {
  accountId?: string;
  cost?: number;
  extraInfo?: string;
  idempotentId?: string;
  resourceType?: number;
  subAccountId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      cost: 'cost',
      extraInfo: 'extraInfo',
      idempotentId: 'idempotentId',
      resourceType: 'resourceType',
      subAccountId: 'subAccountId',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cost: 'number',
      extraInfo: 'string',
      idempotentId: 'string',
      resourceType: 'number',
      subAccountId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpectDeductResourceResult extends $tea.Model {
  errorMessage?: string;
  errorcode?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      errorcode: 'errorcode',
      requestId: 'requestId',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorcode: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
