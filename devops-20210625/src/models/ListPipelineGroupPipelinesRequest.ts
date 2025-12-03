// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineGroupPipelinesRequest extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createEndTime?: number;
  /**
   * @example
   * 1586863220000
   */
  createStartTime?: number;
  /**
   * @example
   * 1586863220000
   */
  executeEndTime?: number;
  /**
   * @example
   * 1586863220000
   */
  executeStartTime?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * aaaa
   */
  nextToken?: string;
  pipelineName?: string;
  /**
   * @example
   * RUNNING,SUCCESS
   */
  resultStatusList?: string;
  static names(): { [key: string]: string } {
    return {
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      executeEndTime: 'executeEndTime',
      executeStartTime: 'executeStartTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pipelineName: 'pipelineName',
      resultStatusList: 'resultStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndTime: 'number',
      createStartTime: 'number',
      executeEndTime: 'number',
      executeStartTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pipelineName: 'string',
      resultStatusList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

