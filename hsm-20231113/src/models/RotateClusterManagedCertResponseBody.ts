// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RotateClusterManagedCertResponseBodyJob extends $dara.Model {
  /**
   * @example
   * true
   */
  completed?: boolean;
  /**
   * @example
   * 1653274407000
   */
  createTime?: string;
  /**
   * @example
   * OperationTimeout
   */
  error?: string;
  /**
   * @example
   * job-202401250936hze747fd7e0007005
   */
  jobId?: string;
  /**
   * @example
   * 100
   */
  process?: number;
  /**
   * @example
   * success
   */
  response?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      process: 'Process',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      process: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateClusterManagedCertResponseBody extends $dara.Model {
  job?: RotateClusterManagedCertResponseBodyJob;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: RotateClusterManagedCertResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

