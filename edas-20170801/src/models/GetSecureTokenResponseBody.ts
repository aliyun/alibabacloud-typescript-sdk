// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecureTokenResponseBodySecureToken extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used in the namespace.
   * 
   * @example
   * f676f1**************
   */
  accessKey?: string;
  /**
   * @remarks
   * The address of Address Server associated with the namespace.
   * 
   * @example
   * addr-****-****.edas.aliyun.com
   */
  addressServerHost?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shenzhen
   */
  belongRegion?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * ”“
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that activated Enterprise Distributed Application Service (EDAS).
   * 
   * @example
   * 11727458********
   */
  edasId?: string;
  /**
   * @remarks
   * The ID of the security token.
   * 
   * @example
   * 7279
   */
  id?: number;
  /**
   * @remarks
   * The ID of the MSE instance.
   * 
   * @example
   * mse_prepaid_public_cn-tl32p******
   */
  mseInstanceId?: string;
  /**
   * @remarks
   * The public endpoint of the MSE registry.
   * 
   * @example
   * mse-aa2******-p.nacos-ans.mse.aliyuncs.com
   */
  mseInternetAddress?: string;
  /**
   * @remarks
   * The private endpoint of the MSE registry.
   * 
   * @example
   * mse-72******-nacos-ans.mse.aliyuncs.com
   */
  mseIntranetAddress?: string;
  /**
   * @remarks
   * The type of the Microservices Engine (MSE) registry.
   * 
   * *   default: the shared registry of EDAS
   * *   exclusive_mse: MSE Nacos registry
   * 
   * @example
   * exclusive_mse
   */
  mseRegistryType?: string;
  /**
   * @remarks
   * The ID of the region where the namespace resides.
   * 
   * @example
   * cn-shenzhen:x*******
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the namespace resides.
   * 
   * @example
   * x******
   */
  regionName?: string;
  /**
   * @remarks
   * The AccessKey secret used in the namespace.
   * 
   * @example
   * gOSgbgR2R*************
   */
  secretKey?: string;
  /**
   * @remarks
   * The tenant ID of the namespace.
   * 
   * @example
   * 401b7bc8-9441-4693-****-************
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * edas_com***_****@******-*****.***
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      addressServerHost: 'AddressServerHost',
      belongRegion: 'BelongRegion',
      description: 'Description',
      edasId: 'EdasId',
      id: 'Id',
      mseInstanceId: 'MseInstanceId',
      mseInternetAddress: 'MseInternetAddress',
      mseIntranetAddress: 'MseIntranetAddress',
      mseRegistryType: 'MseRegistryType',
      regionId: 'RegionId',
      regionName: 'RegionName',
      secretKey: 'SecretKey',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      addressServerHost: 'string',
      belongRegion: 'string',
      description: 'string',
      edasId: 'string',
      id: 'number',
      mseInstanceId: 'string',
      mseInternetAddress: 'string',
      mseIntranetAddress: 'string',
      mseRegistryType: 'string',
      regionId: 'string',
      regionName: 'string',
      secretKey: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecureTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-*************
   */
  requestId?: string;
  /**
   * @remarks
   * The returned security token.
   */
  secureToken?: GetSecureTokenResponseBodySecureToken;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secureToken: 'SecureToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      secureToken: GetSecureTokenResponseBodySecureToken,
    };
  }

  validate() {
    if(this.secureToken && typeof (this.secureToken as any).validate === 'function') {
      (this.secureToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

