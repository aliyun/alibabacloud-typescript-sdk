// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesPropertyList extends $dara.Model {
  /**
   * @remarks
   * The instance property name.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The instance property value, which corresponds to the Key in the same entry.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the resource belongs.
   * 
   * @example
   * 123456789012****
   */
  aliUid?: number;
  /**
   * @remarks
   * The expiration time in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-10-01T00:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The sold instance ID, which is used to identify the purchased instance.
   * 
   * @example
   * cp-0bw2ew49****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type identifier.
   * 
   * @example
   * ecd.graphics.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The list of instance properties. Each item contains the property name Key and the property value Value.
   */
  propertyList?: DescribeInstancesResponseBodyInstancesPropertyList[];
  /**
   * @remarks
   * The associated business resource ID, which is used to distinguish from the sold instance ID.
   * 
   * @example
   * ecd-7w78ozhj****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. For example, CorePackage indicates a core-hour package. It must be consistent with the resource type of the target instance.
   * 
   * @example
   * CorePackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The effective time in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-09-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - NORMAL: Normal.
   * - DELETED: Deleted.
   * - PENDING: Pending activation.
   * - EXPIRED: Expired.
   * - ARCHIVED: Historical archived status.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @remarks
   * The total metering quota included in the instance, using the same unit as UsedTime. A CorePackage core-hour package is metered in core-seconds. For example, 360000 indicates 100 core-hours.
   * 
   * @example
   * 360000
   */
  totalTime?: number;
  /**
   * @remarks
   * The consumed metering quota of the instance. For a CorePackage core-hour package, the unit is core-seconds. Divide by 3600 to convert to core-hours. For other resource types, read according to the corresponding metering criteria.
   * 
   * @example
   * 0
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      propertyList: 'PropertyList',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      state: 'State',
      totalTime: 'TotalTime',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      expiredTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      propertyList: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesPropertyList },
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      state: 'string',
      totalTime: 'number',
      usedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of sold instances that meet the query conditions.
   */
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The maximum number of records to return per query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave it empty for the first query. For subsequent queries, pass the NextToken value returned in the previous response as is. Do not construct or decode it yourself.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k=
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot call issues.
   * 
   * @example
   * 72481C12-69AB-5CE1-8A35-A8EFA921****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

