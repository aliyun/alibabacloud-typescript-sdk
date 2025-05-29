// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductPageResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 100
   */
  activeLicenseCount?: number;
  /**
   * @example
   * zcrzbqrF29pkgXukLaQ+6jGsohQiPhdOuIrUSVSvNO5oDntQdM76mNXj+AJ2i7eP
   */
  apiKey?: string;
  /**
   * @example
   * 2024-03-05 06:24:27
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 1000
   */
  licenseCount?: number;
  /**
   * @example
   * 100
   */
  maxQps?: number;
  /**
   * @example
   * nnjNQQv3ZjyYE7H4
   */
  productKey?: string;
  productName?: string;
  /**
   * @example
   * 3dc95cac8272b86a5d10de7768d8fc41
   */
  productSecret?: string;
  /**
   * @example
   * 383756559581697
   */
  tenantId?: string;
  /**
   * @example
   * 100000
   */
  tokenCount?: number;
  /**
   * @example
   * 2024-03-05 06:24:27
   */
  updateTime?: string;
  /**
   * @example
   * 10000
   */
  usedToken?: number;
  /**
   * @example
   * 359687
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      activeLicenseCount: 'activeLicenseCount',
      apiKey: 'apiKey',
      createTime: 'createTime',
      description: 'description',
      licenseCount: 'licenseCount',
      maxQps: 'maxQps',
      productKey: 'productKey',
      productName: 'productName',
      productSecret: 'productSecret',
      tenantId: 'tenantId',
      tokenCount: 'tokenCount',
      updateTime: 'updateTime',
      usedToken: 'usedToken',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeLicenseCount: 'number',
      apiKey: 'string',
      createTime: 'string',
      description: 'string',
      licenseCount: 'number',
      maxQps: 'number',
      productKey: 'string',
      productName: 'string',
      productSecret: 'string',
      tenantId: 'string',
      tokenCount: 'number',
      updateTime: 'string',
      usedToken: 'number',
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

