// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWuyingServerSceneUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientType?: string;
  clientVersion?: string;
  endUserId?: string;
  loginRegionId?: string;
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scene?: string;
  sessionId?: string;
  uuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      scene: 'Scene',
      sessionId: 'SessionId',
      uuid: 'Uuid',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      scene: 'string',
      sessionId: 'string',
      uuid: 'string',
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

