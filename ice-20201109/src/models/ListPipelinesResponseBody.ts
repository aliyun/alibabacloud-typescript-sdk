// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesResponseBodyPipelineList extends $dara.Model {
  /**
   * @remarks
   * The pipeline creation time. The time is displayed in ISO 8601 format in UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The pipeline modification time. The time is displayed in ISO 8601 format in UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The pipeline priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The pipeline type.
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The pipeline status.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      speed: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of pipelines.
   */
  pipelineList?: ListPipelinesResponseBodyPipelineList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineList: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelineList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineList)) {
      $dara.Model.validateArray(this.pipelineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

