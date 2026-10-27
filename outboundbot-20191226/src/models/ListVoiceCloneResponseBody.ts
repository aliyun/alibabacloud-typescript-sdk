// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceCloneResponseBodyDataVoiceClones extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator of the voice.
   * 
   * @example
   * 1353945678901234
   */
  creator?: string;
  /**
   * @remarks
   * The type of the text-to-speech (TTS) engine used by the voice.
   * 
   * @example
   * bailian
   */
  engine?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1791891200000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1791891200000
   */
  gmtModified?: number;
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
   * The identifier of the model used for cloning.
   * 
   * @example
   * cosyvoice-v3.5-flash
   */
  model?: string;
  /**
   * @remarks
   * The voice status. Valid values: Enabled (available) and Disabled (unavailable).
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * cosyvoice-v2-067dc4b2e9d34dbeb5de20b5b093d1e3
   */
  voiceId?: string;
  /**
   * @remarks
   * The voice name.
   * 
   * @example
   * Cloned Voice 1
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      engine: 'Engine',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      model: 'Model',
      status: 'Status',
      voiceId: 'VoiceId',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      engine: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      model: 'string',
      status: 'string',
      voiceId: 'string',
      voiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCloneResponseBodyData extends $dara.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of cloned voices that meet the filter conditions.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of cloned voices.
   */
  voiceClones?: ListVoiceCloneResponseBodyDataVoiceClones[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voiceClones: 'VoiceClones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voiceClones: { 'type': 'array', 'itemType': ListVoiceCloneResponseBodyDataVoiceClones },
    };
  }

  validate() {
    if(Array.isArray(this.voiceClones)) {
      $dara.Model.validateArray(this.voiceClones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCloneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVoiceCloneResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 7A573837-3AD3-54CF-930A-07A3287042C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListVoiceCloneResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

