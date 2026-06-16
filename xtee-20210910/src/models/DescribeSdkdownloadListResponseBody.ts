// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDKDownloadListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The developer.
   * 
   * @example
   * 阿里云安全-风险识别
   */
  developer?: string;
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * ANDROID
   */
  deviceType?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * https://aliyun-xxxx.oss-cn-xxx.xxx.com/sdk/xxx/10056.1/Android-AliyunDeviceEnhance-10056.1-20250611.tgz
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * E582EEB6B4BC9B5CB168AA5A7DD0EE93
   */
  md5?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * net.security.device
   */
  packageName?: string;
  /**
   * @remarks
   * The privacy policy link for the risk identification SDK.
   * 
   * @example
   * https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202111120818_92724.html
   */
  privacyLink?: string;
  /**
   * @remarks
   * The release time.
   * 
   * @example
   * 1751212800000
   */
  pushTime?: string;
  /**
   * @remarks
   * The SDK version.
   * 
   * @example
   * 1
   */
  sdkVersion?: string;
  /**
   * @remarks
   * The size.
   * 
   * @example
   * 4.12 MB
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      developer: 'developer',
      deviceType: 'deviceType',
      downloadUrl: 'downloadUrl',
      md5: 'md5',
      packageName: 'packageName',
      privacyLink: 'privacyLink',
      pushTime: 'pushTime',
      sdkVersion: 'sdkVersion',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      developer: 'string',
      deviceType: 'string',
      downloadUrl: 'string',
      md5: 'string',
      packageName: 'string',
      privacyLink: 'string',
      pushTime: 'string',
      sdkVersion: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKDownloadListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeSDKDownloadListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeSDKDownloadListResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

