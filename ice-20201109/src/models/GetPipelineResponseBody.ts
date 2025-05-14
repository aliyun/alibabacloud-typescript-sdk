// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPipelineResponseBodyPipeline } from "./GetPipelineResponseBodyPipeline";


export class GetPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the MPS queue.
   */
  pipeline?: GetPipelineResponseBodyPipeline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
      pipeline: GetPipelineResponseBodyPipeline,
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

