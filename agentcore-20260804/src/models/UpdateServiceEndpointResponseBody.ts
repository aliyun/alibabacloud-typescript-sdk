// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceEndpointResponseBodyDataAccessUrls extends $dara.Model {
  /**
   * @remarks
   * The access URL type. Valid values:
   * - INTERNET
   * - VPC
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The access URL status. Valid values:
   * - CREATING
   * - READY
   * - DEGRADED
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the access URL status. This parameter is returned with the specific cause when the status is abnormal.
   * 
   * @example
   * ServiceEndpoint.Provider.Unavailable: no provider for the target type
   */
  statusReason?: string;
  /**
   * @remarks
   * The access URL.
   * 
   * @example
   * https://endpoint.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'accessType',
      status: 'status',
      statusReason: 'statusReason',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      status: 'string',
      statusReason: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBodyDataAuthentication extends $dara.Model {
  /**
   * @remarks
   * The authentication method. Valid values:
   * - NONE: No authentication is required.
   * - API_KEY: Authentication is performed by passing the API key in the x-api-key request header.
   * 
   * @example
   * API_KEY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPoliciesTimePoints extends $dara.Model {
  /**
   * @remarks
   * The target maximum number of instances. This field is required. Valid values: 1 to 100.
   * 
   * @example
   * 5
   */
  maxInstances?: number;
  /**
   * @remarks
   * The target minimum number of instances. This field is required. Valid values: 0 to 100. The value cannot be greater than maxInstances in the same item.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The list of days in a month. This field is required for each trigger point of monthly policies. It cannot be empty and must be deduplicated. Valid values: integers from 1 to 31. Each row is selected independently. If a date does not exist in a month, the policy is not triggered and is not postponed to the end of the month. This field must be omitted for other cycles.
   */
  monthDays?: number[];
  /**
   * @remarks
   * The trigger time. This field is required. Format: HH:mm:ss. It is interpreted in the time zone of the policy, accurate to the minute, and the seconds are fixed at 00.
   * 
   * @example
   * 09:00:00
   */
  time?: string;
  /**
   * @remarks
   * The list of weekdays. This field is required for each trigger point of weekly policies. It cannot be empty and must be deduplicated. Valid values: integers from 1 to 7. 1 indicates Monday, and 7 indicates Sunday. Each row is selected independently. This field must be omitted for other cycles.
   */
  weekdays?: number[];
  static names(): { [key: string]: string } {
    return {
      maxInstances: 'maxInstances',
      minInstances: 'minInstances',
      monthDays: 'monthDays',
      time: 'time',
      weekdays: 'weekdays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxInstances: 'number',
      minInstances: 'number',
      monthDays: { 'type': 'array', 'itemType': 'number' },
      time: 'string',
      weekdays: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.monthDays)) {
      $dara.Model.validateArray(this.monthDays);
    }
    if(Array.isArray(this.weekdays)) {
      $dara.Model.validateArray(this.weekdays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPolicies extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period. This field is required only when validity is set to range. The format is the same as startTime, and the seconds are fixed at 00. It must be later than startTime. The interval does not include the end time. If validity is set to forever, the start and end times must be omitted. Valid dates and cross-field constraints are validated by the console.
   * 
   * @example
   * 2026-12-01T00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The policy identifier. This field is required and must be unique and stable within the endpoint. It is generated by the frontend when added, and retained during editing and retries.
   * 
   * @example
   * policy-weekday
   */
  id?: string;
  /**
   * @remarks
   * The policy priority. This field is required. Valid values: 5: Regular. 10: High. New policies default to regular. You must explicitly provide this field upon submission, as the API does not set a default value. When the final dynamicPolicy.enabled is set to true, the validity periods of high-priority policies cannot overlap, except for end-to-end connections. Long-term high-priority policies can overlap with other high-priority policies. When disabled, overlapping drafts can be saved, and the final configuration is validated upon re-enabling. The validity of other fields and trigger conflicts within the policy are always validated. You must explicitly provide priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The repeat cycle. This field is required. Valid values: daily: Every day. weekly: Every week. monthly: Every month. Only submit the fields corresponding to the cycle.
   * 
   * @example
   * weekly
   */
  repeat?: string;
  /**
   * @remarks
   * The start time of the validity period. This field is required only when validity is set to range. Format: YYYY-MM-DDTHH:mm:ss in the policy time zone, without a time zone offset. The seconds are fixed at 00. The interval includes the start time. Editing retains the existing past start time and does not reject updates or retries because it is earlier than the current time.
   * 
   * @example
   * 2026-11-01T00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The periodic trigger time points. This field is required and cannot be empty. Each item must be complete. The day of the week or day of the month is configured independently for each item. Within the same policy, daily policies conflict if the time is the same. weekly and monthly policies conflict only when the time is the same and the date sets intersect. This is validated by the console.
   */
  timePoints?: UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPoliciesTimePoints[];
  /**
   * @remarks
   * The policy time zone. This field is required and must be a valid IANA time zone. All dates and times in this policy are interpreted in this time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * The policy validity period type. This field is required. Valid values: forever: Long-term validity. range: Short-term validity. After expiration, the policy and its trigger results exit the current calculation, and the remaining policies are recalculated. If no candidates exist, the basic values are restored. The saved configuration is not automatically deleted.
   * 
   * @example
   * range
   */
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      id: 'id',
      priority: 'priority',
      repeat: 'repeat',
      startTime: 'startTime',
      timePoints: 'timePoints',
      timeZone: 'timeZone',
      validity: 'validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      id: 'string',
      priority: 'number',
      repeat: 'string',
      startTime: 'string',
      timePoints: { 'type': 'array', 'itemType': UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPoliciesTimePoints },
      timeZone: 'string',
      validity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timePoints)) {
      $dara.Model.validateArray(this.timePoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the dynamic policy. This field is required during creation. If omitted during an update, the original value is retained. Disabling it retains existing policies and restores the basic upper and lower limits. Re-enabling it triggers immediate calculation. When finally enabled, policies cannot be empty.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The complete list of dynamic policies. This field is required during creation. If omitted during an update, the original list is retained. If provided, it replaces the entire list and is not merged by ID. To clear the list, you must ensure that the final enabled is set to false. Each item must be complete. Conditional requirements and cross-field constraints are validated by the server. The display order does not indicate priority.
   */
  policies?: UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPolicies[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      policies: 'policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      policies: { 'type': 'array', 'itemType': UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBodyDataElasticityPolicy extends $dara.Model {
  /**
   * @remarks
   * The saved dynamic configuration. If the base configuration before the requirement goes online lacks the dynamicPolicy parameter, it is supplemented with enabled=false and policies=[].
   */
  dynamicPolicy?: UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicy;
  /**
   * @remarks
   * Specifies whether to enable the global auto-elasticity mode. This field is independent of dynamicPolicy.enabled. If omitted during an update, the original value is retained.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The saved or backfilled base maximum number of instances, which is not less than minSandboxCount. The historical value may exceed 100, and the read value is not truncated. The base value is used when dynamic scaling is disabled or no candidates are available.
   * 
   * @example
   * 5
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The saved or backfilled base minimum number of instances, which is a non-negative integer and not greater than maxSandboxCount. The historical value may exceed 100, and the read value is not truncated. A newly written complete configuration must still meet the 0 to 100 range.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicPolicy: 'dynamicPolicy',
      enabled: 'enabled',
      maxSandboxCount: 'maxSandboxCount',
      minSandboxCount: 'minSandboxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicPolicy: UpdateServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicy,
      enabled: 'boolean',
      maxSandboxCount: 'number',
      minSandboxCount: 'number',
    };
  }

  validate() {
    if(this.dynamicPolicy && typeof (this.dynamicPolicy as any).validate === 'function') {
      (this.dynamicPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBodyDataTarget extends $dara.Model {
  /**
   * @remarks
   * The target agent ID. This parameter is returned when the target type is AGENT_VERSION.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * The target agent version. This parameter is returned when the target type is AGENT_VERSION.
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The collaboration component type. This parameter is returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * ELEMENT_WEB
   */
  collaborationComponent?: string;
  /**
   * @remarks
   * The workspace resource binding ID associated with the target collaboration component. This parameter is returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * wrb-123456
   */
  resourceBindingId?: string;
  /**
   * @remarks
   * The target type. Valid values:
   * - AGENT_VERSION
   * - TEAM_COLLABORATION
   * 
   * @example
   * AGENT_VERSION
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentVersion: 'agentVersion',
      collaborationComponent: 'collaborationComponent',
      resourceBindingId: 'resourceBindingId',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      collaborationComponent: 'string',
      resourceBindingId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of access URLs for the service endpoint.
   */
  accessUrls?: UpdateServiceEndpointResponseBodyDataAccessUrls[];
  /**
   * @remarks
   * The authentication configuration of the service endpoint.
   */
  authentication?: UpdateServiceEndpointResponseBodyDataAuthentication;
  /**
   * @remarks
   * The creation time in UTC format compliant with RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The read-only current number of instances. The Get operation queries RM sandboxPhaseCounts.RUNNING by endpoint runtimeKey. The Create and Update operations return null. The value is a non-negative integer, and null is returned when the statistics are unavailable. The value is not replaced by the base upper and lower limits, target quantity, or READY status. Unavailable statistics do not block submission.
   * 
   * @example
   * 2
   * 
   * **if can be null:**
   * true
   */
  currentInstances?: number;
  /**
   * @remarks
   * The result of combining publicAccessEnabled with the workspace-level public inbound access limit. The value is true only when both settings allow public inbound access. This field only indicates the policy target and does not mean that the public endpoint has been fully provisioned. To determine the actual status, refer to accessUrls and status.
   */
  effectivePublicAccessEnabled?: boolean;
  /**
   * @remarks
   * The complete elasticity configuration saved for the service endpoint, which is used for edit backfill and is not the current effective upper and lower limits or the actual number of instances. The Get operation preferentially returns the saved configuration. If no configuration is saved, an endpoint that supports elasticity backfills the base values from the expected runtime frozen configuration or the bound version configuration when the runtime is not yet established, without requiring a successful publication. The value is null when the source is temporarily unavailable or no applicable configuration exists, but the status and statusReason are still returned. The Create and Update operations return only the saved configuration, and the value is null if no configuration is saved. The historical base capacity may exceed 100, and the read value is not truncated.
   * 
   * **if can be null:**
   * true
   */
  elasticityPolicy?: UpdateServiceEndpointResponseBodyDataElasticityPolicy;
  /**
   * @remarks
   * The service endpoint type. Valid values:
   * - DEFAULT: The default endpoint created and maintained by the platform.
   * - NAMED: The named endpoint explicitly created by the user.
   * 
   * @example
   * NAMED
   */
  endpointType?: string;
  /**
   * @remarks
   * The service endpoint name. The name must be unique within the workspace and 1 to 128 characters in length.
   * 
   * @example
   * my-agent-endpoint
   */
  name?: string;
  /**
   * @remarks
   * The expected public inbound access setting configured on the service endpoint. For legacy service endpoints that have not been configured, true is returned. This field only indicates the configuration expectation. To determine the actual availability of the public endpoint, refer to accessUrls and status.
   */
  publicAccessEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the service endpoint.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service endpoint ID.
   * 
   * @example
   * se-123456
   */
  serviceEndpointId?: string;
  /**
   * @remarks
   * The service endpoint status. Valid values:
   * - CREATING
   * - READY
   * - UPDATING
   * - DEGRADED
   * - DISABLED
   * - DELETING
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the service endpoint status. This parameter is returned with the specific cause when the status is abnormal.
   * 
   * @example
   * ServiceEndpoint.Provider.Unavailable: no provider for the target type
   */
  statusReason?: string;
  /**
   * @remarks
   * The target routing configuration of the service endpoint.
   */
  target?: UpdateServiceEndpointResponseBodyDataTarget;
  /**
   * @remarks
   * The last update time in UTC format compliant with RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessUrls: 'accessUrls',
      authentication: 'authentication',
      createdAt: 'createdAt',
      currentInstances: 'currentInstances',
      effectivePublicAccessEnabled: 'effectivePublicAccessEnabled',
      elasticityPolicy: 'elasticityPolicy',
      endpointType: 'endpointType',
      name: 'name',
      publicAccessEnabled: 'publicAccessEnabled',
      regionId: 'regionId',
      serviceEndpointId: 'serviceEndpointId',
      status: 'status',
      statusReason: 'statusReason',
      target: 'target',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrls: { 'type': 'array', 'itemType': UpdateServiceEndpointResponseBodyDataAccessUrls },
      authentication: UpdateServiceEndpointResponseBodyDataAuthentication,
      createdAt: 'string',
      currentInstances: 'number',
      effectivePublicAccessEnabled: 'boolean',
      elasticityPolicy: UpdateServiceEndpointResponseBodyDataElasticityPolicy,
      endpointType: 'string',
      name: 'string',
      publicAccessEnabled: 'boolean',
      regionId: 'string',
      serviceEndpointId: 'string',
      status: 'string',
      statusReason: 'string',
      target: UpdateServiceEndpointResponseBodyDataTarget,
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessUrls)) {
      $dara.Model.validateArray(this.accessUrls);
    }
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(this.elasticityPolicy && typeof (this.elasticityPolicy as any).validate === 'function') {
      (this.elasticityPolicy as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the request. The value is SUCCESS if the request is successful.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The service endpoint information returned after the update is accepted. This includes the binding target, saved authentication and elasticity configurations, and current status. The endpoint may still be updating.
   */
  data?: UpdateServiceEndpointResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the request. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message of the request. The value is success if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5E8F3C2A-1B4D-4F6E-9A7C-0D2B8E6F4A1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates that the update request is accepted, but does not mean that the deployment or endpoint change is complete. You must check data.status and data.accessUrls to confirm the result.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateServiceEndpointResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

