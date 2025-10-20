// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBrandResponseBodyBrand extends $dara.Model {
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
   * 品牌名称
   * 
   * @example
   * Custom Brand
   */
  brandName?: string;
  /**
   * @remarks
   * 品牌类型
   * 
   * @example
   * user_custom
   */
  brandType?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 品牌状态
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
  brand?: GetBrandResponseBodyBrand;
  /**
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

