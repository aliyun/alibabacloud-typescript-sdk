// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmAccessProfilesResponseBodyDataLlmAccessProfilesProfile extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * akm-93929110-d7c1-4014-8678-613aacd58fa2
   */
  apiKey?: string;
  /**
   * @remarks
   * The service endpoint.
   * 
   * @example
   * api.llm.enpoint.example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * 千问Omni
   */
  name?: string;
  /**
   * @remarks
   * The NLU access type.
   * 
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The NLU engine.
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      endpoint: 'Endpoint',
      name: 'Name',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      endpoint: 'string',
      name: 'string',
      nluAccessType: 'string',
      nluEngine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmAccessProfilesResponseBodyDataLlmAccessProfiles extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1747620752000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 8fe2b8b1cdd446318610ccbc70bcfff0
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter configuration.
   */
  profile?: ListLlmAccessProfilesResponseBodyDataLlmAccessProfilesProfile;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1768788798
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      profile: 'Profile',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
      createdTime: 'number',
      instanceId: 'string',
      profile: ListLlmAccessProfilesResponseBodyDataLlmAccessProfilesProfile,
      updatedTime: 'number',
    };
  }

  validate() {
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmAccessProfilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of third-party model configurations.
   */
  llmAccessProfiles?: ListLlmAccessProfilesResponseBodyDataLlmAccessProfiles[];
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
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      llmAccessProfiles: 'LlmAccessProfiles',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmAccessProfiles: { 'type': 'array', 'itemType': ListLlmAccessProfilesResponseBodyDataLlmAccessProfiles },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.llmAccessProfiles)) {
      $dara.Model.validateArray(this.llmAccessProfiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmAccessProfilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated list of third-party model configurations.
   */
  data?: ListLlmAccessProfilesResponseBodyData;
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
   * The error message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * A list of dynamic parameters associated with the error.
   */
  params?: string[];
  /**
   * @remarks
   * A unique identifier for the request.
   * 
   * @example
   * ED56B723-5802-5C32-865F-6E20B06D2455
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
      data: ListLlmAccessProfilesResponseBodyData,
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

