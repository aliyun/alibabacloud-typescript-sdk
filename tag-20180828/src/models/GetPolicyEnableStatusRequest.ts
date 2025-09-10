// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyEnableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The enabling type. Valid values:
   * 
   * *   TAG_POLICY: the Tag Policy feature.
   * *   VERIFY_NO_TAG: the strong verification feature.
   * *   TAG_POLICY_NOTIFY: the notification feature that sends notifications for resources found to be non-compliant with the tag policy.
   * 
   * @example
   * TAG_POLICY
   */
  openType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
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
   * RD
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      openType: 'OpenType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
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

