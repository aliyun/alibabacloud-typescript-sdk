// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSessionClusterResponseBodySessionClusterApplicationConfigs } from "./GetSessionClusterResponseBodySessionClusterApplicationConfigs";
import { GetSessionClusterResponseBodySessionClusterAutoStartConfiguration } from "./GetSessionClusterResponseBodySessionClusterAutoStartConfiguration";
import { GetSessionClusterResponseBodySessionClusterAutoStopConfiguration } from "./GetSessionClusterResponseBodySessionClusterAutoStopConfiguration";
import { GetSessionClusterResponseBodySessionClusterStateChangeReason } from "./GetSessionClusterResponseBodySessionClusterStateChangeReason";


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

