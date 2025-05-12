// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddPipelineResponseBodyPipeline } from "./AddPipelineResponseBodyPipeline";


export class AddPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MPS queue.
   */
  pipeline?: AddPipelineResponseBodyPipeline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CFEA608A-5A1C-4C83-A54B-6197BC250D23
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
      pipeline: AddPipelineResponseBodyPipeline,
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

