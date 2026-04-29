// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudDeleteSkillRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 技能id；正整数，id和name可选，但不能同时为空。同时都传时，以id为准
   * 
   * @example
   * 54
   */
  id?: number;
  /**
   * @remarks
   * 技能名称；id和name可选，但不能同时为空。同时都传时，以id为准
   * 
   * @example
   * name3
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      id: 'number',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

