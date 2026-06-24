// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailV2Request extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * sddp-api-scan-demo
   */
  bucketName?: string;
  /**
   * @remarks
   * The unique ID of the OSS object.
   * 
   * > Call the [DescribeOssObjects](https://help.aliyun.com/document_detail/410152.html) operation to obtain the ID.
   * 
   * @example
   * 12300
   */
  id?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **en_us**. Valid values:
   * 
   * - **en_us**: Simplified Chinese
   * 
   * - **en_us**: English (US)
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The full name of the object stored in OSS.
   * 
   * @example
   * dir1/test.png
   */
  objectKey?: string;
  /**
   * @remarks
   * The ID of the region where the service is enabled. This is also the region where the bucket is located.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific template.
   * 
   * > Call the [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html) operation to obtain the ID of the industry-specific template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      id: 'Id',
      lang: 'Lang',
      objectKey: 'ObjectKey',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      id: 'string',
      lang: 'string',
      objectKey: 'string',
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

