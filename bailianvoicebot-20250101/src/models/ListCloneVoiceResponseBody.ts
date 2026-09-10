// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoiceResponseBodyDataCloneVoices extends $dara.Model {
  /**
   * @remarks
   * The clone voice ID.
   * 
   * @example
   * 8ee1160a-6999-478f-8df6-f33ef21f27d5
   */
  cloneVoiceId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1760494691000
   */
  createdTime?: number;
  /**
   * @remarks
   * The business workspace ID.
   * 
   * @example
   * llm-xdne77rxe14ziszr
   */
  instanceId?: string;
  /**
   * @remarks
   * The clone model.
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  /**
   * @remarks
   * The clone voice name.
   * 
   * @example
   * TestCloneVoice
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
   * The status.
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
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1760494691000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The voice speaker.
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
   * The list of clone voices.
   */
  cloneVoices?: ListCloneVoiceResponseBodyDataCloneVoices[];
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
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated data of the clone voice list.
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
   * The error message.
   * 
   * @example
   * Instance llm-xdne77rxe14ziszr
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D771A1B6-3D5F-174A-BEE1-98CE1000D337
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

