// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceEnginesResponseBodyDataVoiceEngines extends $dara.Model {
  /**
   * @remarks
   * The engine configuration.
   * 
   * @example
   * [{\\"displayName\\":\\"AppKey\\",\\"maxLength\\":64,\\"name\\":\\"AppKey\\",\\"order\\":1,\\"required\\":true},{\\"displayName\\":\\"AccessKey\\",\\"maxLength\\":64,\\"name\\":\\"AccessKey\\",\\"order\\":2,\\"required\\":true}]
   */
  configSchema?: string;
  /**
   * @remarks
   * The voice engine.
   * 
   * @example
   * VOLC
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Doubao
   */
  nlsEngineName?: string;
  static names(): { [key: string]: string } {
    return {
      configSchema: 'ConfigSchema',
      nlsEngine: 'NlsEngine',
      nlsEngineName: 'NlsEngineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSchema: 'string',
      nlsEngine: 'string',
      nlsEngineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceEnginesResponseBodyData extends $dara.Model {
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
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of voice engine objects.
   */
  voiceEngines?: ListVoiceEnginesResponseBodyDataVoiceEngines[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voiceEngines: 'VoiceEngines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voiceEngines: { 'type': 'array', 'itemType': ListVoiceEnginesResponseBodyDataVoiceEngines },
    };
  }

  validate() {
    if(Array.isArray(this.voiceEngines)) {
      $dara.Model.validateArray(this.voiceEngines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceEnginesResponseBody extends $dara.Model {
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
   * The paginated results of voice engines.
   */
  data?: ListVoiceEnginesResponseBodyData;
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
   * The list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7401D698-0AAC-5909-B68E-88C68805FFB8
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
      data: ListVoiceEnginesResponseBodyData,
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

