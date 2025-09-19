// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBinarySecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"ClusterId\\":\\"cc12429dbb8f644f690b0623fb52b4737\\",\\"Namespaces\\":[\\"default\\"]},{\\"ClusterId\\":\\"c9f5b93a8da8f4341b774d79fdbcedb3c\\",\\"Namespaces\\":[\\"default\\"]}]
   */
  clusters?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * mv-test
   */
  name?: string;
  /**
   * @remarks
   * The content of the policy. Specify a value in the JSON format. You can specify the following keys:
   * 
   * *   **policyMode**: the type of the policy. Default value: requireAttestor.
   * *   **requiredAttestors**: the required witnesses.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"PolicyMode\\":\\"requireAttestor\\",\\"RequiredAttestors\\":[\\"test-xcs-04-12-heyuan\\"]}
   */
  policy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * remark test
   */
  remark?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 59.82.XXX.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **enable**
   * *   **disable**
   * 
   * @example
   * enable
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

