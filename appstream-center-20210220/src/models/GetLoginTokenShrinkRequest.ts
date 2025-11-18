// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginTokenShrinkRequest extends $dara.Model {
  areaSite?: string;
  /**
   * @example
   * 182901
   */
  authenticationCode?: string;
  availableFeaturesShrink?: string;
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05967f80-6f51-46cb-a27c-****
   */
  clientId?: string;
  clientName?: string;
  /**
   * @example
   * windows_\\"Windows 10 Pro\\" 10.0 (Build 22631)
   */
  clientOS?: string;
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * 7.3.0-20240619.143924
   */
  clientVersion?: string;
  /**
   * @example
   * SsoTokenLogin
   */
  currentStage?: string;
  /**
   * @example
   * cn-beijing+dir-j9dd****
   */
  directoryId?: string;
  /**
   * @example
   * null
   */
  encryptedFingerPrintData?: string;
  /**
   * @example
   * 4d7****8e90bb0484fc
   */
  encryptedKey?: string;
  /**
   * @example
   * 04d7****8e90bb0484fc;gJ1GLca1vQRRqQbRvByU0A==;5kOWZE7AtbQhki+4LAo69A==
   */
  encryptedPassword?: string;
  /**
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @example
   * null
   */
  fingerPrintData?: string;
  /**
   * @example
   * idp-iwntrlbb98q7v****
   */
  idpId?: string;
  /**
   * @example
   * null
   */
  imageUrl?: string;
  /**
   * @example
   * true
   */
  keepAlive?: boolean;
  /**
   * @example
   * 00ugamMAoO1+u1MlhmgCeZJ75q094x3H/4kg7ZaTI3f/joVTVPIpJgfv9JFkPLNxnQjblrvsByNas08mc6FtVWvQPOE68fqmt6QMM4UbRtahm8luxEXvicF58qSPXW1hxOtV/Ev6d92VBz2Bck/N4CYyjD0iLocfN8jkBnt231****
   */
  keepAliveToken?: string;
  /**
   * @example
   * Fe04****
   */
  loginIdentifier?: string;
  /**
   * @example
   * null
   */
  loginName?: string;
  mfaType?: string;
  /**
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @example
   * Admin@1234****
   */
  newPassword?: string;
  /**
   * @example
   * cn-beijing+dir-j9dd****
   */
  officeSiteId?: string;
  /**
   * @example
   * Admin@1234****
   */
  oldPassword?: string;
  /**
   * @example
   * Admin@1234****
   */
  password?: string;
  /**
   * @example
   * 1822727****
   */
  phone?: string;
  /**
   * @example
   * 321123
   */
  phoneVerifyCode?: string;
  profileRegion?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * c6f3cd91-65fc-4c7b-b189-2a73da0****
   */
  sessionId?: string;
  /**
   * @example
   * null
   */
  ssoExtendsCookies?: string;
  /**
   * @example
   * 04d707a6-fb23-44a7-aae7-8e90****
   */
  ssoSessionToken?: string;
  /**
   * @example
   * 1234***
   */
  tokenCode?: string;
  /**
   * @example
   * 04d707a6-fb23-44a7-aae7-8e90bb04****
   */
  umidToken?: string;
  /**
   * @example
   * C50973691A6D2BE23F2CDD73B85B****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      areaSite: 'AreaSite',
      authenticationCode: 'AuthenticationCode',
      availableFeaturesShrink: 'AvailableFeatures',
      channel: 'Channel',
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      currentStage: 'CurrentStage',
      directoryId: 'DirectoryId',
      encryptedFingerPrintData: 'EncryptedFingerPrintData',
      encryptedKey: 'EncryptedKey',
      encryptedPassword: 'EncryptedPassword',
      endUserId: 'EndUserId',
      fingerPrintData: 'FingerPrintData',
      idpId: 'IdpId',
      imageUrl: 'ImageUrl',
      keepAlive: 'KeepAlive',
      keepAliveToken: 'KeepAliveToken',
      loginIdentifier: 'LoginIdentifier',
      loginName: 'LoginName',
      mfaType: 'MfaType',
      networkType: 'NetworkType',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      password: 'Password',
      phone: 'Phone',
      phoneVerifyCode: 'PhoneVerifyCode',
      profileRegion: 'ProfileRegion',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      ssoExtendsCookies: 'SsoExtendsCookies',
      ssoSessionToken: 'SsoSessionToken',
      tokenCode: 'TokenCode',
      umidToken: 'UmidToken',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaSite: 'string',
      authenticationCode: 'string',
      availableFeaturesShrink: 'string',
      channel: 'string',
      clientId: 'string',
      clientName: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      currentStage: 'string',
      directoryId: 'string',
      encryptedFingerPrintData: 'string',
      encryptedKey: 'string',
      encryptedPassword: 'string',
      endUserId: 'string',
      fingerPrintData: 'string',
      idpId: 'string',
      imageUrl: 'string',
      keepAlive: 'boolean',
      keepAliveToken: 'string',
      loginIdentifier: 'string',
      loginName: 'string',
      mfaType: 'string',
      networkType: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      password: 'string',
      phone: 'string',
      phoneVerifyCode: 'string',
      profileRegion: 'string',
      regionId: 'string',
      sessionId: 'string',
      ssoExtendsCookies: 'string',
      ssoSessionToken: 'string',
      tokenCode: 'string',
      umidToken: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

