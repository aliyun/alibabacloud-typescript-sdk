// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111xxx
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      pipelineId: 'pipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
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

