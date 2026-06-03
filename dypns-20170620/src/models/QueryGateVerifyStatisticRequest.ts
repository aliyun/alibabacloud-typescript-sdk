// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGateVerifyStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authenticationType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  osType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      endDate: 'EndDate',
      osType: 'OsType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      endDate: 'string',
      osType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

