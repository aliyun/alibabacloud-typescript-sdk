// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmAccessProfilesResponseBodyDataLlmAccessProfilesProfile extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * example-api-key
   */
  apiKey?: string;
  /**
   * @remarks
   * The endpoint URL of the model service.
   * 
   * @example
   * wss://example.com/api/realtime
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * Sample configuration
   */
  name?: string;
  /**
   * @remarks
   * The type of the access configuration.
   * 
   * @example
   * Provided
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The type of the natural language understanding (NLU) engine.
   * 
   * @example
   * PROMPTS
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
   * The ID of the access configuration.
   * 
   * @example
   * 5dcc2dc6-57b4-488e-b6c8-6115cbc2a21e
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1779700982000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 7a8ef16a-c1a6-4c97-acbe-3e53521beb39
   */
  instanceId?: string;
  /**
   * @remarks
   * The language model access configuration.
   */
  profile?: ListLlmAccessProfilesResponseBodyDataLlmAccessProfilesProfile;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1779700982000
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
   * The list of third-party language model access configurations.
   */
  llmAccessProfiles?: ListLlmAccessProfilesResponseBodyDataLlmAccessProfiles[];
  /**
   * @remarks
   * The current page number.
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
   * 15
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
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
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
   * The message returned by the API.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
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
      success: 'boolean',
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

