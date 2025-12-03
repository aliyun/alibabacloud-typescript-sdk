// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineBaseInfoRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  envId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pipelineName?: string;
  /**
   * @example
   * "11,222,33"
   */
  tagList?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'envId',
      pipelineName: 'pipelineName',
      tagList: 'tagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'number',
      pipelineName: 'string',
      tagList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

