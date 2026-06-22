// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBinarySecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster information.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"Namespaces\\":[\\"default\\"],\\"ClusterId\\":\\"c9f5b93a8da8f4341b77***********\\"},{\\"Namespaces\\":[\\"default\\"],\\"ClusterId\\":\\"cc12429dbb8f644f690b0***********\\"}]
   */
  clusters?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test-policy-04-11
   */
  name?: string;
  /**
   * @remarks
   * The policy content in JSON format. Valid keys:
   * - **policyMode**: The policy type. Default value: requireAttestor.
   * - **requiredAttestors**: The required attestors.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"PolicyMode\\":\\"requireAttestor\\",\\"RequiredAttestors\\":[\\"test-xcs-04-11-****\\"]}
   */
  policy?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Remark
   */
  remark?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 115.213.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * Settings to enable or disable the policy. Valid values:
   * 
   * - **enabled**: Enables the mitigation policies.
   * - **disabled**: Disables the mitigation policies.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      name: 'Name',
      policy: 'Policy',
      remark: 'Remark',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: 'string',
      name: 'string',
      policy: 'string',
      remark: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

