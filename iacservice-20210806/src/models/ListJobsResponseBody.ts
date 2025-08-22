// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobsStatusDetailValue } from "./JobsStatusDetailValue";


export class ListJobsResponseBodyJobsConfig extends $dara.Model {
  isDestroy?: boolean;
  moduleDescription?: string;
  /**
   * @example
   * v4
   */
  moduleVersion?: string;
  /**
   * @example
   * {}
   */
  resourcesChanged?: string;
  subCommand?: string;
  static names(): { [key: string]: string } {
    return {
      isDestroy: 'isDestroy',
      moduleDescription: 'moduleDescription',
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
      subCommand: 'subCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDestroy: 'boolean',
      moduleDescription: 'string',
      moduleVersion: 'string',
      resourcesChanged: 'string',
      subCommand: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $dara.Model {
  config?: ListJobsResponseBodyJobsConfig;
  /**
   * @example
   * 2022-07-05T02:13:43Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  elapsedTime?: number;
  executeType?: string;
  /**
   * @example
   * true
   */
  isPassAssertCheck?: boolean;
  /**
   * @example
   * job-433aead756057fff9e4dca57b147c
   */
  jobId?: string;
  /**
   * @example
   * Errored
   */
  status?: string;
  statusDetail?: { [key: string]: JobsStatusDetailValue };
  /**
   * @example
   * task-518855d9a058c1176866c2c3efb
   */
  taskId?: string;
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      executeType: 'executeType',
      isPassAssertCheck: 'isPassAssertCheck',
      jobId: 'jobId',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListJobsResponseBodyJobsConfig,
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      executeType: 'string',
      isPassAssertCheck: 'boolean',
      jobId: 'string',
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobsStatusDetailValue },
      taskId: 'string',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.statusDetail) {
      $dara.Model.validateMap(this.statusDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  jobs?: ListJobsResponseBodyJobs[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 882304F9-6DB1-5593-A719-33473D082B9C
   */
  requestId?: string;
  /**
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

