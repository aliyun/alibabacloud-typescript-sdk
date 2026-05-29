// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderEndpointsResponseBodyDataEndpoints extends $dara.Model {
  apiType?: string;
  baseUrl?: string;
  description?: string;
  name?: string;
  providerUrl?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      baseUrl: 'BaseUrl',
      description: 'Description',
      name: 'Name',
      providerUrl: 'ProviderUrl',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      baseUrl: 'string',
      description: 'string',
      name: 'string',
      providerUrl: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProviderEndpointsResponseBodyData extends $dara.Model {
  description?: string;
  endpoints?: ListModelProviderEndpointsResponseBodyDataEndpoints[];
  providerName?: string;
  providerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endpoints: 'Endpoints',
      providerName: 'ProviderName',
      providerUrl: 'ProviderUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpoints: { 'type': 'array', 'itemType': ListModelProviderEndpointsResponseBodyDataEndpoints },
      providerName: 'string',
      providerUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProviderEndpointsResponseBody extends $dara.Model {
  data?: ListModelProviderEndpointsResponseBodyData[];
  /**
   * @example
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListModelProviderEndpointsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

