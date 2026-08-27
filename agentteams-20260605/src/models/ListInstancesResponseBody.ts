// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyItemsZones extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1xxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance-1
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * AgentTeams-demo
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * small.x1
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * agentteams-bucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1xxxx
   */
  securityGroup?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   *  * RUNNING: running
   *  * STOPPED: stopped
   *  * PENDING: being created
   *  * ERROR: error
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   * 
   * @example
   * [...]
   */
  zones?: ListInstancesResponseBodyItemsZones[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      ossBucketName: 'OssBucketName',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      status: 'Status',
      vpcId: 'VpcId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      ossBucketName: 'string',
      regionId: 'string',
      securityGroup: 'string',
      status: 'string',
      vpcId: 'string',
      zones: { 'type': 'array', 'itemType': ListInstancesResponseBodyItemsZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * **Business code**
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The list of data on the current page.
   * 
   * @example
   * [...]
   */
  items?: ListInstancesResponseBodyItems[];
  /**
   * @remarks
   * **The page size used in this response**
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * **Response message**
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. This value is typically `null` when no more pages are available.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * **Request ID**
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * **Indicates whether the request is successful**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListInstancesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

