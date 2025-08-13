// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesForTargetRequest extends $dara.Model {
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
   * The region ID. Set the value to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the object. This parameter specifies a filter condition for the query.
   * 
   * @example
   * 154950938137****
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
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

