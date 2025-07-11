// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels extends $dara.Model {
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

export class BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo extends $dara.Model {
  channels?: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels;
  /**
   * @example
   * 1
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
      channels: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels,
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

export class BatchResumeVsStreamResponseBodyResumeResult extends $dara.Model {
  resumeResultInfo?: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resumeResultInfo: 'ResumeResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resumeResultInfo: { 'type': 'array', 'itemType': BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resumeResultInfo)) {
      $dara.Model.validateArray(this.resumeResultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  resumeResult?: BatchResumeVsStreamResponseBodyResumeResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resumeResult: 'ResumeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resumeResult: BatchResumeVsStreamResponseBodyResumeResult,
    };
  }

  validate() {
    if(this.resumeResult && typeof (this.resumeResult as any).validate === 'function') {
      (this.resumeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

