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
   * The key of a Spark configuration item.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of a Spark configuration item.
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
   * - true: Enables automatic startup.
   * 
   * - false: Disables automatic startup.
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
   * Specifies whether to enable automatic stop.
   * 
   * - true: Enables automatic stop.
   * 
   * - false: Disables automatic stop.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The idle timeout period of the session. The session is automatically stopped after it is idle for the specified period. Unit: minutes.
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
   * The Spark application configurations.
   */
  applicationConfigs?: CreateSessionClusterRequestApplicationConfigs[];
  /**
   * @remarks
   * The automatic startup configuration.
   * 
   * - true: Yes.
   * 
   * - false: No.
   */
  autoStartConfiguration?: CreateSessionClusterRequestAutoStartConfiguration;
  /**
   * @remarks
   * The automatic stop configuration.
   */
  autoStopConfiguration?: CreateSessionClusterRequestAutoStopConfiguration;
  clientToken?: string;
  /**
   * @remarks
   * The version that is displayed in the console.
   * 
   * @example
   * esr-3.3.1
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The ID of the Python environment. This parameter applies only to Notebook sessions.
   * 
   * @example
   * env-cpv569tlhtgndjl86t40
   */
  envId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Fusion engine for acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The type of the session. Valid values:
   * 
   * - SQL: an SQL session.
   * 
   * - NOTEBOOK: a Notebook session.
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The name of the task.
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
   * The version of the Spark engine.
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
      clientToken: 'clientToken',
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
      clientToken: 'string',
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

