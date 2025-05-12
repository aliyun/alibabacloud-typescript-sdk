// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the MPS queue that is deleted.
   * 
   * @example
   * d1ce4d3efcb549419193f50f1fcd****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 338CA33A-AE83-5DF4-B6F2-C6D3ED8143F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

