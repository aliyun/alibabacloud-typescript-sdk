// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateQueueShrinkRequest extends $dara.Model {
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
   * 队列信息
   * 
   * This parameter is required.
   */
  queueShrink?: string;
  /**
   * @remarks
   * 队列技能
   * 
   * This parameter is required.
   */
  queueSkillsShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      ownerId: 'OwnerId',
      queueShrink: 'Queue',
      queueSkillsShrink: 'QueueSkills',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      ownerId: 'number',
      queueShrink: 'string',
      queueSkillsShrink: 'string',
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

