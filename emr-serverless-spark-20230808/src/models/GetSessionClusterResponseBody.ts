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
   * The key of the configuration.
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
   * Indicates whether automatic startup is enabled.
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

export class GetSessionClusterResponseBodySessionClusterAutoStopConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic termination is enabled.
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

export class GetSessionClusterResponseBodySessionClusterStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The status change code.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The status change message.
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
   * The Spark configurations.
   */
  applicationConfigs?: GetSessionClusterResponseBodySessionClusterApplicationConfigs[];
  /**
   * @remarks
   * Indicates whether automatic startup is enabled.
   */
  autoStartConfiguration?: GetSessionClusterResponseBodySessionClusterAutoStartConfiguration;
  /**
   * @remarks
   * Indicates whether automatic termination is enabled.
   */
  autoStopConfiguration?: GetSessionClusterResponseBodySessionClusterAutoStopConfiguration;
  connectionToken?: string;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-2.2(Java Runtime)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The domain name to which the Spark UI of the session belongs.
   * 
   * @example
   * your.domain.com
   */
  domain?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * emr-spark-gateway-cn-hangzhou-internal.data.aliyuncs.com
   */
  domainInner?: string;
  /**
   * @remarks
   * The ID of the job that is associated with the session.
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
   * env-cpv569tlhtgndjl86t40
   */
  envId?: string;
  /**
   * @remarks
   * The additional metadata of the session.
   * 
   * @example
   * {"extraInfoKey":"extraInfoValue"}
   */
  extra?: string;
  /**
   * @remarks
   * Indicates whether the Fusion engine is used for acceleration.
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
   * 2024-09-01 06:23:01
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The type of the job. This parameter is required and cannot be modified after the deployment is created. Valid values:
   * 
   * *   SQLSCRIPT
   * *   JAR
   * *   PYTHON
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The name of the session.
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
   * jobName
   */
  queueName?: string;
  /**
   * @remarks
   * The version of Serverless Spark.
   * 
   * @example
   * esr-2.2(Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-1234567890ab
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-09-01 06:23:01
   */
  startTime?: number;
  /**
   * @remarks
   * The job status.
   * 
   * *   Starting
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Error
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason of the job status change.
   */
  stateChangeReason?: GetSessionClusterResponseBodySessionClusterStateChangeReason;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * jr-231231
   */
  userId?: string;
  /**
   * @remarks
   * The name of the account that is used to create the session.
   * 
   * @example
   * user1
   */
  userName?: string;
  /**
   * @remarks
   * The Spark UI of the session.
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

