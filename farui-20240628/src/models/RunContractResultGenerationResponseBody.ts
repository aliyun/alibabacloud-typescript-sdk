// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractResultGenerationResponseBodyOutput } from "./RunContractResultGenerationResponseBodyOutput";
import { RunContractResultGenerationResponseBodyUsage } from "./RunContractResultGenerationResponseBodyUsage";


export class RunContractResultGenerationResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  message?: string;
  output?: RunContractResultGenerationResponseBodyOutput;
  /**
   * @example
   * 744419D0-671A-5997-9840-E8AE48356194
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  usage?: RunContractResultGenerationResponseBodyUsage;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      output: 'Output',
      requestId: 'RequestId',
      success: 'Success',
      usage: 'Usage',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      output: RunContractResultGenerationResponseBodyOutput,
      requestId: 'string',
      success: 'boolean',
      usage: RunContractResultGenerationResponseBodyUsage,
      httpStatusCode: 'string',
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

