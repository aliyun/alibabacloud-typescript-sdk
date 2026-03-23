// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBNodesRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  classCode?: string;
  vswitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'classCode',
      vswitchId: 'vswitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBNode?: CreateDBNodesRequestDBNode[];
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBNode: 'DBNode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      DBNode: { 'type': 'array', 'itemType': CreateDBNodesRequestDBNode },
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

