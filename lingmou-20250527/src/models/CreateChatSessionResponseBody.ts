// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatSessionResponseBodyDataAvatarAssets extends $dara.Model {
  /**
   * @remarks
   * 资产MD5值。
   * 
   * @example
   * 5B83BE2114489274BB88BADE7EBC****
   */
  md5?: string;
  /**
   * @remarks
   * 支持的SDK最低版本。
   * 
   * @example
   * 0.0.1
   */
  minRequiredVersion?: string;
  /**
   * @remarks
   * SDK使用的密钥。
   * 
   * @example
   * J562PNqJBZDhzOQpLBgIcIW8+rHQoM7P6IONGMP7P5vGxrWLxT7VtRenFnMY+wg/zpA2qwpFBmJYO2rVexnlCQ2WE4kvYOH/OKmlTzpQddY34U5jS9KaS3b3ulpq4xnKDjWJ+sLZSRMhuPDdlq8ZPfcfEPhJhF3zPO8Hu4QOSu+D/pAIDJUoixOTo9Q14DXFKGFuuVRQOQ7f/VxJcoSLIWIusV917pLtph/IYBaLd27gzbrTZBEVD8qrucR+WOQPY1g67PGAdafkhJWrs/+coM7+5dc3HEUC+KgI9JN4X4Akelc94aJcy78RZ6tRdr73hBzN83/cMZdzt2hx******
   */
  secret?: string;
  /**
   * @remarks
   * 资产类型。
   * 
   * @example
   * AVATAR_3D_TRADITIONAL
   */
  type?: string;
  /**
   * @remarks
   * 资产下载链接。
   * 
   * @example
   * https://daily-avatar-property.oss-cn-beijing.aliyuncs.com/avatar-share-property/AVATAR_3D_TRADITIONAL/Mt.CNMU6BO4RBYU2/secret_assets_web.zip?Expires=1752637519&OSSAccessKeyId=STS.NZULzwLRx8thHDHQxem94****&Signature=Oni3%2Be8dY8Xrv3iRGDyzn7u****%3D&security-token=CAISzAJ1q6Ft5B2yfSjIr5ngB8DDoY1Zj7aDSmL5tXgwYbYYi5LPrDz2IHhMfnloB%2BEcsfU3nmxT6vkZlrp6SJtIXleCZtF94oxN9h2gb4fb4093DEHt08%2FLI3OaLjKm9u2wCryLYbGwU%2FOpbE%2B%2B5U0X6LDmdDKkckW4OJmS8%2FBOZcgWWQ%2FKBlgvRq0hRG1YpdQdKGHaONu0LxfumRCwNkdzvRdmgm4NgsbWgO%2Fks0KA1QSml7ZP%2B9WuesH0M%2FMBZskvD42Hu8VtbbfE3SJq7BxHybx7lqQs%2B02c5onHUwEPsk%2FZYrKOroYzc1RjAbM%2FErRY6fP8nOE9ovbUm5RXHpT05CrMOs62ZPdDoKOscIvBXr6yZaP7JmcGC6iQLG%2FznQkSc081IsK2C7Xq0pe54O3lg9Ab41ZGNYEjq%2BpCIUP%2Fs97dqXEelD2e%2Bh8UezDnKxqAAXuAiYRY7Ox3cf6h2MlmRsK5yywg45O%2FizjiK2k8Z8p6WeOA54W3pfbg6ElV4d8TMWCVZ7tuAbSgRCKBg3q5YYrdS2ENqDu6njIea1pxG4LT4ydGxDBkYpjwcUxutDd0aAhFjsypSK%2Feuk0%2FDCfKMrWzCmkr1AtPpcNfJ8LPj58qIA
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      md5: 'md5',
      minRequiredVersion: 'minRequiredVersion',
      secret: 'secret',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      minRequiredVersion: 'string',
      secret: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatSessionResponseBodyDataRtcParams extends $dara.Model {
  /**
   * @remarks
   * 应用id。
   * 
   * @example
   * 895cbf3b
   */
  appId?: string;
  /**
   * @remarks
   * 数字人侧用户ID。
   * 
   * @example
   * E7enIvjUos
   */
  avatarUserId?: string;
  /**
   * @remarks
   * RTC通道ID。
   * 
   * @example
   * pPltqR3FovNCK3hNQc8eHUL3Zt****
   */
  channel?: string;
  /**
   * @remarks
   * 客户端侧用户ID。
   * 
   * @example
   * aw0tqpFlP4
   */
  clientUserId?: string;
  /**
   * @remarks
   * RTC服务地址。
   * 
   * @example
   * https://gw.rtn.aliyuncs.com
   */
  gslb?: string;
  /**
   * @remarks
   * 随机串。
   * 
   * @example
   * f8b0ef02c5da778f4488e2470c
   */
  nonce?: string;
  /**
   * @remarks
   * 服务端侧用户ID。
   * 
   * @example
   * YzZtSQP8QX
   */
  serverUserId?: string;
  /**
   * @remarks
   * 过期时间戳。
   * 
   * @example
   * 1560588594
   */
  timestamp?: number;
  /**
   * @remarks
   * 访问凭证token。
   * 
   * @example
   * PtGgv2dM9F8tEuAtda50c0VNNFjn0WUbyTDPa1im4cUBE****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      avatarUserId: 'avatarUserId',
      channel: 'channel',
      clientUserId: 'clientUserId',
      gslb: 'gslb',
      nonce: 'nonce',
      serverUserId: 'serverUserId',
      timestamp: 'timestamp',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      avatarUserId: 'string',
      channel: 'string',
      clientUserId: 'string',
      gslb: 'string',
      nonce: 'string',
      serverUserId: 'string',
      timestamp: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 端渲染数字人资产信息。
   */
  avatarAssets?: CreateChatSessionResponseBodyDataAvatarAssets;
  /**
   * @remarks
   * RTC入参。
   */
  rtcParams?: CreateChatSessionResponseBodyDataRtcParams;
  /**
   * @remarks
   * 会话ID
   * 
   * @example
   * 9827f4bd-5008-4d34-98fb-62598f3ad3b5
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarAssets: 'avatarAssets',
      rtcParams: 'rtcParams',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarAssets: CreateChatSessionResponseBodyDataAvatarAssets,
      rtcParams: CreateChatSessionResponseBodyDataRtcParams,
      sessionId: 'string',
    };
  }

  validate() {
    if(this.avatarAssets && typeof (this.avatarAssets as any).validate === 'function') {
      (this.avatarAssets as any).validate();
    }
    if(this.rtcParams && typeof (this.rtcParams as any).validate === 'function') {
      (this.rtcParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * 响应码。
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 响应数据。
   */
  data?: CreateChatSessionResponseBodyData;
  /**
   * @remarks
   * http响应码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 状态码描述。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBDB0A8
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否成功
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateChatSessionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

