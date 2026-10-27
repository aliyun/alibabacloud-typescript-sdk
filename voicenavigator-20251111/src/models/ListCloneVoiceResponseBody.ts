// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoiceResponseBodyDataCloneVoices extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloned voice.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  cloneVoiceId?: string;
  /**
   * @remarks
   * The creation timestamp of the cloned voice.
   * 
   * @example
   * 1764900994000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The cloning model.
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  /**
   * @remarks
   * The name of the cloned voice.
   * 
   * @example
   * 测试克隆音
   */
  name?: string;
  /**
   * @remarks
   * The TTS engine.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The status of the cloned voice.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1308144684576655
   */
  tenantId?: string;
  /**
   * @remarks
   * The last update timestamp of the cloned voice.
   * 
   * @example
   * 1764900994000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The base voice used for cloning.
   * 
   * @example
   * cosyvoice-v3-plus-voicebot2-3666e4bbb2b94832ac4f4107b5804c34
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      cloneVoiceId: 'CloneVoiceId',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      model: 'Model',
      name: 'Name',
      nlsEngine: 'NlsEngine',
      status: 'Status',
      tenantId: 'TenantId',
      updatedTime: 'UpdatedTime',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoiceId: 'string',
      createdTime: 'number',
      instanceId: 'string',
      model: 'string',
      name: 'string',
      nlsEngine: 'string',
      status: 'string',
      tenantId: 'string',
      updatedTime: 'number',
      voice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of cloned voices for the current page.
   */
  cloneVoices?: ListCloneVoiceResponseBodyDataCloneVoices[];
  /**
   * @remarks
   * The returned page number.
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
   * The total number of cloned voices that match the query.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloneVoices: 'CloneVoices',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoices: { 'type': 'array', 'itemType': ListCloneVoiceResponseBodyDataCloneVoices },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloneVoices)) {
      $dara.Model.validateArray(this.cloneVoices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated list of cloned voices.
   */
  data?: ListCloneVoiceResponseBodyData;
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
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCloneVoiceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

