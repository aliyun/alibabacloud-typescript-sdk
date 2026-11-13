// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class TokenUsageDetailDTOBizObjects extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated item.
   * 
   * @example
   * 4c9102f7-51d2-4494-9ea2-468e3c407ad8
   */
  id?: string;
  /**
   * @remarks
   * The type of the associated item.
   * 
   * @example
   * deployment
   */
  kind?: string;
  /**
   * @remarks
   * The name of the associated item.
   * 
   * @example
   * deployemnt-draft
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      kind: 'Kind',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      kind: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TokenUsageDetailDTOScopeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of deployments selected for inspection.
   */
  deploymentIds?: string[];
  /**
   * @remarks
   * The tag configuration selected for inspection.
   */
  tags?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      deploymentIds: 'DeploymentIds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.deploymentIds)) {
      $dara.Model.validateArray(this.deploymentIds);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TokenUsageDetailDTO extends $dara.Model {
  /**
   * @remarks
   * The associated items of the intelligent assistant, such as jobs and deployments.
   */
  bizObjects?: TokenUsageDetailDTOBizObjects[];
  /**
   * @remarks
   * namespace
   * 
   * @example
   * test-default
   */
  namespace?: string;
  /**
   * @remarks
   * The time when the request is initiated, in epoch milliseconds.
   * 
   * @example
   * 1790651783392
   */
  occurredAt?: number;
  /**
   * @remarks
   * The inspection configuration.
   */
  scopeConfig?: TokenUsageDetailDTOScopeConfig;
  /**
   * @remarks
   * The inspection type.
   * 
   * @example
   * TAG
   */
  scopeType?: string;
  /**
   * @remarks
   * The session ID shared across multiple requests in the same session.
   * 
   * @example
   * conv_1790651642778_azcvjyh
   */
  sessionId?: string;
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The number of jobs covered by the inspection.
   * 
   * @example
   * 12
   */
  totalJobs?: number;
  /**
   * @remarks
   * The number of tokens consumed by this request.
   * 
   * @example
   * 1287
   */
  totalTokens?: number;
  /**
   * @remarks
   * The request trigger type, such as cron or manual.
   * 
   * @example
   * CRON
   */
  triggerSource?: string;
  /**
   * @remarks
   * The token consumption scenario.
   * 
   * @example
   * ai_assistant
   */
  usageType?: string;
  /**
   * @remarks
   * workspace
   * 
   * @example
   * c278e83dff5b41
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      bizObjects: 'BizObjects',
      namespace: 'Namespace',
      occurredAt: 'OccurredAt',
      scopeConfig: 'ScopeConfig',
      scopeType: 'ScopeType',
      sessionId: 'SessionId',
      status: 'Status',
      totalJobs: 'TotalJobs',
      totalTokens: 'TotalTokens',
      triggerSource: 'TriggerSource',
      usageType: 'UsageType',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObjects: { 'type': 'array', 'itemType': TokenUsageDetailDTOBizObjects },
      namespace: 'string',
      occurredAt: 'number',
      scopeConfig: TokenUsageDetailDTOScopeConfig,
      scopeType: 'string',
      sessionId: 'string',
      status: 'string',
      totalJobs: 'number',
      totalTokens: 'number',
      triggerSource: 'string',
      usageType: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizObjects)) {
      $dara.Model.validateArray(this.bizObjects);
    }
    if(this.scopeConfig && typeof (this.scopeConfig as any).validate === 'function') {
      (this.scopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

