// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindRequest extends $dara.Model {
  /**
   * @example
   * ca-fxwp4koxs8hopi94e
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-e1l4kqqykxt4uzdx9
   */
  appInstanceGroupId?: string;
  appInstanceId?: string;
  /**
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b699ca7
   */
  clientId?: string;
  /**
   * @example
   * 139.129.223.122
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Pro\\" 10.0 (Build 19041)
   */
  clientOS?: string;
  /**
   * @example
   * 2.0.1-D-20220303.171122
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * cn-shanghai
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1e9c8e83d83ea11270871640059145702bde8c5be8c6b9a854ffb6a43bd2673c19a5551c83800724e024f488dbfb0b247
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11040139-4fb4-4b35-9b44-6c07c746a43e
   */
  sessionId?: string;
  /**
   * @example
   * 1569416393841402
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      sessionId: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

