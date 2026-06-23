// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBrandResponseBodyBrand extends $dara.Model {
  /**
   * @remarks
   * Brand ID.
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @remarks
   * Brand name.
   * 
   * @example
   * Custom Brand
   */
  brandName?: string;
  /**
   * @remarks
   * Brand type.
   * 
   * @example
   * user_custom
   */
  brandType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Brand status.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      brandId: 'BrandId',
      brandName: 'BrandName',
      brandType: 'BrandType',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandId: 'string',
      brandName: 'string',
      brandType: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandResponseBody extends $dara.Model {
  /**
   * @remarks
   * Brand.
   */
  brand?: GetBrandResponseBodyBrand;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: GetBrandResponseBodyBrand,
      requestId: 'string',
    };
  }

  validate() {
    if(this.brand && typeof (this.brand as any).validate === 'function') {
      (this.brand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

