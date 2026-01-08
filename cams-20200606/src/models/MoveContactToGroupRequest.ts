// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveContactToGroupRequest extends $dara.Model {
  /**
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"id":1}]
   */
  contacts?: string;
  /**
   * @example
   * [{"id":1}]
   */
  linkExistGroups?: string;
  /**
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
      bizExtend: 'BizExtend',
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
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contacts: 'string',
      linkExistGroups: 'string',
      linkNewGroups: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

