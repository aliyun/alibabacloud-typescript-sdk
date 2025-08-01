// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAudioAsrTaskStatusResponseBodyResult } from "./GetAudioAsrTaskStatusResponseBodyResult";
import { GetAudioAsrTaskStatusResponseBodyUsage } from "./GetAudioAsrTaskStatusResponseBodyUsage";


export class GetAudioAsrTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetAudioAsrTaskStatusResponseBodyResult;
  usage?: GetAudioAsrTaskStatusResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetAudioAsrTaskStatusResponseBodyResult,
      usage: GetAudioAsrTaskStatusResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

