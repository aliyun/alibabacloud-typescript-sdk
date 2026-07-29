// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachToPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of protection objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cd8b4d70-e4e0-413a-b390-e71d********
   */
  policyId?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: Associates the default surf anti-DDoS engine policy.
   * - **2**: Associates the new stream anti-DDoS engine policy.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 2
   */
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      policyId: 'PolicyId',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      policyId: 'string',
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

