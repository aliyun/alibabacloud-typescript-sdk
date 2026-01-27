// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBakDataSourceStorageAccessInfoResponseBodyDataOssAccessInfo extends $dara.Model {
  /**
   * @example
   * TMP.3Kk6fNt7hhNmHrGYFkLe5WAo8qL18Hk2rKSZkDkZvrey1ksVAFgJ8Vty8isrBHaH5KUNYAwtcW8HUPzjjsNLo*******
   */
  accessKeyId?: string;
  /**
   * @example
   * 6XzFspxx5wKjuJ2QwATkxnV7fcFxR*****
   */
  accessKeySecret?: string;
  /**
   * @example
   * dbs-bakdata-test-cn-beijing-backup-oss-0-*****
   */
  bucketName?: string;
  /**
   * @example
   * 2024-07-11T05:14:44Z
   */
  expiredTime?: string;
  /**
   * @example
   * VN/2023/11/13/activity/20080101/activity-*****.tar
   */
  objectKey?: string;
  /**
   * @example
   * oss-cn-beijing.****.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * oss-cn-beijing-****.aliyuncs.com
   */
  ossInternalEndpoint?: string;
  /**
   * @example
   * cn-beijing
   */
  ossRegion?: string;
  /**
   * @example
   * 554c0098-9858-4871-9c4c-33d9d*****
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expiredTime: 'ExpiredTime',
      objectKey: 'ObjectKey',
      ossEndpoint: 'OssEndpoint',
      ossInternalEndpoint: 'OssInternalEndpoint',
      ossRegion: 'OssRegion',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expiredTime: 'string',
      objectKey: 'string',
      ossEndpoint: 'string',
      ossInternalEndpoint: 'string',
      ossRegion: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBakDataSourceStorageAccessInfoResponseBodyData extends $dara.Model {
  ossAccessInfo?: DescribeBakDataSourceStorageAccessInfoResponseBodyDataOssAccessInfo;
  /**
   * @example
   * OSS
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      ossAccessInfo: 'OssAccessInfo',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossAccessInfo: DescribeBakDataSourceStorageAccessInfoResponseBodyDataOssAccessInfo,
      storageType: 'string',
    };
  }

  validate() {
    if(this.ossAccessInfo && typeof (this.ossAccessInfo as any).validate === 'function') {
      (this.ossAccessInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBakDataSourceStorageAccessInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DescribeBakDataSourceStorageAccessInfoResponseBodyData;
  /**
   * @example
   * Request.Forbidden
   */
  errCode?: string;
  /**
   * @example
   * Have no Permissions
   */
  errMessage?: string;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * D13761C3-9971-5C02-B789-3F3CD159****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeBakDataSourceStorageAccessInfoResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

