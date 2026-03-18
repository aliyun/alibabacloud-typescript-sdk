// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyAttachmentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * f38f6520-92b7-451e-b520-9ab3********
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policies.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * @example
   * l3
   */
  policyType?: string;
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      policyId: 'string',
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

