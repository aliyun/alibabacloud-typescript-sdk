// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page for a paged query. Valid values: 1 to 200. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * pipeline_test
   */
  pipelineId?: string;
  /**
   * @remarks
   * The number of pipelines per page for a paged query. Valid values: 1 to 200.
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

