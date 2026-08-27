// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveContactToGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business tenant code. Default value: ALICOM_OPAAS.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: an empty collection.
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * The list of contacts whose group associations are to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"id":1}]
   */
  contacts?: string;
  /**
   * @remarks
   * The list of existing group IDs to associate with.
   * 
   * @example
   * [{"id":1}]
   */
  linkExistGroups?: string;
  /**
   * @remarks
   * The list of new group names to associate with.
   * 
   * @example
   * [{"groupName":"aaa"}]
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

