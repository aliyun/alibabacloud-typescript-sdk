// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallCenterProvidersResponseBodyDataProviders extends $dara.Model {
  /**
   * @example
   * 153*********
   */
  destination?: string;
  displayName?: string;
  /**
   * @example
   * key1=value1
   */
  extras?: string;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * 010****
   */
  originator?: string;
  /**
   * @example
   * xxxxxxxxx
   */
  providerId?: string;
  /**
   * @example
   * CCC
   */
  providerType?: string;
  /**
   * @example
   * -
   */
  referTo?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  providers?: ListCallCenterProvidersResponseBodyDataProviders[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListCallCenterProvidersResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  params?: string[];
  /**
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

