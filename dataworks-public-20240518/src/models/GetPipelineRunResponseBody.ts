// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPipelineRunResponseBodyPipeline } from "./GetPipelineRunResponseBodyPipeline";


export class GetPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the process.
   */
  pipeline?: GetPipelineRunResponseBodyPipeline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08468352-032C-5262-AEDC-68C9FA05XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: GetPipelineRunResponseBodyPipeline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

