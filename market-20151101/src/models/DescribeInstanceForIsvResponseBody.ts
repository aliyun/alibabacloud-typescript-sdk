// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceForIsvResponseBodyRelationalData extends $dara.Model {
  /**
   * @example
   * STARTED
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceForIsvResponseBody extends $dara.Model {
  activeAddress?: string;
  appJson?: string;
  autoRenewal?: string;
  /**
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @example
   * {"package_version":"yuncode000111"}
   */
  componentJson?: string;
  /**
   * @example
   * 1570634018000
   */
  createdOn?: number;
  /**
   * @example
   * 1602259200000
   */
  endOn?: number;
  extendJson?: string;
  hostJson?: string;
  imageJson?: string;
  /**
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isTrial?: boolean;
  licenseCode?: string;
  /**
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj00**11
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * APP
   */
  productType?: string;
  relationalData?: DescribeInstanceForIsvResponseBodyRelationalData;
  /**
   * @example
   * 6EF60BEC-****-****-****-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * OPENED
   */
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddress: 'ActiveAddress',
      appJson: 'AppJson',
      autoRenewal: 'AutoRenewal',
      beganOn: 'BeganOn',
      componentJson: 'ComponentJson',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      imageJson: 'ImageJson',
      instanceId: 'InstanceId',
      isTrial: 'IsTrial',
      licenseCode: 'LicenseCode',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      relationalData: 'RelationalData',
      requestId: 'RequestId',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddress: 'string',
      appJson: 'string',
      autoRenewal: 'string',
      beganOn: 'number',
      componentJson: 'string',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      imageJson: 'string',
      instanceId: 'number',
      isTrial: 'boolean',
      licenseCode: 'string',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeInstanceForIsvResponseBodyRelationalData,
      requestId: 'string',
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(this.relationalData && typeof (this.relationalData as any).validate === 'function') {
      (this.relationalData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

