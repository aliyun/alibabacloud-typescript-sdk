// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The extension information of the application.
   * 
   * @example
   * {}
   */
  applicationExtraInfo?: string;
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
   * The description of the application. The description can be up to 250 characters in length.
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
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 1673828888852166
   */
  mainUid?: string;
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
   * - DEPLOYING
   * - DEPLOYED
   * 
   * @example
   * REGISTERED
   */
  status?: string;
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
      applicationExtraInfo: 'ApplicationExtraInfo',
      creatorName: 'CreatorName',
      creatorUid: 'CreatorUid',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      mainUid: 'MainUid',
      region: 'Region',
      sessionId: 'SessionId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      appName: 'string',
      applicationExtraInfo: 'string',
      creatorName: 'string',
      creatorUid: 'string',
      description: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      mainUid: 'string',
      region: 'string',
      sessionId: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

