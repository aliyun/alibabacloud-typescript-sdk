// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanOssObjectV1Request extends $dara.Model {
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
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The objects in the OSS bucket that you want to scan. You can specify up to 50 objects at a time.
   * 
   * This parameter is required.
   */
  objectKeyList?: string[];
  /**
   * @remarks
   * The ID of the region in which the OSS bucket is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific classification template.
   * 
   * >  You can call the **DescribeCategoryTemplateList** operation to query industry-specific classification templates. If you do not specify this parameter, the system automatically uses the main template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      lang: 'Lang',
      objectKeyList: 'ObjectKeyList',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      lang: 'string',
      objectKeyList: { 'type': 'array', 'itemType': 'string' },
      serviceRegionId: 'string',
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectKeyList)) {
      $dara.Model.validateArray(this.objectKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

