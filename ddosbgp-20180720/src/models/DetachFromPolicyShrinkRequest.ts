// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachFromPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policies.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * This parameter is required.
   * 
   * @example
   * l3
   */
  policyType?: string;
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      policyType: 'PolicyType',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      policyType: 'string',
      portVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

