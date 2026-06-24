// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanOssObjectV1ShrinkRequest extends $dara.Model {
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
   * The language of the request and response. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * A list of objects to scan in the OSS bucket. You can specify up to 50 ObjectKeys.
   * 
   * This parameter is required.
   */
  objectKeyListShrink?: string;
  /**
   * @remarks
   * The ID of the region where the OSS bucket is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific template.
   * 
   * > Call **DescribeCategoryTemplateList** to get a list of templates. If you do not specify this parameter, the default active template is used for the scan.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      lang: 'Lang',
      objectKeyListShrink: 'ObjectKeyList',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      lang: 'string',
      objectKeyListShrink: 'string',
      serviceRegionId: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

