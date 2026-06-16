// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLivyComputeResponseBodyDataAutoStopConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically start the gateway after it is created.
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of minutes after which the Livy Gateway is automatically stopped if it is idle.
   * 
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
   * @remarks
   * The authentication method.
   * 
   * @example
   * Token
   */
  authType?: string;
  /**
   * @remarks
   * The auto-stop configuration.
   */
  autoStopConfiguration?: GetLivyComputeResponseBodyDataAutoStopConfiguration;
  /**
   * @remarks
   * The ID of the Livy Gateway.
   * 
   * @example
   * lc-xxxxxxxxxxxxx
   */
  computeId?: string;
  /**
   * @remarks
   * The number of CPU cores for the Livy server.
   * 
   * @example
   * 1
   */
  cpuLimit?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * alice
   */
  createdBy?: string;
  /**
   * @remarks
   * The version number of the Spark engine.
   * 
   * @example
   * esr-4.3.0 (Spark 3.5.2, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The status of the public endpoint switch.
   * 
   * @example
   * true
   */
  enablePublic?: boolean;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * emr-spark-livy-gateway-cn-hangzhou.data.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpoint?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * emr-spark-livy-gateway-cn-hangzhou-internal.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpointInner?: string;
  /**
   * @remarks
   * The ID of the runtime environment.
   * 
   * @example
   * ev-cq31c7tlhtgm9nrrlj4g
   */
  environmentId?: string;
  /**
   * @remarks
   * Indicates whether the fusion switch is enabled.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1749456094000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The Livy Gateway configuration in JSON format. The following files are supported:
   * 
   * - sparkDefaultsConf
   * 
   * - sparkBlackListConf
   * 
   * - livyConf
   * 
   * - livyClientConf
   * 
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
   * @remarks
   * The Livy version.
   * 
   * @example
   * 0.8.0
   */
  livyVersion?: string;
  /**
   * @remarks
   * The memory size of the Livy server.
   * 
   * @example
   * 4Gi
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The name of the network connection.
   * 
   * @example
   * test
   */
  networkName?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 10000001
   */
  ramUserId?: string;
  /**
   * @remarks
   * The version number of the Spark engine. This parameter is deprecated. Use displayReleaseVersion instead.
   * 
   * @example
   * esr-4.3.0 (Spark 3.5.2, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1749456094000
   */
  startTime?: number;
  /**
   * @remarks
   * The running status.
   * 
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
   * @remarks
   * The response code. A value of 1000000 indicates a successful request. Other values indicate a failed request. Check the message parameter for the error details.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetLivyComputeResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

