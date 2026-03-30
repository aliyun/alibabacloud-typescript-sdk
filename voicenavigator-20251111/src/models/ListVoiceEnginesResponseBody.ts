// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceEnginesResponseBodyDataVoiceEngines extends $dara.Model {
  /**
   * @example
   * [{\\"displayName\\":\\"AppKey\\",\\"maxLength\\":64,\\"name\\":\\"AppKey\\",\\"order\\":1,\\"required\\":true},{\\"displayName\\":\\"AccessKey\\",\\"maxLength\\":64,\\"name\\":\\"AccessKey\\",\\"order\\":2,\\"required\\":true}]
   */
  configSchema?: string;
  /**
   * @example
   * VOLC
   */
  nlsEngine?: string;
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  totalCount?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: ListVoiceEnginesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
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

