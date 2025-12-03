// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsResponseBodyPipelineRuns extends $dara.Model {
  /**
   * @example
   * 1222222222
   */
  creatorAccountId?: string;
  /**
   * @example
   * 1586863220000
   */
  endTime?: number;
  /**
   * @example
   * 1234
   */
  pipelineId?: number;
  /**
   * @example
   * 11
   */
  pipelineRunId?: number;
  /**
   * @example
   * 1586863220000
   */
  startTime?: number;
  /**
   * @example
   * 状态 FAIL 运行失败 SUCCESS 运行成功 RUNNING 运行中
   */
  status?: string;
  /**
   * @example
   * 1
   */
  triggerMode?: number;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      endTime: 'endTime',
      pipelineId: 'pipelineId',
      pipelineRunId: 'pipelineRunId',
      startTime: 'startTime',
      status: 'status',
      triggerMode: 'triggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      endTime: 'number',
      pipelineId: 'number',
      pipelineRunId: 'number',
      startTime: 'number',
      status: 'string',
      triggerMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBody extends $dara.Model {
  /**
   * @example
   * ”“
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * xzxsasasaas
   */
  nextToken?: string;
  pipelineRuns?: ListPipelineRunsResponseBodyPipelineRuns[];
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
      pipelineRuns: 'pipelineRuns',
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
      pipelineRuns: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPipelineRuns },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRuns)) {
      $dara.Model.validateArray(this.pipelineRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

