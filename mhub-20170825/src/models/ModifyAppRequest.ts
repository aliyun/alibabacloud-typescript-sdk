// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  appKey?: string;
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
  industryId?: number;
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bundleId: 'BundleId',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      bundleId: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      name: 'string',
      packageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

