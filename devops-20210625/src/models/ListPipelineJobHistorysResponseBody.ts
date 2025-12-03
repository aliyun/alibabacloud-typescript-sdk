// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineJobHistorysResponseBodyJobs extends $dara.Model {
  /**
   * @example
   * 1
   */
  executeNumber?: number;
  /**
   * @example
   * 10_xaxxsxa
   */
  identifier?: string;
  /**
   * @example
   * 123
   */
  jobId?: number;
  jobName?: string;
  /**
   * @example
   * ssaasssa
   */
  operatorAccountId?: string;
  /**
   * @example
   * 123
   */
  pipelineId?: number;
  /**
   * @example
   * 123
   */
  pipelineRunId?: number;
  /**
   * @example
   * {}
   */
  sources?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executeNumber: 'executeNumber',
      identifier: 'identifier',
      jobId: 'jobId',
      jobName: 'jobName',
      operatorAccountId: 'operatorAccountId',
      pipelineId: 'pipelineId',
      pipelineRunId: 'pipelineRunId',
      sources: 'sources',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeNumber: 'number',
      identifier: 'string',
      jobId: 'number',
      jobName: 'string',
      operatorAccountId: 'string',
      pipelineId: 'number',
      pipelineRunId: 'number',
      sources: 'string',
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

export class ListPipelineJobHistorysResponseBody extends $dara.Model {
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
  jobs?: ListPipelineJobHistorysResponseBodyJobs[];
  /**
   * @example
   * xsxxs
   */
  nextToken?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true 接口调用成功，false 接口调用失败
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
      jobs: 'jobs',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobs: { 'type': 'array', 'itemType': ListPipelineJobHistorysResponseBodyJobs },
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

