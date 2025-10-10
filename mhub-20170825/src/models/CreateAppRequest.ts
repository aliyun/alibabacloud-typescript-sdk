// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequest extends $dara.Model {
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  productId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      packageName: 'PackageName',
      productId: 'ProductId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      encodedIcon: 'string',
      industryId: 'string',
      name: 'string',
      packageName: 'string',
      productId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

