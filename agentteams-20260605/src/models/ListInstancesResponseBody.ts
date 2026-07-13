// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyItemsZones extends $dara.Model {
  vswitchId?: string;
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
  instanceId?: string;
  instanceName?: string;
  instanceSpec?: string;
  ossBucketName?: string;
  regionId?: string;
  securityGroup?: string;
  status?: string;
  vpcId?: string;
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
   * @example
   * SUCCESS
   */
  code?: string;
  items?: ListInstancesResponseBodyItems[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

