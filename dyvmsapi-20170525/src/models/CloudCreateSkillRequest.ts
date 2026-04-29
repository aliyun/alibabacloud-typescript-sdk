// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * 描述
   * 
   * @example
   * Comment3
   */
  comment?: string;
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
   * 技能名称
   * 
   * This parameter is required.
   * 
   * @example
   * skillName
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      enterpriseId: 'EnterpriseId',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      enterpriseId: 'number',
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

