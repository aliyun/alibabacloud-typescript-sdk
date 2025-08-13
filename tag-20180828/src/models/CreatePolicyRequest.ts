// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * {"tags":{"CostCenter":{"tag_value":{"@@assign":["Beijing","Shanghai"]},"tag_key":{"@@assign":"CostCenter"}}}}
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
   */
  policyDesc?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test
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
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode. Set the value to USER if you use an Alibaba Cloud account or a member of a resource directory to call this API operation to create a tag policy for the Alibaba Cloud account or member.
   * *   RD: multi-account mode. Set the value to RD if you use the management account of a resource directory to call this API operation to create a tag policy for the resource directory.
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * RD
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      policyContent: 'string',
      policyDesc: 'string',
      policyName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

