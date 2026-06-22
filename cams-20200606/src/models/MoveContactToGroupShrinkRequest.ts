// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveContactToGroupShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  bizCode?: string;
  bizExtendShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  contacts?: string;
  /**
   * @example
   * 示例值
   */
  linkExistGroups?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  linkNewGroups?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      contacts: 'Contacts',
      linkExistGroups: 'LinkExistGroups',
      linkNewGroups: 'LinkNewGroups',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      contacts: 'string',
      linkExistGroups: 'string',
      linkNewGroups: 'string',
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

