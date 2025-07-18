// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAcceleratePoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @example
   * whitelist
   */
  accelerationType?: string;
  description?: string;
  /**
   * @example
   * eap-eec34d4b12fcca61
   */
  eapId?: string;
  /**
   * @example
   * 0
   */
  enabled?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 0
   */
  onTls?: number;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  showInClient?: number;
  /**
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @example
   * 1000
   */
  upstreamPort?: number;
  /**
   * @example
   * connector
   */
  upstreamType?: string;
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
  policies?: ListEnterpriseAcceleratePoliciesResponseBodyPolicies[];
  /**
   * @example
   * DB0471D0-C05C-556D-9F40-0325D890036F
   */
  requestId?: string;
  /**
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

