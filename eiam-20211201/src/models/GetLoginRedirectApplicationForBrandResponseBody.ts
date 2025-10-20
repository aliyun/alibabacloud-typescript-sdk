// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginRedirectApplicationForBrandResponseBodyBrandLoginRedirectApplication extends $dara.Model {
  /**
   * @remarks
   * 应用ID
   * 
   * @example
   * app_xxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 品牌ID
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      brandId: 'BrandId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      brandId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginRedirectApplicationForBrandResponseBody extends $dara.Model {
  brandLoginRedirectApplication?: GetLoginRedirectApplicationForBrandResponseBodyBrandLoginRedirectApplication;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      brandLoginRedirectApplication: 'BrandLoginRedirectApplication',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandLoginRedirectApplication: GetLoginRedirectApplicationForBrandResponseBodyBrandLoginRedirectApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.brandLoginRedirectApplication && typeof (this.brandLoginRedirectApplication as any).validate === 'function') {
      (this.brandLoginRedirectApplication as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

