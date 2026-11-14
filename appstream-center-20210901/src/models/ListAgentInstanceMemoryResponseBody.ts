// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceMemoryResponseBodyDataUserGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * group-aliy****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Office user group
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstanceMemoryResponseBodyDataUserOrgs extends $dara.Model {
  /**
   * @remarks
   * The ID of the organization.
   * 
   * @example
   * org-aliy****
   */
  orgId?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * Enterprise office
   */
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstanceMemoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent instance, which can be used to configure the instance memory switch or clear the instance memory.
   * 
   * @example
   * agi-08vm****
   */
  agentInstanceId?: string;
  /**
   * @remarks
   * The instance lifetime and epoch status of the agent instance.
   * - `UNDEPLOYED`: No deployment.
   * - `DEPLOYING`: Deployment in progress.
   * - `DEPLOYED`: Deployment completed.
   * - `STARTING`: Starting.
   * - `RUNNING`: Running.
   * - `STOPPING`: Stopping.
   * - `STOPPED`: Stopped.
   * - `UNAVAILABLE`: Not active.
   * - `FAILED`: Failed.
   * - `UPGRADING`: Upgrade in progress.
   * - `REBUILDING`: Reset in progress.
   * - `DELETING`: Deleting.
   * - `DELETED`: Deleted.
   * 
   * @example
   * RUNNING
   */
  agentInstanceStatus?: string;
  /**
   * @remarks
   * The business platform to which the agent belongs.
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The provider of the agent.
   * 
   * @example
   * AgenticComputer
   */
  agentProvider?: string;
  /**
   * @remarks
   * The number of undeleted memory backups for the instance.
   * 
   * @example
   * 0
   */
  backupCount?: number;
  /**
   * @remarks
   * The ID of the end user to which the instance belongs.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The time of the last memory update. The time is returned in the YYYY-MM-DDThh:mm:ss format, with optional fractional seconds. The time value uses the default time zone of the server, and the string does not include a time zone offset. This field is omitted if the last update time is unavailable.
   * 
   * @example
   * 2026-10-26T21:14:36.693
   */
  lastMemoryUpdatedAt?: string;
  /**
   * @remarks
   * The time of the latest backup. The time is returned in the YYYY-MM-DDThh:mm:ss format, with optional fractional seconds. The time value uses the default time zone of the server, and the string does not include a time zone offset. This field is omitted if the backup time is unavailable.
   * 
   * @example
   * 2026-10-26T20:58:00.536
   */
  latestBackupAt?: string;
  /**
   * @remarks
   * The number of memory entries for the instance. This field may be omitted if statistics are unavailable.
   * 
   * @example
   * 3
   */
  memoryCount?: number;
  /**
   * @remarks
   * The memory switch configured for the instance, returned as a string. A value of `true` indicates that the switch is turned on. A value of `false` indicates that the switch is turned off.
   * 
   * @example
   * true
   */
  memoryEnabled?: string;
  /**
   * @remarks
   * The ID of the region where the runtime environment is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource associated with the instance.
   * 
   * @example
   * ecd-d8ut****
   */
  resourceId?: string;
  /**
   * @remarks
   * The runtime ID of the instance.
   * 
   * @example
   * ecd-d8ut****
   */
  runtimeId?: string;
  /**
   * @remarks
   * The name of the runtime environment. The name of the associated resource is returned first. If the resource name is unavailable, the instance name is returned.
   * 
   * @example
   * Office Assistant
   */
  runtimeName?: string;
  /**
   * @remarks
   * The list of user groups to which the end user belongs.
   */
  userGroups?: ListAgentInstanceMemoryResponseBodyDataUserGroups[];
  /**
   * @remarks
   * The username of the end user to which the instance belongs.
   * 
   * @example
   * user01
   */
  userName?: string;
  /**
   * @remarks
   * The list of organizations to which the end user belongs.
   */
  userOrgs?: ListAgentInstanceMemoryResponseBodyDataUserOrgs[];
  /**
   * @remarks
   * The Wuying user ID of the end user.
   * 
   * @example
   * 0c614d26****
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstanceId: 'AgentInstanceId',
      agentInstanceStatus: 'AgentInstanceStatus',
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      backupCount: 'BackupCount',
      endUserId: 'EndUserId',
      lastMemoryUpdatedAt: 'LastMemoryUpdatedAt',
      latestBackupAt: 'LatestBackupAt',
      memoryCount: 'MemoryCount',
      memoryEnabled: 'MemoryEnabled',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      runtimeId: 'RuntimeId',
      runtimeName: 'RuntimeName',
      userGroups: 'UserGroups',
      userName: 'UserName',
      userOrgs: 'UserOrgs',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstanceId: 'string',
      agentInstanceStatus: 'string',
      agentPlatform: 'string',
      agentProvider: 'string',
      backupCount: 'number',
      endUserId: 'string',
      lastMemoryUpdatedAt: 'string',
      latestBackupAt: 'string',
      memoryCount: 'number',
      memoryEnabled: 'string',
      regionId: 'string',
      resourceId: 'string',
      runtimeId: 'string',
      runtimeName: 'string',
      userGroups: { 'type': 'array', 'itemType': ListAgentInstanceMemoryResponseBodyDataUserGroups },
      userName: 'string',
      userOrgs: { 'type': 'array', 'itemType': ListAgentInstanceMemoryResponseBodyDataUserOrgs },
      wyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    if(Array.isArray(this.userOrgs)) {
      $dara.Model.validateArray(this.userOrgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstanceMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The memory configurations and statistics information of the agent instances on the current page.
   */
  data?: ListAgentInstanceMemoryResponseBodyData[];
  /**
   * @remarks
   * The current page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page used for this query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request, which can be used for troubleshooting.
   * 
   * @example
   * 01A1CEEB-CDFF-18F9-B2BF-9997600D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances that meet the filter conditions.
   * 
   * @example
   * 14
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAgentInstanceMemoryResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

