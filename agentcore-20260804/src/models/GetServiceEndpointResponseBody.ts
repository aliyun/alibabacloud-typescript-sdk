// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEndpointResponseBodyDataAccessUrls extends $dara.Model {
  /**
   * @remarks
   * The type of the access URL. Valid values: INTERNET and VPC.
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The status of the access URL. Valid values: CREATING, READY, and DEGRADED.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the access URL status. Returns the specific reason when the status is abnormal.
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

export class GetServiceEndpointResponseBodyDataAuthentication extends $dara.Model {
  /**
   * @remarks
   * The authentication method. NONE indicates that no authentication is required. API_KEY indicates that authentication is performed by passing an API key in the x-api-key request header.
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

export class GetServiceEndpointResponseBodyDataEffectiveCapacity extends $dara.Model {
  /**
   * @remarks
   * Read-only. Maps to autoScalingStatus.effectiveLimits.maxSandboxes in the RM. When effectiveCapacity is not null, this value must be returned in pairs with the minimum value. The value must be non-negative and no less than the minimum value. Zero is a valid value. The read value is not truncated at the upper limit of 100 configured for writing.
   * 
   * @example
   * 20
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * Read-only. Maps to autoScalingStatus.effectiveLimits.minSandboxes in the RM. When effectiveCapacity is not null, this value must be returned in pairs with the maximum value. The value must be non-negative and no greater than the maximum value. The read value is not truncated at the upper limit of 100 configured for writing.
   * 
   * @example
   * 8
   */
  minSandboxCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxSandboxCount: 'maxSandboxCount',
      minSandboxCount: 'minSandboxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSandboxCount: 'number',
      minSandboxCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPoliciesTimePoints extends $dara.Model {
  /**
   * @remarks
   * Required. Valid values: 1 to 100.
   * 
   * @example
   * 5
   */
  maxInstances?: number;
  /**
   * @remarks
   * Required. Valid values: 0 to 100. The value cannot be greater than the maxInstances value in the same item.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * Required only for each trigger point of the monthly cycle. The list must be non-empty and contain unique integers from 1 to 31. Each row is selected independently. If a selected day does not exist in a specific month, the trigger does not fire and is not postponed to the end of the month. This field must be omitted for other cycles.
   */
  monthDays?: number[];
  /**
   * @remarks
   * Required. The format is HH:mm:ss, interpreted in the time zone of the associated policy. The precision is down to the minute, and the seconds are fixed at 00.
   * 
   * @example
   * 09:00:00
   */
  time?: string;
  /**
   * @remarks
   * Required only for each trigger point of weekly policies. Cannot be empty and must be deduplicated. Valid values are integers from 1 to 7, where 1 represents Monday and 7 represents Sunday. Each row is selected independently. Must be omitted for other cycles.
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

export class GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPolicies extends $dara.Model {
  /**
   * @remarks
   * Required only when validity is set to range. The format is the same as startTime, with seconds fixed at 00. The end time must be later than the startTime. The interval does not include the end time. If validity is set to forever, the start and end times must be omitted. Valid dates and cross-field constraints are validated by the console.
   * 
   * @example
   * 2026-12-01T00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Required. Must be unique and stable within the endpoint. Generated by the frontend when added, and retained during editing and retries.
   * 
   * @example
   * policy-weekday
   */
  id?: string;
  /**
   * @remarks
   * Required. 5 indicates regular priority, and 10 indicates high priority. New policies default to regular priority. Must be explicitly provided during submission, as the API does not set a default value. When the final dynamicPolicy.enabled is true, the validity periods of high-priority policies must not overlap, except that end-to-end connection is allowed, and long-term high-priority policies can overlap with other high-priority policies. Overlapping drafts can be saved when disabled, but the final configuration is validated when re-enabled. The validity of other fields and trigger conflicts within the policy are always validated. The priority must be explicitly provided.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * Required. daily means every day, weekly means every week, and monthly means every month. Only submit fields corresponding to the specified cycle.
   * 
   * @example
   * weekly
   */
  repeat?: string;
  /**
   * @remarks
   * Required only when validity is set to range. The format is YYYY-MM-DDTHH:mm:ss in the policy time zone, without a time zone offset. The seconds are fixed at 00. The interval includes the start time. When editing, existing past start times are retained, and updates or retries are not rejected even if the start time is earlier than the current time.
   * 
   * @example
   * 2026-11-01T00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * Required and cannot be empty. Each item must be complete. The day of the week or day of the month is configured independently for each item. Within the same policy, daily policies conflict if they have the same time. Weekly and monthly policies conflict only if they have the same time and their date sets intersect. This is validated by the console.
   */
  timePoints?: GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPoliciesTimePoints[];
  /**
   * @remarks
   * Required. Must be a valid IANA time zone. All dates and times in this policy are interpreted in this time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * Required. Valid values: forever for long-term validity, and range for short-term validity. After expiration, the policy and its trigger results are excluded from the current calculation, and the remaining policies are recalculated. If no candidate policy is available, the baseline value is restored. Saved configurations are not automatically deleted.
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
      timePoints: { 'type': 'array', 'itemType': GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPoliciesTimePoints },
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

export class GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicy extends $dara.Model {
  /**
   * @remarks
   * Required during creation. If omitted during an update, the original value is retained. Disabling this feature retains existing policies and restores the base upper and lower limits. Re-enabling it triggers immediate calculation. When finally enabled, policies must not be empty.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Required during creation. If omitted during an update, the original list is retained. If passed, the entire list is replaced rather than merged by ID. To clear the list, you must also ensure that the final enabled value is false. Each item must be complete. Conditional requirements and cross-field constraints are validated by the server. The display order does not indicate priority.
   */
  policies?: GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPolicies[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      policies: 'policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      policies: { 'type': 'array', 'itemType': GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicyPolicies },
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

export class GetServiceEndpointResponseBodyDataElasticityPolicy extends $dara.Model {
  /**
   * @remarks
   * Returns the saved dynamic configuration. If the base configuration before the requirement goes online lacks dynamicPolicy, it is supplemented with enabled=false and policies=[].
   */
  dynamicPolicy?: GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicy;
  /**
   * @remarks
   * Independent of dynamicPolicy.enabled. If omitted during an update, the original value is retained.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The saved or backfilled base maximum instance count. The value must be no less than minSandboxCount. Historical values can exceed 100, and the read value is not truncated. The base value is used when dynamic scaling is disabled or no candidates are available.
   * 
   * @example
   * 5
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The saved or backfilled base minimum instance count. The value must be non-negative and no greater than maxSandboxCount. Historical values can exceed 100, and the read value is not truncated. A newly written complete configuration must still meet the 0 to 100 range.
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
      dynamicPolicy: GetServiceEndpointResponseBodyDataElasticityPolicyDynamicPolicy,
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

export class GetServiceEndpointResponseBodyDataTarget extends $dara.Model {
  /**
   * @remarks
   * The ID of the target agent. Returned when the target type is AGENT_VERSION.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * The version number of the target agent. Returned when the target type is AGENT_VERSION.
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The type of the collaboration component. Returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * ELEMENT_WEB
   */
  collaborationComponent?: string;
  /**
   * @remarks
   * The ID of the workspace resource binding associated with the target collaboration component. Returned when the target type is TEAM_COLLABORATION.
   * 
   * @example
   * wrb-123456
   */
  resourceBindingId?: string;
  /**
   * @remarks
   * The target type. Valid values: AGENT_VERSION and TEAM_COLLABORATION.
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

export class GetServiceEndpointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of access URLs for the service endpoint.
   */
  accessUrls?: GetServiceEndpointResponseBodyDataAccessUrls[];
  /**
   * @remarks
   * The authentication configuration of the service endpoint.
   */
  authentication?: GetServiceEndpointResponseBodyDataAuthentication;
  /**
   * @remarks
   * The creation time in UTC format based on RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Read-only. For Get operations, it queries RM sandboxPhaseCounts.RUNNING based on the Endpoint runtimeKey. For Create and Update operations, it returns null. The value is a non-negative integer. If the statistics are unavailable, it returns null. It is not replaced by the baseline upper and lower limits, target quantity, or READY status. Unavailable statistics do not block submission.
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
   * Read-only and returned only in detail queries. The console reads this from autoScalingStatus.effectiveLimits in the same RM detail request that queries the current instance count. It represents the upper and lower limits currently applied by the resource manager (RM), rather than the saved base configuration or the actual instance count. This value is null if it is not applicable, the running object does not exist, the identity does not match, the query fails, or the RM does not return a valid range. Configuration values are not used as a fallback, and this field is not used for edit backfill or submission.
   * 
   * @example
   * {"minSandboxCount":8,"maxSandboxCount":20}
   * 
   * **if can be null:**
   * true
   */
  effectiveCapacity?: GetServiceEndpointResponseBodyDataEffectiveCapacity;
  /**
   * @remarks
   * The result of combining publicAccessEnabled with the public network inbound access limit of the workspace. The value is true only when both allow public access. This only indicates the policy target and does not mean that the public network entry has been published. The actual status is subject to accessUrls and status.
   */
  effectivePublicAccessEnabled?: boolean;
  /**
   * @remarks
   * Used for edit backfill. This is not the currently effective upper and lower limits or the actual instance count. The Get operation preferentially returns the saved configuration. If no configuration is saved, an endpoint that supports elasticity backfills the base values from the frozen configuration of the expected runtime or the bound version configuration when the runtime is not yet established. Successful publication is not required. This value is null when the source is temporarily unavailable or no applicable configuration exists, but the status and statusReason are still returned. The Create and Update operations return only the saved configuration, and return null if no configuration is saved. The historical base capacity can exceed 100, and the read value is not truncated.
   * 
   * **if can be null:**
   * true
   */
  elasticityPolicy?: GetServiceEndpointResponseBodyDataElasticityPolicy;
  /**
   * @remarks
   * The type of the service endpoint. DEFAULT indicates a default endpoint created and maintained by the platform. NAMED indicates a named endpoint explicitly created by a user.
   * 
   * @example
   * NAMED
   */
  endpointType?: string;
  /**
   * @remarks
   * The name of the service endpoint. The name must be unique within the workspace and be 1 to 128 characters in length.
   * 
   * @example
   * my-agent-endpoint
   */
  name?: string;
  /**
   * @remarks
   * The expected public network inbound access configured by the user on the service endpoint. For historical service endpoints where this has not been configured, true is returned. This only indicates the configuration expectation. The actual availability of the public IP address is subject to accessUrls and status.
   */
  publicAccessEnabled?: boolean;
  /**
   * @remarks
   * The ID of the region where the service endpoint resides.
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
   * The status of the service endpoint. Valid values: CREATING, READY, UPDATING, DEGRADED, DISABLED, and DELETING.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the service endpoint status. Returns the specific reason when the status is abnormal.
   * 
   * @example
   * ServiceEndpoint.Provider.Unavailable: no provider for the target type
   */
  statusReason?: string;
  /**
   * @remarks
   * The target routing configuration of the service endpoint.
   */
  target?: GetServiceEndpointResponseBodyDataTarget;
  /**
   * @remarks
   * The time of the last modification in UTC format based on RFC 3339.
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
      effectiveCapacity: 'effectiveCapacity',
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
      accessUrls: { 'type': 'array', 'itemType': GetServiceEndpointResponseBodyDataAccessUrls },
      authentication: GetServiceEndpointResponseBodyDataAuthentication,
      createdAt: 'string',
      currentInstances: 'number',
      effectiveCapacity: GetServiceEndpointResponseBodyDataEffectiveCapacity,
      effectivePublicAccessEnabled: 'boolean',
      elasticityPolicy: GetServiceEndpointResponseBodyDataElasticityPolicy,
      endpointType: 'string',
      name: 'string',
      publicAccessEnabled: 'boolean',
      regionId: 'string',
      serviceEndpointId: 'string',
      status: 'string',
      statusReason: 'string',
      target: GetServiceEndpointResponseBodyDataTarget,
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
    if(this.effectiveCapacity && typeof (this.effectiveCapacity as any).validate === 'function') {
      (this.effectiveCapacity as any).validate();
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

export class GetServiceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The service endpoint details.
   */
  data?: GetServiceEndpointResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message. Returns an error description if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: GetServiceEndpointResponseBodyData,
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

