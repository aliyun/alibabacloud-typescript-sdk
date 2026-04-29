// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateQueueSkillRequest extends $dara.Model {
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
  ownerId?: number;
  /**
   * @remarks
   * 队列号
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  qno?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * skill的id
   * 
   * This parameter is required.
   * 
   * @example
   * 17
   */
  skillId?: number;
  /**
   * @remarks
   * 技能值
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  skillLevel?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      ownerId: 'OwnerId',
      qno: 'Qno',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skillId: 'SkillId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      ownerId: 'number',
      qno: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skillId: 'number',
      skillLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

