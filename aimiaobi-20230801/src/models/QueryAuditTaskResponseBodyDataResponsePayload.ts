// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAuditTaskResponseBodyDataResponsePayloadOutput } from "./QueryAuditTaskResponseBodyDataResponsePayloadOutput";
import { QueryAuditTaskResponseBodyDataResponsePayloadUsage } from "./QueryAuditTaskResponseBodyDataResponsePayloadUsage";


export class QueryAuditTaskResponseBodyDataResponsePayload extends $dara.Model {
  output?: QueryAuditTaskResponseBodyDataResponsePayloadOutput;
  usage?: QueryAuditTaskResponseBodyDataResponsePayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: QueryAuditTaskResponseBodyDataResponsePayloadOutput,
      usage: QueryAuditTaskResponseBodyDataResponsePayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

