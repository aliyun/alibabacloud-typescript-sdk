// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallCenterProvidersResponseBodyDataProviders extends $dara.Model {
  /**
   * @remarks
   * The destination of the call transfer. Required if the transfer mode is `Bridge`.
   * 
   * @example
   * 153*********
   */
  destination?: string;
  /**
   * @remarks
   * The display name of the service provider.
   * 
   * @example
   * 云联络中心内部服务提供商
   */
  displayName?: string;
  /**
   * @remarks
   * The extra data.>Notice:  Format: `k1=v1;k2=v2`
   * 
   * @example
   * key1=value1
   */
  extras?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @remarks
   * The service provider name.
   * 
   * @example
   * 云联络中心内部服务提供商
   */
  name?: string;
  /**
   * @remarks
   * The originator of the call transfer. Required if the transfer mode is `Bridge`.
   * 
   * @example
   * 010****
   */
  originator?: string;
  /**
   * @remarks
   * The call center provider ID.
   * 
   * @example
   * xxxxxxxxx
   */
  providerId?: string;
  /**
   * @remarks
   * The provider type.
   * 
   * > - `CCC`: Cloud Contact Center
   * >
   * > - `CUSTOM`: customer-owned contact center
   * 
   * @example
   * CCC
   */
  providerType?: string;
  /**
   * @remarks
   * The Refer address.>Notice:  Required if the transfer mode is `Refer`.
   * 
   * @example
   * -
   */
  referTo?: string;
  /**
   * @remarks
   * The trunk ID.
   * 
   * @example
   * trunk-xxx
   */
  trunkId?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      displayName: 'DisplayName',
      extras: 'Extras',
      instanceId: 'InstanceId',
      name: 'Name',
      originator: 'Originator',
      providerId: 'ProviderId',
      providerType: 'ProviderType',
      referTo: 'ReferTo',
      trunkId: 'TrunkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      displayName: 'string',
      extras: 'string',
      instanceId: 'string',
      name: 'string',
      originator: 'string',
      providerId: 'string',
      providerType: 'string',
      referTo: 'string',
      trunkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallCenterProvidersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of call center providers.
   */
  providers?: ListCallCenterProvidersResponseBodyDataProviders[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providers: 'Providers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      providers: { 'type': 'array', 'itemType': ListCallCenterProvidersResponseBodyDataProviders },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.providers)) {
      $dara.Model.validateArray(this.providers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallCenterProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The call center provider data.
   */
  data?: ListCallCenterProvidersResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * A list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75BAAB9B-40B2-5FF5-A59A-7BCF8154C6EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCallCenterProvidersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

