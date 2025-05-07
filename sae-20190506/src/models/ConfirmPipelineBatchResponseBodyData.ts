// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmPipelineBatchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the batch.
   * 
   * @example
   * e2e-vds-feh-***
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

