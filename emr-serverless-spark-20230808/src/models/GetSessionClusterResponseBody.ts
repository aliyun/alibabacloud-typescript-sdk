// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionClusterResponseBodySessionClusterApplicationConfigs extends $dara.Model {
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
   * The configuration key.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The configuration value.
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

export class GetSessionClusterResponseBodySessionClusterAutoStartConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-start.
   * 
   * - true: Auto-start is enabled.
   * 
   * - false: Auto-start is disabled.
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

export class GetSessionClusterResponseBodySessionClusterAutoStopConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-stop.
   * 
   * - true: Auto-stop is enabled.
   * 
   * - false: Auto-stop is disabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of minutes a session can be idle before it is automatically stopped.
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

export class GetSessionClusterResponseBodySessionClusterStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The state change code.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The state change message.
   * 
   * @example
   * ok
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterResponseBodySessionCluster extends $dara.Model {
  /**
   * @remarks
   * The list of Spark application configurations.
   */
  applicationConfigs?: GetSessionClusterResponseBodySessionClusterApplicationConfigs[];
  /**
   * @remarks
   * The auto-start configuration.
   */
  autoStartConfiguration?: GetSessionClusterResponseBodySessionClusterAutoStartConfiguration;
  /**
   * @remarks
   * The auto-stop configuration.
   */
  autoStopConfiguration?: GetSessionClusterResponseBodySessionClusterAutoStopConfiguration;
  connectionToken?: string;
  /**
   * @remarks
   * The version that is displayed in the console.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The domain name of the Spark UI for the session.
   * 
   * @example
   * your.domain.com
   */
  domain?: string;
  /**
   * @remarks
   * The internal same-region endpoint.
   * 
   * @example
   * emr-spark-gateway-cn-hangzhou-internal.data.aliyuncs.com
   */
  domainInner?: string;
  /**
   * @remarks
   * The ID of the developer job that is attached to the session.
   * 
   * @example
   * TSK-xxxxxxxx
   */
  draftId?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpv569tlhtgndjl8****
   */
  envId?: string;
  /**
   * @remarks
   * The extra metadata of the session.
   * 
   * @example
   * {"extraInfoKey":"extraInfoValue"}
   */
  extra?: string;
  /**
   * @remarks
   * Specifies whether to enable acceleration using the Fusion engine.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 2024-09-01 06:23:01
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The job type. This parameter is required and cannot be modified after the job is created.
   * 
   * - SQLSCRIPT: an SQL job.
   * 
   * - JAR: a JAR job.
   * 
   * - PYTHON: a Python job.
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The session name.
   * 
   * @example
   * test
   */
  name?: string;
  publicEndpointEnabled?: boolean;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * dev_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The Serverless Spark version.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The session cluster ID.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-1234567890ab
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The time when the session started.
   * 
   * @example
   * 2024-09-01 06:23:01
   */
  startTime?: number;
  /**
   * @remarks
   * The state of the job.
   * 
   * - Starting: The job is starting.
   * 
   * - Running: The job is running.
   * 
   * - Stopping: The job is stopping.
   * 
   * - Stopped: The job is stopped.
   * 
   * - Error: The job failed.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason for the state change.
   */
  stateChangeReason?: GetSessionClusterResponseBodySessionClusterStateChangeReason;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123xxxxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user who created the session.
   * 
   * @example
   * user1
   */
  userName?: string;
  /**
   * @remarks
   * The URL of the Spark UI for the session.
   * 
   * @example
   * https://spark-ui/link
   */
  webUI?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'applicationConfigs',
      autoStartConfiguration: 'autoStartConfiguration',
      autoStopConfiguration: 'autoStopConfiguration',
      connectionToken: 'connectionToken',
      displayReleaseVersion: 'displayReleaseVersion',
      domain: 'domain',
      domainInner: 'domainInner',
      draftId: 'draftId',
      envId: 'envId',
      extra: 'extra',
      fusion: 'fusion',
      gmtCreate: 'gmtCreate',
      kind: 'kind',
      name: 'name',
      publicEndpointEnabled: 'publicEndpointEnabled',
      queueName: 'queueName',
      releaseVersion: 'releaseVersion',
      sessionClusterId: 'sessionClusterId',
      startTime: 'startTime',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      userId: 'userId',
      userName: 'userName',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': GetSessionClusterResponseBodySessionClusterApplicationConfigs },
      autoStartConfiguration: GetSessionClusterResponseBodySessionClusterAutoStartConfiguration,
      autoStopConfiguration: GetSessionClusterResponseBodySessionClusterAutoStopConfiguration,
      connectionToken: 'string',
      displayReleaseVersion: 'string',
      domain: 'string',
      domainInner: 'string',
      draftId: 'string',
      envId: 'string',
      extra: 'string',
      fusion: 'boolean',
      gmtCreate: 'number',
      kind: 'string',
      name: 'string',
      publicEndpointEnabled: 'boolean',
      queueName: 'string',
      releaseVersion: 'string',
      sessionClusterId: 'string',
      startTime: 'number',
      state: 'string',
      stateChangeReason: GetSessionClusterResponseBodySessionClusterStateChangeReason,
      userId: 'string',
      userName: 'string',
      webUI: 'string',
      workspaceId: 'string',
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
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The session object.
   */
  sessionCluster?: GetSessionClusterResponseBodySessionCluster;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionCluster: 'sessionCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionCluster: GetSessionClusterResponseBodySessionCluster,
    };
  }

  validate() {
    if(this.sessionCluster && typeof (this.sessionCluster as any).validate === 'function') {
      (this.sessionCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

