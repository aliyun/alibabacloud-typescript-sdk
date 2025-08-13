// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleReportRequest extends $dara.Model {
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
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * @example
   * USER
   */
  targetType?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
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

