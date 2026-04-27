// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryAgentSkillRequest extends $dara.Model {
  /**
   * @remarks
   * 座席工号，可传多个，中间以英文逗号分割
   * 
   * This parameter is required.
   * 
   * @example
   * 111,222
   */
  cnos?: string;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cnos: 'Cnos',
      enterpriseId: 'EnterpriseId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnos: 'string',
      enterpriseId: 'number',
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

