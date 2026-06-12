// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceLogsResponseBodyServiceInstancesLogs extends $dara.Model {
  /**
   * @remarks
   * The threat type from the compliance package. This parameter is returned only when Source is set to compliancePack. For example, VpcDataRisk indicates a data security check within a VPC.
   * 
   * @example
   * VpcDataRisk
   */
  compliancePackType?: string;
  /**
   * @remarks
   * The name of the threat rule from the compliance package. This parameter is returned only when Source is set to compliancePack. For example, vpc-ecs-move-out-vpc indicates that an ECS instance was moved out of a VPC.
   * 
   * @example
   * vpc-ecs-move-out-vpc
   */
  complianceRuleName?: string;
  /**
   * @remarks
   * The content of the log entry.
   * 
   * @example
   * Start creating service instance
   */
  content?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * - serviceInstance: Logs at the service instance level.
   * 
   * - resource: Logs at the ROS resource level.
   * 
   * @example
   * serviceInstance
   */
  logType?: string;
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * si-5c6525c0589545c3****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ROS.Stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The source of the log. Valid values:
   * 
   * - ros: Logs from ROS.
   * 
   * - computeNest: Logs from Compute Nest.
   * 
   * - application: Logs from the application in the instance.
   * 
   * - compliancePack: Logs from the compliance package of the instance.
   * 
   * - actionTrail: Logs from ActionTrail.
   * 
   * @example
   * computeNest
   */
  source?: string;
  /**
   * @remarks
   * The status of the event that the log records. Valid values:
   * 
   * - Creating: The instance is being created.
   * 
   * - Created: The instance is created.
   * 
   * - Deploying: The instance is being deployed.
   * 
   * - Deployed: The instance is deployed.
   * 
   * - DeployedFailed: The instance failed to be deployed.
   * 
   * - Expired: The instance has expired.
   * 
   * - ExtendSuccess: The instance is successfully renewed.
   * 
   * - Upgrading: The instance is being upgraded.
   * 
   * - UpgradeSuccess: The instance is successfully upgraded.
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The timestamp of the log entry.
   * 
   * @example
   * 2022-05-21T00:00:00Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackType: 'CompliancePackType',
      complianceRuleName: 'ComplianceRuleName',
      content: 'Content',
      logType: 'LogType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      source: 'Source',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackType: 'string',
      complianceRuleName: 'string',
      content: 'string',
      logType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      source: 'string',
      status: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The logs of the service instance.
   */
  serviceInstancesLogs?: ListServiceInstanceLogsResponseBodyServiceInstancesLogs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstancesLogs: 'ServiceInstancesLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstancesLogs: { 'type': 'array', 'itemType': ListServiceInstanceLogsResponseBodyServiceInstancesLogs },
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstancesLogs)) {
      $dara.Model.validateArray(this.serviceInstancesLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

