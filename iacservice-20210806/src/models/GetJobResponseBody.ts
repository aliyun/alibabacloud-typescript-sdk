// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobStatusDetailValue } from "./JobStatusDetailValue";


export class GetJobResponseBodyJobAssertCheckDetail extends $dara.Model {
  /**
   * @example
   * eq
   */
  comparison?: string;
  expectedValue?: string;
  /**
   * @example
   * true
   */
  isPass?: boolean;
  /**
   * @example
   * result
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comparison: 'comparison',
      expectedValue: 'expectedValue',
      isPass: 'isPass',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparison: 'string',
      expectedValue: 'string',
      isPass: 'boolean',
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

export class GetJobResponseBodyJobConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  autoApply?: boolean;
  /**
   * @example
   * fales
   */
  isDestroy?: boolean;
  /**
   * @example
   * v1
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
      autoApply: 'autoApply',
      isDestroy: 'isDestroy',
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
      subCommand: 'subCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      isDestroy: 'boolean',
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

export class GetJobResponseBodyJob extends $dara.Model {
  assertCheckDetail?: GetJobResponseBodyJobAssertCheckDetail[];
  config?: GetJobResponseBodyJobConfig;
  /**
   * @example
   * 2022-08-31T03:38:40Z
   */
  createTime?: string;
  /**
   * @example
   * test1
   */
  description?: string;
  downloadUrl?: { [key: string]: any };
  elapsedTime?: number;
  executeType?: string;
  /**
   * @example
   * true
   */
  isPassAssertCheck?: boolean;
  /**
   * @example
   * job-518855d9a058cfff0dc933e6b5767
   */
  jobId?: string;
  logFile?: { [key: string]: any };
  /**
   * @example
   * /
   */
  output?: string;
  outputJsonPlan?: any;
  parameters?: { [key: string]: string };
  /**
   * @example
   * Errored
   */
  status?: string;
  statusDetail?: { [key: string]: JobStatusDetailValue };
  /**
   * @example
   * task-3b6cb9fa4751a1b9b5f22cbcf4e
   */
  taskId?: string;
  taskType?: string;
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      assertCheckDetail: 'assertCheckDetail',
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      downloadUrl: 'downloadUrl',
      elapsedTime: 'elapsedTime',
      executeType: 'executeType',
      isPassAssertCheck: 'isPassAssertCheck',
      jobId: 'jobId',
      logFile: 'logFile',
      output: 'output',
      outputJsonPlan: 'outputJsonPlan',
      parameters: 'parameters',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
      taskType: 'taskType',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertCheckDetail: { 'type': 'array', 'itemType': GetJobResponseBodyJobAssertCheckDetail },
      config: GetJobResponseBodyJobConfig,
      createTime: 'string',
      description: 'string',
      downloadUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      elapsedTime: 'number',
      executeType: 'string',
      isPassAssertCheck: 'boolean',
      jobId: 'string',
      logFile: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      output: 'string',
      outputJsonPlan: 'any',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobStatusDetailValue },
      taskId: 'string',
      taskType: 'string',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assertCheckDetail)) {
      $dara.Model.validateArray(this.assertCheckDetail);
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.downloadUrl) {
      $dara.Model.validateMap(this.downloadUrl);
    }
    if(this.logFile) {
      $dara.Model.validateMap(this.logFile);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
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

export class GetJobResponseBody extends $dara.Model {
  job?: GetJobResponseBodyJob;
  /**
   * @example
   * 1435C78A-AED9-53D6-B7A6-E2661D29B1FA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'job',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetJobResponseBodyJob,
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

