// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleUser } from "./SimpleUser";


export class JobJobResult extends $dara.Model {
  /**
   * @remarks
   * Return value link, which is the OSS path where the annotation results are stored.
   * 
   * @example
   * oss://****-hz-oss.oss-cn-hangzhou.aliyuncs.com/output/ocr_demo001.manifest
   */
  resultLink?: string;
  static names(): { [key: string]: string } {
    return {
      resultLink: 'ResultLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Job extends $dara.Model {
  /**
   * @remarks
   * Job creator.
   */
  creator?: SimpleUser;
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 2021-12-28 11:42:19
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Updated At.
   * 
   * @example
   * 2021-12-28 11:42:20
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 147***441221943296
   */
  jobId?: string;
  /**
   * @remarks
   * Task Result.
   */
  jobResult?: JobJobResult;
  /**
   * @remarks
   * Task Type. Currently, only DOWNLOWD_MARKRESULT_FLOW is supported.
   * 
   * @example
   * DOWNLOWD_MARKRESULT_FLOW
   */
  jobType?: string;
  /**
   * @remarks
   * Job status. Possible values:
   * - init: initialization
   * - running: running
   * - pause: pause
   * - stop: stopped
   * - succ: Succeeded
   * - fail: failed
   * 
   * @example
   * succ
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      jobId: 'JobId',
      jobResult: 'JobResult',
      jobType: 'JobType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: SimpleUser,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      jobId: 'string',
      jobResult: JobJobResult,
      jobType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.jobResult && typeof (this.jobResult as any).validate === 'function') {
      (this.jobResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

