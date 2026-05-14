// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCreateEnterprisePauseRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 默认状态，0：不是；1：是
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isDefault?: number;
  /**
   * @remarks
   * 休息状态，0：不是；1：是
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isRest?: string;
  ownerId?: number;
  /**
   * @remarks
   * 置忙状态描述（不超4个字符）
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  pauseStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      isDefault: 'IsDefault',
      isRest: 'IsRest',
      ownerId: 'OwnerId',
      pauseStatus: 'PauseStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      isDefault: 'number',
      isRest: 'string',
      ownerId: 'number',
      pauseStatus: 'string',
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

