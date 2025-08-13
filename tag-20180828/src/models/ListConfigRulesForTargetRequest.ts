// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRulesForTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 50. Maximum value: 1000.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The use scenario of the tag policy. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   tags: enables tags with specified tag values to be added to resources.
   * *   rg_inherit: enables resources in a resource group to automatically inherit tags from the resource group.
   * 
   * @example
   * tags
   */
  policyType?: string;
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
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * @example
   * CostCenter
   */
  tagKey?: string;
  /**
   * @remarks
   * The ID of the object. This parameter specifies a filter condition for the query.
   * 
   * @example
   * 134254031178****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKey: 'TagKey',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKey: 'string',
      targetId: 'string',
      targetType: 'string',
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

