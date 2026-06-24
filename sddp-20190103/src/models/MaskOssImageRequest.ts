// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaskOssImageRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * sddp-api-demo-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * Specifies whether to always upload the processed image.
   * 
   * If you set this to false, the image is uploaded only if it matches a masking rule.
   * 
   * If you set this to true, the processed image is always uploaded.
   * 
   * @example
   * true
   */
  isAlwaysUpload?: boolean;
  isCoverObject?: boolean;
  /**
   * @remarks
   * Specifies whether you can restore the original image from the masked version.
   * 
   * @example
   * true
   */
  isSupportRestore?: boolean;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * A comma-separated list of masking rule IDs.
   * 
   * The following rule IDs correspond to the listed sensitive data types:
   * 
   * 3000: Images that contain ID card information (Chinese mainland)
   * 
   * 3009: Images that contain license plate information (Chinese mainland)
   * 
   * 3002: Images that contain faces
   * 
   * 1002: Names (Simplified Chinese)
   * 
   * 1003: Addresses (Chinese mainland)
   * 
   * 4003: Unified Social Credit Code
   * 
   * 63009: Images that contain eyes
   * 
   * This parameter is required.
   * 
   * @example
   * 3000,3002
   */
  maskRuleIdList?: string;
  /**
   * @remarks
   * The full key of the object stored in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * dir1/test.png
   */
  objectKey?: string;
  /**
   * @remarks
   * The region where the bucket is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      isAlwaysUpload: 'IsAlwaysUpload',
      isCoverObject: 'IsCoverObject',
      isSupportRestore: 'IsSupportRestore',
      lang: 'Lang',
      maskRuleIdList: 'MaskRuleIdList',
      objectKey: 'ObjectKey',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      isAlwaysUpload: 'boolean',
      isCoverObject: 'boolean',
      isSupportRestore: 'boolean',
      lang: 'string',
      maskRuleIdList: 'string',
      objectKey: 'string',
      serviceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

