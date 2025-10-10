// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppResponseBodyAppInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  modifyTime?: string;
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @example
   * 123456
   */
  productId?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bundleId: 'BundleId',
      createTime: 'CreateTime',
      description: 'Description',
      modifyTime: 'ModifyTime',
      name: 'Name',
      packageName: 'PackageName',
      productId: 'ProductId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      bundleId: 'string',
      createTime: 'string',
      description: 'string',
      modifyTime: 'string',
      name: 'string',
      packageName: 'string',
      productId: 'number',
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

export class CreateAppResponseBody extends $dara.Model {
  appInfo?: CreateAppResponseBodyAppInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: CreateAppResponseBodyAppInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInfo && typeof (this.appInfo as any).validate === 'function') {
      (this.appInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

