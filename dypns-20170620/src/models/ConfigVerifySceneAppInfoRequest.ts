// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigVerifySceneAppInfoRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  CM?: boolean;
  /**
   * @example
   * false
   */
  CT?: boolean;
  /**
   * @example
   * false
   */
  CU?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx@xxx.com
   */
  email?: string;
  /**
   * @example
   * 112.124.18.99
   */
  ipWhitelist?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FC220000011285006
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      CM: 'CM',
      CT: 'CT',
      CU: 'CU',
      email: 'Email',
      ipWhitelist: 'IpWhitelist',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CM: 'boolean',
      CT: 'boolean',
      CU: 'boolean',
      email: 'string',
      ipWhitelist: 'string',
      ownerId: 'number',
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

