// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels } from "./BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels";


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

