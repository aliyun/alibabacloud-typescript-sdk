// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList extends $dara.Model {
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
   * The rules associated with the resource and the compliance details of the rules.
   * 
   * @example
   * {\\"Compliance\\":{\\"complianceType\\":\\"COMPLIANT\\",\\"count\\":1},\\"ConfigRuleList\\":[{\\"accountId\\":100931896542****,\\"configRuleId\\":\\"cr-9524626622af003d****\\",\\"configRuleArn\\":\\"acs:config::100931896542****:rule/cr-9524626622af003d****\\",\\"configRuleName\\":\\"test-rule-name\\",\\"complianceType\\":\\"COMPLIANT\\",\\"riskLevel\\":1,\\"annotation\\":\\"\\",\\"invokingEventMessageType\\":\\"ScheduledNotification\\"}]}
   */
  configuration?: string;
  /**
   * @remarks
   * The details of the resource changes that trigger the compliance evaluation.
   * 
   * @example
   * {\\"test-rule-name\\":[{\\"accountId\\":100931896542****,\\"configRuleId\\":\\"cr-965f626622af003d****\\",\\"configRuleArn\\":\\"acs:config::100931896542****:rule/cr-965f626622af003d****\\",\\"configRuleName\\":\\"test-rule-name\\",\\"complianceType\\":\\"COMPLIANT\\",\\"riskLevel\\":1,\\"annotation\\":\\"\\",\\"invokingEventMessageType\\":\\"ScheduledNotification\\"},{}]}
   */
  configurationDiff?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The time when the resource was created. Unit: milliseconds.
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
   * The status of the resource. The parameter value varies based on the resource type and may be left empty. Examples:
   * 
   * *   If the ResourceType parameter is set to ACS::ECS::Instance, the resource is an Elastic Compute Service (ECS) instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * *   If the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is left empty.
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

export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation records on the compliance timeline.
   */
  complianceList?: GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  /**
   * @remarks
   * The maximum number of entries that can be returned for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request.
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
      complianceList: { 'type': 'array', 'itemType': GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
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

export class GetResourceComplianceTimelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8D53A78F-1EB8-4264-A554-72F07E34FAE6
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the compliance timeline.
   */
  resourceComplianceTimeline?: GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceTimeline: 'ResourceComplianceTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceTimeline: GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline,
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

