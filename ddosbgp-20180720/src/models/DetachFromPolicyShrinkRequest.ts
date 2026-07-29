// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachFromPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of protected objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **default**: default mitigation policy.
   * - **l3**: IP-specific mitigation policy.
   * - **l4**: port-specific mitigation policy.
   * 
   * This parameter is required.
   * 
   * @example
   * l3
   */
  policyType?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: dissociates the default surf anti-DDoS engine policy.
   * - **2**: dissociates the new stream anti-DDoS engine policy.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 2
   */
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

