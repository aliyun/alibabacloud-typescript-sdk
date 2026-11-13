// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivyComputeRequestAutoStartConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically start the gateway after creation.
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLivyComputeRequestAutoStopConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically stop the gateway.
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The idle timeout in minutes after which the Livy gateway is automatically stopped.
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

export class CreateLivyComputeRequest extends $dara.Model {
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
   * The auto-start configuration.
   */
  autoStartConfiguration?: CreateLivyComputeRequestAutoStartConfiguration;
  /**
   * @remarks
   * The auto-stop configuration.
   */
  autoStopConfiguration?: CreateLivyComputeRequestAutoStopConfiguration;
  /**
   * @remarks
   * The number of CPU cores for the Livy server.
   * - 1
   * - 2
   * - 4
   * 
   * @example
   * 1
   */
  cpuLimit?: string;
  /**
   * @remarks
   * The Spark DPI engine database engine version number.
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
   * The ID of the runtime environment.
   * 
   * @example
   * ev-ctfq0fem1hkhgv4hapng
   */
  environmentId?: string;
  /**
   * @remarks
   * Specifies whether to enable Fusion engine acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The Livy gateway configuration in JSON format. The following files are supported:
   * 
   * - sparkDefaultsConf
   * - sparkBlackListConf
   * - livyConf
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
   * - 4Gi
   * - 8Gi
   * - 16Gi
   * 
   * @example
   * 4Gi
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The name of the Livy gateway.
   * 
   * @example
   * testGateway
   */
  name?: string;
  /**
   * @remarks
   * The name of the network connectivity.
   * 
   * @example
   * test
   */
  networkName?: string;
  /**
   * @remarks
   * The name of the submission queue.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The Spark DPI engine database engine version number. **[Deprecated]** Use displayReleaseVersion instead.
   * 
   * @example
   * esr-4.3.0 (Spark 3.5.2, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      autoStartConfiguration: 'autoStartConfiguration',
      autoStopConfiguration: 'autoStopConfiguration',
      cpuLimit: 'cpuLimit',
      displayReleaseVersion: 'displayReleaseVersion',
      enablePublic: 'enablePublic',
      environmentId: 'environmentId',
      fusion: 'fusion',
      livyServerConf: 'livyServerConf',
      livyVersion: 'livyVersion',
      memoryLimit: 'memoryLimit',
      name: 'name',
      networkName: 'networkName',
      queueName: 'queueName',
      releaseVersion: 'releaseVersion',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      autoStartConfiguration: CreateLivyComputeRequestAutoStartConfiguration,
      autoStopConfiguration: CreateLivyComputeRequestAutoStopConfiguration,
      cpuLimit: 'string',
      displayReleaseVersion: 'string',
      enablePublic: 'boolean',
      environmentId: 'string',
      fusion: 'boolean',
      livyServerConf: 'string',
      livyVersion: 'string',
      memoryLimit: 'string',
      name: 'string',
      networkName: 'string',
      queueName: 'string',
      releaseVersion: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.autoStartConfiguration && typeof (this.autoStartConfiguration as any).validate === 'function') {
      (this.autoStartConfiguration as any).validate();
    }
    if(this.autoStopConfiguration && typeof (this.autoStopConfiguration as any).validate === 'function') {
      (this.autoStopConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

