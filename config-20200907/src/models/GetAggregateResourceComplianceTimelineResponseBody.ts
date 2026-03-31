// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the zone in which the resource resides.
   * 
   * @example
   * cn-hangzhou-f
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The timestamp when the compliance evaluation was recorded. Unit: milliseconds.
   * 
   * @example
   * 1625200295276
   */
  captureTime?: number;
  /**
   * @remarks
   * The information about the rules that evaluated the resource and the compliance evaluation result.
   * 
   * @example
   * {
   *     "AccessControlList": {
   *         "Grant": "private"
   *     },
   *     "ServerSideEncryptionRule": {
   *         "SSEAlgorithm": "None"
   *     },
   *     "Comment": "",
   *     "Owner": {
   *         "DisplayName": "126672004088****",
   *         "ID": "126672004088****"
   *     },
   *     "ResourceGroupId": "rg-acfmy4dfoau****",
   *     "StorageClass": "Standard",
   *     "DataRedundancyType": "LRS",
   *     "AllowEmptyReferer": "true",
   *     "Name": "test-private-oss****",
   *     "BucketPolicy": {
   *         "LogPrefix": "",
   *         "LogBucket": ""
   *     },
   *     "ExtranetEndpoint": "oss-cn-hangzhou.aliyuncs.com",
   *     "IntranetEndpoint": "oss-cn-hangzhou-internal.aliyuncs.com",
   *     "Location": "oss-cn-hangzhou"
   * }
   */
  configuration?: string;
  /**
   * @remarks
   * The details of the resource change that triggered the compliance evaluation.
   * 
   * @example
   * {
   *     "ResourceGroupId": [
   *         "rg-acfmy4dfoau****",
   *         "rg-a3dmy4lksta****"
   *     ]
   * }
   */
  configurationDiff?: string;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The timestamp when the resource was created. Unit: milliseconds.
   * 
   * @example
   * 1624961112000
   */
  resourceCreateTime?: number;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * test-private-oss****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * test-private-oss****
   */
  resourceName?: string;
  /**
   * @remarks
   * The status of the resource. The parameter value varies based on the resource type and may be left empty. Examples:
   * 
   * *   If the ResourceType parameter is set to ACS::ECS::Instance, the resource is an Elastic Compute Service (ECS) instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * *   If the ResourceType parameter is set to ACS::OSS::Bucket, the resource is an OSS bucket that does not have a specific state. In this case, this parameter is left empty.
   * 
   * @example
   * Running
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::OSS::Bucket
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * @example
   * {\\"\\"hc\\"\\":[\\"\\"value2\\"\\"]}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      captureTime: 'CaptureTime',
      configuration: 'Configuration',
      configurationDiff: 'ConfigurationDiff',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      availabilityZone: 'string',
      captureTime: 'number',
      configuration: 'string',
      configurationDiff: 'string',
      region: 'string',
      resourceCreateTime: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $dara.Model {
  /**
   * @remarks
   * The status of the resource. The parameter value varies based on the resource type and may be left empty. Examples:
   * 
   * *   If the value of the ResourceType parameter is ACS::ECS::Instance, the resource is an Elastic Compute Service (ECS) instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * *   If the value of the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is empty.
   */
  complianceList?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  /**
   * @remarks
   * The maximum number of entries returned for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 5OVS5J4I1/UKTkHV5oNs****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      complianceList: 'ComplianceList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.complianceList)) {
      $dara.Model.validateArray(this.complianceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D53A78F-1EB8-4264-A554-72F07E34FAE6
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the compliance timeline.
   */
  resourceComplianceTimeline?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceTimeline: 'ResourceComplianceTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceTimeline: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline,
    };
  }

  validate() {
    if(this.resourceComplianceTimeline && typeof (this.resourceComplianceTimeline as any).validate === 'function') {
      (this.resourceComplianceTimeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

