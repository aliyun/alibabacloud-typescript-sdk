// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   false (default): performs a dry run and performs the actual request.
   * *   true: performs only a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The document of the tag policy.
   * 
   * For more information about the syntax of a tag policy, see [Syntax of a tag policy](https://help.aliyun.com/document_detail/417436.html).
   * 
   * @example
   * {"tags":{"CostCenter":{"tag_value":{"@@assign":["Beijing","Shanghai"]},"tag_key":{"@@assign":"CostCenter"}}}}
   * 
   * **if can be null:**
   * true
   */
  policyContent?: string;
  /**
   * @remarks
   * The description of the tag policy.
   * 
   * The description must be 0 to 512 characters in length.
   * 
   * @example
   * This is a tag policy example.
   * 
   * **if can be null:**
   * true
   */
  policyDesc?: string;
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * This parameter is required.
   * 
   * @example
   * p-5732750813924f90****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (_).
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

