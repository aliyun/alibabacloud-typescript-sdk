// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeRequestDBNode extends $dara.Model {
  classCode?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'classCode',
      nodeId: 'nodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeRequest extends $dara.Model {
  autoPay?: boolean;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBInstanceStorage?: string;
  DBInstanceStorageType?: string;
  DBNode?: ModifyDBNodeRequestDBNode[];
  dryRun?: boolean;
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  produceAsync?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBNode: 'DBNode',
      dryRun: 'DryRun',
      effectiveTime: 'EffectiveTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      produceAsync: 'ProduceAsync',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'string',
      DBInstanceStorageType: 'string',
      DBNode: { 'type': 'array', 'itemType': ModifyDBNodeRequestDBNode },
      dryRun: 'boolean',
      effectiveTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      produceAsync: 'boolean',
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

