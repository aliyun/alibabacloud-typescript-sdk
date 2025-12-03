// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineGroupPipelinesResponseBodyPipelines extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 1111
   */
  pipelineId?: number;
  pipelineName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      pipelineId: 'pipelineId',
      pipelineName: 'pipelineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      pipelineId: 'number',
      pipelineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineGroupPipelinesResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * aaaa
   */
  nextToken?: string;
  pipelines?: ListPipelineGroupPipelinesResponseBodyPipelines[];
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      nextToken: 'nextToken',
      pipelines: 'pipelines',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      pipelines: { 'type': 'array', 'itemType': ListPipelineGroupPipelinesResponseBodyPipelines },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelines)) {
      $dara.Model.validateArray(this.pipelines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

