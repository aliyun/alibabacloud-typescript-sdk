// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreOssImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-sddp
   */
  bucket?: string;
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
   * aliyun_dsc_desensitization/dir1/test.png
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
  /**
   * @example
   * aliyun_dsc_original /dir1/test.png
   */
  targetObjectKey?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      lang: 'Lang',
      objectKey: 'ObjectKey',
      serviceRegionId: 'ServiceRegionId',
      targetObjectKey: 'TargetObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      lang: 'string',
      objectKey: 'string',
      serviceRegionId: 'string',
      targetObjectKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

