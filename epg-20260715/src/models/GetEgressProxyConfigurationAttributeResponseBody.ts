// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyConfigurationAttributeResponseBodyDefaultRulePhaseActions extends $dara.Model {
  /**
   * @remarks
   * The default action executed in the PostResponse phase (after a response is returned) when traffic does not match any rules. This phase only supports the value **Allow** (default), which indicates that the traffic is allowed.
   * 
   * @example
   * Allow
   */
  postResponse?: string;
  /**
   * @remarks
   * The default action executed in the PreDns phase (before DNS resolution) when traffic does not match any rules. Valid values:
   * 
   * - **Allow** (default): allows the traffic.
   * 
   * - **Deny**: denies the traffic.
   * 
   * @example
   * Allow
   */
  preDns?: string;
  /**
   * @remarks
   * The default action executed in the PreRequest phase (before a request is forwarded) when traffic does not match any rules. Valid values:
   * 
   * - **Allow** (default): allows the traffic.
   * 
   * - **Deny**: denies the traffic.
   * 
   * @example
   * Allow
   */
  preRequest?: string;
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: 'string',
      preDns: 'string',
      preRequest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyConfigurationAttributeResponseBodyRuleGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress rule group.
   * 
   * @example
   * eprg-uf60966a9633667c****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @remarks
   * The priority of the egress rule group in the egress proxy configuration. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleGroupId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyConfigurationAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 256 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * testValue
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

export class GetEgressProxyConfigurationAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time of the egress proxy configuration. The time is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-02-02T02:20:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default actions executed in each effective phase (PreDns, PreRequest, and PostResponse) when traffic does not match any rules.
   */
  defaultRulePhaseActions?: GetEgressProxyConfigurationAttributeResponseBodyDefaultRulePhaseActions;
  /**
   * @remarks
   * The description of the egress proxy configuration. The description must be 2 to 256 characters in length and can contain Chinese characters, letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * The ID of the egress proxy configuration.
   * 
   * @example
   * epc-uf609a6a8fdf9f4d****
   */
  egressProxyConfigurationId?: string;
  /**
   * @remarks
   * The name of the egress proxy configuration. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * testEpg
   */
  egressProxyConfigurationName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C79118A9-CA6D-5359-B53E-111BE8A03DCF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzorljcazp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of egress rule group references associated with the egress proxy configuration.
   */
  ruleGroups?: GetEgressProxyConfigurationAttributeResponseBodyRuleGroups[];
  /**
   * @remarks
   * The status of the egress proxy configuration. Valid values:
   * 
   * - **Provisioning**: The configuration is being created.
   * 
   * - **Available**: The configuration is available.
   * 
   * - **Configuring**: The configuration is being modified.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetEgressProxyConfigurationAttributeResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultRulePhaseActions: 'DefaultRulePhaseActions',
      description: 'Description',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyConfigurationName: 'EgressProxyConfigurationName',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      ruleGroups: 'RuleGroups',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultRulePhaseActions: GetEgressProxyConfigurationAttributeResponseBodyDefaultRulePhaseActions,
      description: 'string',
      egressProxyConfigurationId: 'string',
      egressProxyConfigurationName: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      ruleGroups: { 'type': 'array', 'itemType': GetEgressProxyConfigurationAttributeResponseBodyRuleGroups },
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetEgressProxyConfigurationAttributeResponseBodyTags },
    };
  }

  validate() {
    if(this.defaultRulePhaseActions && typeof (this.defaultRulePhaseActions as any).validate === 'function') {
      (this.defaultRulePhaseActions as any).validate();
    }
    if(Array.isArray(this.ruleGroups)) {
      $dara.Model.validateArray(this.ruleGroups);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

