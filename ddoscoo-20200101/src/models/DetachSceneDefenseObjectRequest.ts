// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachSceneDefenseObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the object. Set the value to **Domain**, which indicates a domain name.
   * 
   * @example
   * Domain
   */
  objectType?: string;
  /**
   * @remarks
   * The protection asset that you want to remove from a policy. Separate multiple protection assets with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  objects?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * > You can call the [DescribeSceneDefensePolicies](https://help.aliyun.com/document_detail/159382.html) operation to query the IDs of all policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 321a-fd31-df51-****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      objectType: 'ObjectType',
      objects: 'Objects',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectType: 'string',
      objects: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

