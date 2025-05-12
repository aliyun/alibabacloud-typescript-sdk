// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePipelineResponseBodyPipeline } from "./UpdatePipelineResponseBodyPipeline";


export class UpdatePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the MPS queue.
   */
  pipeline?: UpdatePipelineResponseBodyPipeline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1FE0F96B-544D-4244-9D83-DFCFB0E5A231
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
      pipeline: UpdatePipelineResponseBodyPipeline,
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

