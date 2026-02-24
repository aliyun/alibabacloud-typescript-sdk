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
   * The zone where the resource resides.
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
   * A list of rules associated with the resource and their compliance details.
   * 
   * @example
   * {\\"Compliance\\":{\\"complianceType\\":\\"COMPLIANT\\",\\"count\\":1},\\"ConfigRuleList\\":[{\\"accountId\\":100931896542****,\\"configRuleId\\":\\"cr-9524626622af003d****\\",\\"configRuleArn\\":\\"acs:config::100931896542****:rule/cr-9524626622af003d****\\",\\"configRuleName\\":\\"OSS存储空间ACL禁止公共读写\\",\\"complianceType\\":\\"COMPLIANT\\",\\"riskLevel\\":1,\\"annotation\\":\\"\\",\\"invokingEventMessageType\\":\\"ScheduledNotification\\"}]}
   */
  configuration?: string;
  /**
   * @remarks
   * The details of the resource change that triggered this evaluation.
   * 
   * @example
   * {\\"OSS存储空间ACL禁止公共读写\\":[{\\"accountId\\":100931896542****,\\"configRuleId\\":\\"cr-965f626622af003d****\\",\\"configRuleArn\\":\\"acs:config::100931896542****:rule/cr-965f626622af003d****\\",\\"configRuleName\\":\\"OSS存储空间ACL禁止公共读写\\",\\"complianceType\\":\\"COMPLIANT\\",\\"riskLevel\\":1,\\"annotation\\":\\"\\",\\"invokingEventMessageType\\":\\"ScheduledNotification\\"},{}]}
   */
  configurationDiff?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
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
   * The resource ID.
   * 
   * @example
   * new-bucket
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * new-bucket
   */
  resourceName?: string;
  /**
   * @remarks
   * The status of the resource. The status of a resource is defined by the corresponding Alibaba Cloud service. This parameter can be empty. For example:
   * 
   * - If the resource type is ACS::ECS::Instance, this parameter can be Running or Stopped because an ECS instance is stateful.
   * 
   * - If the resource type is ACS::OSS::Bucket, this parameter is empty because an OSS bucket is stateless.
   * 
   * @example
   * null
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The resource type.
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
   * A list of compliance timeline entries.
   */
  complianceList?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to query the next page.
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
   * The compliance timeline of the resource.
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

