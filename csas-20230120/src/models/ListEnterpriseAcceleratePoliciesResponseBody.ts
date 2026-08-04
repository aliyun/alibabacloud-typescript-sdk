// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAcceleratePoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The acceleration pattern.
   * 
   * - **whitelist**: accelerates access to applications in the whitelist.
   * 
   * - **global**: accelerates access to all applications.
   * 
   * - **build-in-list:** accelerates access to built-in applications.
   * 
   * @example
   * whitelist
   */
  accelerationType?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * 这是一条测试策略。
   */
  description?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * eap-eec34d4b12fcca61
   */
  eapId?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled.
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
   * @example
   * 0
   */
  enabled?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether to enable Transport Layer Security (TLS).
   * 
   * - **0**: disable
   * 
   * - **1**: enable
   * 
   * @example
   * 0
   */
  onTls?: number;
  /**
   * @remarks
   * The policy priority.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * Indicates whether the policy is visible on the client.
   * 
   * - **0**: not visible
   * 
   * - **1**: visible
   * 
   * @example
   * 1
   */
  showInClient?: number;
  /**
   * @remarks
   * The address of the acceleration instance. The address can be an IP address or a domain name.
   * 
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @remarks
   * The port of the acceleration instance. The port must be between 1000 and 60000.
   * 
   * @example
   * 1000
   */
  upstreamPort?: number;
  /**
   * @remarks
   * The acceleration instance.
   * 
   * @example
   * connector
   */
  upstreamType?: string;
  /**
   * @remarks
   * The user group for acceleration.
   * 
   * @example
   * 测试用户组
   */
  userAttributeGroup?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'AccelerationType',
      description: 'Description',
      eapId: 'EapId',
      enabled: 'Enabled',
      name: 'Name',
      onTls: 'OnTls',
      priority: 'Priority',
      showInClient: 'ShowInClient',
      upstreamHost: 'UpstreamHost',
      upstreamPort: 'UpstreamPort',
      upstreamType: 'UpstreamType',
      userAttributeGroup: 'UserAttributeGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      description: 'string',
      eapId: 'string',
      enabled: 'number',
      name: 'string',
      onTls: 'number',
      priority: 'number',
      showInClient: 'number',
      upstreamHost: 'string',
      upstreamPort: 'number',
      upstreamType: 'string',
      userAttributeGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseAcceleratePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of policies.
   */
  policies?: ListEnterpriseAcceleratePoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DB0471D0-C05C-556D-9F40-0325D890036F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of policies.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListEnterpriseAcceleratePoliciesResponseBodyPolicies },
      requestId: 'string',
      total: 'number',
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

