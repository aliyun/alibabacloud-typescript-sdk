// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthTokenRequest extends $dara.Model {
  bizType?: number;
  cmApiCode?: number;
  ctApiCode?: number;
  cuApiCode?: number;
  /**
   * @remarks
   * The requested domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyundoc.com
   */
  origin?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneCode?: string;
  /**
   * @remarks
   * The URL of the requested web page.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyundoc.com/
   */
  url?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      cmApiCode: 'CmApiCode',
      ctApiCode: 'CtApiCode',
      cuApiCode: 'CuApiCode',
      origin: 'Origin',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      cmApiCode: 'number',
      ctApiCode: 'number',
      cuApiCode: 'number',
      origin: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
      url: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

