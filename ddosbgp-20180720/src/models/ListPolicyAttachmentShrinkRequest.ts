// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyAttachmentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of protected objects.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of rows per page in a paging query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * f38f6520-92b7-451e-b520-9ab3********
   */
  policyId?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **default**: default mitigation policy.
   * - **l3**: IP-specific mitigation policy.
   * - **l4**: port-specific mitigation policy.
   * 
   * @example
   * l3
   */
  policyType?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: queries the policy associations that attach to the default surf DPI engine.
   * - **2**: queries the policy associations that attach to the new stream DPI engine.
   * 
   * @example
   * 2
   */
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

