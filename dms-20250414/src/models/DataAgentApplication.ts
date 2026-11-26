// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataAgentApplicationLastRequest extends $dara.Model {
  /**
   * @remarks
   * The control action. Valid values:
   * - DEPLOY
   * - STOP
   * - RESTART
   * - DELETE
   * 
   * @example
   * RESTART
   */
  action?: string;
  /**
   * @remarks
   * The error code for the failure of the most recent user control request. If no error occurs, this parameter is empty.
   * 
   * @example
   * SCRIPT_EXIT_FAILED
   */
  errorCode?: string;
  /**
   * @remarks
   * The summary of the failure cause for the most recent user control request. If no error occurs, this parameter is empty.
   * 
   * @example
   * stage=script, exitCode=2
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataAgentApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the currently associated Data Agent.
   * 
   * @example
   * avgwuxxxxxxxxhldt7el9
   */
  agentId?: string;
  /**
   * @remarks
   * The stable identifier of the application.
   * 
   * @example
   * ac6izw6xxxxxxxxxxx3ulya0d
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app-name
   */
  appName?: string;
  /**
   * @remarks
   * The access URL of the application. This URL is generated and returned as-is by RM when the deployment snapshot ready=true, and is not filtered again based on Status or ObservationStale. If not provided, this parameter is empty or omitted.
   * 
   * @example
   * https://abc123.app.pre.datapaw-app.cloud
   */
  appUrl?: string;
  /**
   * @remarks
   * The extended information of the application.
   * 
   * @example
   * {}
   */
  applicationExtraInfo?: string;
  /**
   * @remarks
   * The control revision number of the application. The initial value is 0. This number increments after a control request is accepted and can be passed as ExpectedRevision.
   * 
   * @example
   * 6
   */
  applicationRevision?: number;
  /**
   * @remarks
   * The error code for the current service unavailability, which is expressed separately from the error code of the most recent control request. If no error occurs, this parameter is empty.
   * 
   * @example
   * SCRIPT_EXIT_FAILED
   */
  availabilityErrorCode?: string;
  /**
   * @remarks
   * The summary of the cause for the current service unavailability. If no error occurs, this parameter is empty.
   * 
   * @example
   * stage=script, exitCode=2
   */
  availabilityErrorMessage?: string;
  /**
   * @remarks
   * The name of the application creator.
   * 
   * @example
   * test-name
   */
  creatorName?: string;
  /**
   * @remarks
   * The UID of the application owner.
   * 
   * @example
   * 30031588888885853
   */
  creatorUid?: string;
  /**
   * @remarks
   * The description of the application, which can be up to 250 characters in length.
   * 
   * @example
   * this is a test application
   */
  description?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2026-09-12T10:40:12.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the application was last modified.
   * 
   * @example
   * 2026-09-12T10:40:12.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The most recent user control request. If no control request has been made, this parameter is empty.
   */
  lastRequest?: DataAgentApplicationLastRequest;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 1673828888852166
   */
  mainUid?: string;
  /**
   * @remarks
   * Specifies whether the runtime or service observation is missing or stale. If this parameter is set to true, the availability information may be outdated.
   * 
   * @example
   * false
   */
  observationStale?: boolean;
  /**
   * @remarks
   * Specifies whether the current platform service is available. This does not indicate whether the most recent control request succeeded or whether the business components are healthy.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the current or most recently associated session.
   * 
   * @example
   * axc3lsxxxxxxxxxdapwe
   */
  sessionId?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * - REGISTERED
   * - PREPARING
   * - WAITING_AGREEMENT: Indicates that the system is waiting for the owner of the target workspace to sign a valid agreement. The original deployment or restart request is still being executed. After the agreement is signed, RM automatically resumes the original request.
   * - SEALING
   * - REVIEWING
   * - DEPLOYING
   * - DEPLOYED
   * - DEPLOY_FAILED
   * - STOPPING
   * - STOPPED
   * - STOP_FAILED
   * - RECOVERING
   * - UNAVAILABLE
   * - DELETING
   * - DELETE_FAILED
   * - DELETED: The logical deletion terminal state. The application no longer appears in List or Describe operations.
   * 
   * @example
   * REGISTERED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch used for the actual deployment of the currently running application. If no resources are currently running, this parameter is empty.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC used for the actual deployment of the currently running application. If no resources are currently running, this parameter is empty.
   * 
   * @example
   * vpc-example
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 3700inkdc2y7zs0r37m5pika6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      appId: 'AppId',
      appName: 'AppName',
      appUrl: 'AppUrl',
      applicationExtraInfo: 'ApplicationExtraInfo',
      applicationRevision: 'ApplicationRevision',
      availabilityErrorCode: 'AvailabilityErrorCode',
      availabilityErrorMessage: 'AvailabilityErrorMessage',
      creatorName: 'CreatorName',
      creatorUid: 'CreatorUid',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      lastRequest: 'LastRequest',
      mainUid: 'MainUid',
      observationStale: 'ObservationStale',
      ready: 'Ready',
      region: 'Region',
      sessionId: 'SessionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      appName: 'string',
      appUrl: 'string',
      applicationExtraInfo: 'string',
      applicationRevision: 'number',
      availabilityErrorCode: 'string',
      availabilityErrorMessage: 'string',
      creatorName: 'string',
      creatorUid: 'string',
      description: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      lastRequest: DataAgentApplicationLastRequest,
      mainUid: 'string',
      observationStale: 'boolean',
      ready: 'boolean',
      region: 'string',
      sessionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.lastRequest && typeof (this.lastRequest as any).validate === 'function') {
      (this.lastRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

