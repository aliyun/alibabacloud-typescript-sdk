// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute extends $dara.Model {
  /**
   * @example
   * -
   */
  code?: string;
  /**
   * @example
   * -
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicenseExtendArray extends $dara.Model {
  licenseAttribute?: DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute[];
  static names(): { [key: string]: string } {
    return {
      licenseAttribute: 'LicenseAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseAttribute: { 'type': 'array', 'itemType': DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.licenseAttribute)) {
      $dara.Model.validateArray(this.licenseAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicenseExtendInfo extends $dara.Model {
  /**
   * @example
   * -
   */
  accountQuantity?: number;
  /**
   * @example
   * 190311111111****
   */
  aliUid?: number;
  /**
   * @example
   * id***@**.com
   */
  email?: string;
  /**
   * @example
   * 129****1111
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      email: 'Email',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      email: 'string',
      mobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicense extends $dara.Model {
  /**
   * @example
   * 2019-05-25 09:00:00
   */
  activateTime?: string;
  /**
   * @example
   * 2019-05-25 09:00:00
   */
  createTime?: string;
  /**
   * @example
   * 2019-06-25 09:00:00
   */
  expiredTime?: string;
  extendArray?: DescribeLicenseResponseBodyLicenseExtendArray;
  extendInfo?: DescribeLicenseResponseBodyLicenseExtendInfo;
  /**
   * @example
   * 1551111111
   */
  instanceId?: string;
  /**
   * @example
   * -
   */
  licenseCode?: string;
  /**
   * @example
   * ACTIVATED
   */
  licenseStatus?: string;
  /**
   * @example
   * cmgj02****
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj02****-prepay
   */
  productSkuId?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      extendArray: 'ExtendArray',
      extendInfo: 'ExtendInfo',
      instanceId: 'InstanceId',
      licenseCode: 'LicenseCode',
      licenseStatus: 'LicenseStatus',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuId: 'ProductSkuId',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      createTime: 'string',
      expiredTime: 'string',
      extendArray: DescribeLicenseResponseBodyLicenseExtendArray,
      extendInfo: DescribeLicenseResponseBodyLicenseExtendInfo,
      instanceId: 'string',
      licenseCode: 'string',
      licenseStatus: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuId: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(this.extendArray && typeof (this.extendArray as any).validate === 'function') {
      (this.extendArray as any).validate();
    }
    if(this.extendInfo && typeof (this.extendInfo as any).validate === 'function') {
      (this.extendInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBody extends $dara.Model {
  license?: DescribeLicenseResponseBodyLicense;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      license: 'License',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      license: DescribeLicenseResponseBodyLicense,
      requestId: 'string',
    };
  }

  validate() {
    if(this.license && typeof (this.license as any).validate === 'function') {
      (this.license as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

