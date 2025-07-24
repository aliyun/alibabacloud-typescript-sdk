// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionClustersResponseBodySessionClustersApplicationConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * spark-default.conf
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
   * test_application
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

export class ListSessionClustersResponseBodySessionClustersAutoStartConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic startup is enabled.
   * 
   * @example
   * true
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

export class ListSessionClustersResponseBodySessionClustersAutoStopConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic termination is enabled.
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
   * 45
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

export class ListSessionClustersResponseBodySessionClustersStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The status change code.
   * 
   * @example
   * 200
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

export class ListSessionClustersResponseBodySessionClusters extends $dara.Model {
  /**
   * @remarks
   * The session configurations, which are equivalent to the configurations of the Spark job.
   */
  applicationConfigs?: ListSessionClustersResponseBodySessionClustersApplicationConfigs[];
  /**
   * @remarks
   * The automatic startup configurations.
   */
  autoStartConfiguration?: ListSessionClustersResponseBodySessionClustersAutoStartConfiguration;
  /**
   * @remarks
   * The configurations of automatic termination.
   */
  autoStopConfiguration?: ListSessionClustersResponseBodySessionClustersAutoStopConfiguration;
  connectionToken?: string;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The public endpoint of the Thrift server.
   * 
   * @example
   * emr-spark-gateway-cn-hangzhou.data.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The internal endpoint of the Thrift server.
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
   * TSK-xxxxxxxxx
   */
  draftId?: string;
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
   * 1732267598000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The session type.
   * 
   * Valid values:
   * 
   * *   NOTEBOOK
   * *   THRIFT
   * *   SQL
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
   * adhoc_query
   */
  name?: string;
  publicEndpointEnabled?: boolean;
  /**
   * @remarks
   * The name of the queue that is used to run the session.
   * 
   * @example
   * dev_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The version of EMR Serverless Spark.
   * 
   * @example
   * esr-2.1
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * sc-123131
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1732267598000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the session.
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
   * The details of the most recent status change of the session.
   */
  stateChangeReason?: ListSessionClustersResponseBodySessionClustersStateChangeReason;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123131
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test_user
   */
  userName?: string;
  /**
   * @remarks
   * The Spark UI of the session.
   * 
   * @example
   * http://spark-ui-xxxx
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
      applicationConfigs: { 'type': 'array', 'itemType': ListSessionClustersResponseBodySessionClustersApplicationConfigs },
      autoStartConfiguration: ListSessionClustersResponseBodySessionClustersAutoStartConfiguration,
      autoStopConfiguration: ListSessionClustersResponseBodySessionClustersAutoStopConfiguration,
      connectionToken: 'string',
      displayReleaseVersion: 'string',
      domain: 'string',
      domainInner: 'string',
      draftId: 'string',
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
      stateChangeReason: ListSessionClustersResponseBodySessionClustersStateChangeReason,
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

export class ListSessionClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
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
   * The sessions.
   */
  sessionClusters?: ListSessionClustersResponseBodySessionClusters[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      sessionClusters: 'sessionClusters',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      sessionClusters: { 'type': 'array', 'itemType': ListSessionClustersResponseBodySessionClusters },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessionClusters)) {
      $dara.Model.validateArray(this.sessionClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

