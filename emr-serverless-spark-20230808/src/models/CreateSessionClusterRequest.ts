// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionClusterRequestApplicationConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * spark-defaults.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of SparkConf.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of SparkConf.
   * 
   * @example
   * test
   */
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configFileName: 'configFileName',
      configItemKey: 'configItemKey',
      configItemValue: 'configItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionClusterRequestAutoStartConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic startup.
   * 
   * *   true
   * *   false
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

export class CreateSessionClusterRequestAutoStopConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic termination.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The idle timeout period. The session is automatically terminated when the idle timeout period is exceeded.
   * 
   * @example
   * 60
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

export class CreateSessionClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The Spark configurations.
   */
  applicationConfigs?: CreateSessionClusterRequestApplicationConfigs[];
  /**
   * @remarks
   * Specifies whether to enable automatic startup.
   * 
   * *   true
   * *   false
   */
  autoStartConfiguration?: CreateSessionClusterRequestAutoStartConfiguration;
  /**
   * @remarks
   * The automatic termination configuration.
   */
  autoStopConfiguration?: CreateSessionClusterRequestAutoStopConfiguration;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-3.3.1
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The ID of the Python environment. This parameter takes effect only for notebook sessions.
   * 
   * @example
   * env-cpv569tlhtgndjl86t40
   */
  envId?: string;
  /**
   * @remarks
   * Specifies whether to enable Fusion engine for acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The session type.
   * 
   * *   SQL
   * *   NOTEBOOK
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * spark_job_name
   */
  name?: string;
  publicEndpointEnabled?: boolean;
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
   * The version number of Spark.
   * 
   * @example
   * esr-3.3.1
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
      applicationConfigs: 'applicationConfigs',
      autoStartConfiguration: 'autoStartConfiguration',
      autoStopConfiguration: 'autoStopConfiguration',
      displayReleaseVersion: 'displayReleaseVersion',
      envId: 'envId',
      fusion: 'fusion',
      kind: 'kind',
      name: 'name',
      publicEndpointEnabled: 'publicEndpointEnabled',
      queueName: 'queueName',
      releaseVersion: 'releaseVersion',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': CreateSessionClusterRequestApplicationConfigs },
      autoStartConfiguration: CreateSessionClusterRequestAutoStartConfiguration,
      autoStopConfiguration: CreateSessionClusterRequestAutoStopConfiguration,
      displayReleaseVersion: 'string',
      envId: 'string',
      fusion: 'boolean',
      kind: 'string',
      name: 'string',
      publicEndpointEnabled: 'boolean',
      queueName: 'string',
      releaseVersion: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigs)) {
      $dara.Model.validateArray(this.applicationConfigs);
    }
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

