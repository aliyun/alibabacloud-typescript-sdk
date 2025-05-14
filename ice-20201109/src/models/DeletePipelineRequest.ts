// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the MPS queue.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

