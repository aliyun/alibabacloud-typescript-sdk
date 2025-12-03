// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineJobsResponseBodyJobs extends $dara.Model {
  /**
   * @example
   * ss_saxsxsxs
   */
  identifier?: string;
  jobName?: string;
  /**
   * @example
   * 123
   */
  lastJobId?: number;
  /**
   * @example
   * {}
   */
  lastJobParams?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      jobName: 'jobName',
      lastJobId: 'lastJobId',
      lastJobParams: 'lastJobParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      jobName: 'string',
      lastJobId: 'number',
      lastJobParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineJobsResponseBody extends $dara.Model {
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
  jobs?: ListPipelineJobsResponseBodyJobs[];
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
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      jobs: 'jobs',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobs: { 'type': 'array', 'itemType': ListPipelineJobsResponseBodyJobs },
      requestId: 'string',
      success: 'boolean',
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

