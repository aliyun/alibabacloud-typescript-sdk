// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels extends $dara.Model {
  channel?: string[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo extends $dara.Model {
  channels?: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels;
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * ok
   */
  detail?: string;
  /**
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      count: 'Count',
      detail: 'Detail',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels,
      count: 'number',
      detail: 'string',
      result: 'string',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResult extends $dara.Model {
  forbidResultInfo?: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo[];
  static names(): { [key: string]: string } {
    return {
      forbidResultInfo: 'ForbidResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbidResultInfo: { 'type': 'array', 'itemType': BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.forbidResultInfo)) {
      $dara.Model.validateArray(this.forbidResultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBody extends $dara.Model {
  forbidResult?: BatchForbidVsStreamResponseBodyForbidResult;
  /**
   * @example
   * B058D71B-76EA-5DF6-ACAF-A617C1E7937F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbidResult: 'ForbidResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbidResult: BatchForbidVsStreamResponseBodyForbidResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.forbidResult && typeof (this.forbidResult as any).validate === 'function') {
      (this.forbidResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

