// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunNetworkContentAuditResponseBodyPayloadOutput } from "./RunNetworkContentAuditResponseBodyPayloadOutput";
import { RunNetworkContentAuditResponseBodyPayloadUsage } from "./RunNetworkContentAuditResponseBodyPayloadUsage";


export class RunNetworkContentAuditResponseBodyPayload extends $dara.Model {
  output?: RunNetworkContentAuditResponseBodyPayloadOutput;
  usage?: RunNetworkContentAuditResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunNetworkContentAuditResponseBodyPayloadOutput,
      usage: RunNetworkContentAuditResponseBodyPayloadUsage,
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

