// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoicesResponseBodyDataCloneVoices extends $dara.Model {
  /**
   * @remarks
   * The UUID of the cloned voice.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  cloneVoiceId?: string;
  /**
   * @remarks
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * TestClonedVoice
   */
  name?: string;
  /**
   * @remarks
   * The speech vendor.
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
   * 1308144684576765
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * cosyvoice-v3-flash-voicebot2-8aa485413eba42089c873eec1f901d64
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

export class ListCloneVoicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of cloned voices.
   */
  cloneVoices?: ListCloneVoicesResponseBodyDataCloneVoices[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records that match the conditions.
   * 
   * @example
   * 0
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
      cloneVoices: { 'type': 'array', 'itemType': ListCloneVoicesResponseBodyDataCloneVoices },
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

export class ListCloneVoicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListCloneVoicesResponseBodyData;
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
   * Instance does not exist. Instance=anchashi.
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
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
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
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCloneVoicesResponseBodyData,
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

