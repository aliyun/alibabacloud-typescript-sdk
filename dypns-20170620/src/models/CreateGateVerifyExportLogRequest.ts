// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGateVerifyExportLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authenticationType?: number;
  /**
   * @example
   * Android
   */
  osType?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202211
   */
  queryMonth?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * FC100*******4175
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      osType: 'OsType',
      ownerId: 'OwnerId',
      queryMonth: 'QueryMonth',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      osType: 'string',
      ownerId: 'number',
      queryMonth: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

