// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaskOssImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sddp-api-demo-bucket
   */
  bucketName?: string;
  /**
   * @example
   * true
   */
  isAlwaysUpload?: boolean;
  isSupportRestore?: boolean;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3000,3002
   */
  maskRuleIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dir1/test.png
   */
  objectKey?: string;
  /**
   * @remarks
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

