// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmPipelineBatchRequest extends $dara.Model {
  /**
   * @remarks
   * true
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  confirm?: boolean;
  /**
   * @remarks
   * e2e-vds-feh-\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * e2e-vds-feh-***
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      confirm: 'Confirm',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirm: 'boolean',
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

