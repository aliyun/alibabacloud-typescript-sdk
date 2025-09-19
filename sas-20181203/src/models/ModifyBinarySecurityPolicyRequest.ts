// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBinarySecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster information.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"Namespaces\\":[\\"default\\"],\\"ClusterId\\":\\"c9f5b93a8da8f4341b77***********\\"},{\\"Namespaces\\":[\\"default\\"],\\"ClusterId\\":\\"cc12429dbb8f644f690b0***********\\"}]
   */
  clusters?: string;
  /**
   * @remarks
   * Policy name.
   * 
   * @example
   * test-policy-04-11
   */
  name?: string;
  /**
   * @remarks
   * Policy content. JSON format, Key values:
   * - **policyMode**: Type of policy, default is requireAttestor.
   * - **requiredAttestors**: Required attestors.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"PolicyMode\\":\\"requireAttestor\\",\\"RequiredAttestors\\":[\\"test-xcs-04-11-hhht\\"]}
   */
  policy?: string;
  /**
   * @remarks
   * Remark.
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
   * 1.2.3.4
   */
  sourceIp?: string;
  /**
   * @remarks
   * Set to enable or disable the policy. Values:
   * 
   * - **enabled**: Enable the protection policy.
   * - **disabled**: Disable the protection policy.
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

