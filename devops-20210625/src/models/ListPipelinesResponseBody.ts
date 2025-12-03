// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesResponseBodyPipelines extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 22121222
   */
  creatorAccountId?: string;
  groupId?: number;
  /**
   * @example
   * 124
   */
  pipelineId?: number;
  /**
   * @example
   * 流水线
   */
  pipelineName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      groupId: 'groupId',
      pipelineId: 'pipelineId',
      pipelineName: 'pipelineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorAccountId: 'string',
      groupId: 'number',
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

export class ListPipelinesResponseBody extends $dara.Model {
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
   * ssaassasass
   */
  nextToken?: string;
  pipelines?: ListPipelinesResponseBodyPipelines[];
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
   * 50
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
      pipelines: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelines },
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

