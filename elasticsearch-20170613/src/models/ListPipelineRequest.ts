// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * pipeline_test
   */
  pipelineId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 15
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pipelineId: 'pipelineId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pipelineId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

