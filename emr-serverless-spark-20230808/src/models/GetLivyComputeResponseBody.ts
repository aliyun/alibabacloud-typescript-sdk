// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLivyComputeResponseBodyDataAutoStopConfiguration extends $dara.Model {
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @example
   * 300
   */
  idleTimeoutMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      idleTimeoutMinutes: 'idleTimeoutMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      idleTimeoutMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLivyComputeResponseBodyData extends $dara.Model {
  /**
   * @example
   * Token
   */
  authType?: string;
  autoStopConfiguration?: GetLivyComputeResponseBodyDataAutoStopConfiguration;
  /**
   * @example
   * lc-xxxxxxxxxxxxx
   */
  computeId?: string;
  /**
   * @example
   * 1
   */
  cpuLimit?: string;
  /**
   * @example
   * alice
   */
  createdBy?: string;
  /**
   * @example
   * esr-4.3.0 (Spark 3.5.2, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @example
   * true
   */
  enablePublic?: boolean;
  /**
   * @example
   * emr-spark-livy-gateway-cn-hangzhou.data.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpoint?: string;
  /**
   * @example
   * emr-spark-livy-gateway-cn-hangzhou-internal.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpointInner?: string;
  /**
   * @example
   * ev-cq31c7tlhtgm9nrrlj4g
   */
  environmentId?: string;
  /**
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @example
   * 1749456094000
   */
  gmtCreate?: number;
  /**
   * @example
   * {
   *   "sparkDefaultsConf": "spark.driver.cores     1\\nspark.driver.memory    4g\\nspark.executor.cores   1\\nspark.executor.memory  4g\\n",
   *   "sparkBlackListConf": "spark.driver.cores\\nspark.driver.memory",
   *   "livyConf": "livy.server.session.timeout  1h\\n",
   *   "livyClientConf": "livy.rsc.sql.num-rows  1000\\n"
   * }
   */
  livyServerConf?: string;
  /**
   * @example
   * 0.8.0
   */
  livyVersion?: string;
  /**
   * @example
   * 4Gi
   */
  memoryLimit?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * test
   */
  networkName?: string;
  /**
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @example
   * 10000001
   */
  ramUserId?: string;
  /**
   * @example
   * esr-4.3.0 (Spark 3.5.2, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @example
   * 1749456094000
   */
  startTime?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      autoStopConfiguration: 'autoStopConfiguration',
      computeId: 'computeId',
      cpuLimit: 'cpuLimit',
      createdBy: 'createdBy',
      displayReleaseVersion: 'displayReleaseVersion',
      enablePublic: 'enablePublic',
      endpoint: 'endpoint',
      endpointInner: 'endpointInner',
      environmentId: 'environmentId',
      fusion: 'fusion',
      gmtCreate: 'gmtCreate',
      livyServerConf: 'livyServerConf',
      livyVersion: 'livyVersion',
      memoryLimit: 'memoryLimit',
      name: 'name',
      networkName: 'networkName',
      queueName: 'queueName',
      ramUserId: 'ramUserId',
      releaseVersion: 'releaseVersion',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      autoStopConfiguration: GetLivyComputeResponseBodyDataAutoStopConfiguration,
      computeId: 'string',
      cpuLimit: 'string',
      createdBy: 'string',
      displayReleaseVersion: 'string',
      enablePublic: 'boolean',
      endpoint: 'string',
      endpointInner: 'string',
      environmentId: 'string',
      fusion: 'boolean',
      gmtCreate: 'number',
      livyServerConf: 'string',
      livyVersion: 'string',
      memoryLimit: 'string',
      name: 'string',
      networkName: 'string',
      queueName: 'string',
      ramUserId: 'string',
      releaseVersion: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.autoStopConfiguration && typeof (this.autoStopConfiguration as any).validate === 'function') {
      (this.autoStopConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLivyComputeResponseBody extends $dara.Model {
  /**
   * @example
   * 1000000
   */
  code?: string;
  data?: GetLivyComputeResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetLivyComputeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

