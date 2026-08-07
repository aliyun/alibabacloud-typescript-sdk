// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailV2Request extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * sddp-api-scan-demo
   */
  bucketName?: string;
  /**
   * @remarks
   * The unique ID of the OSS storage object.
   * 
   * > Call the [DescribeOssObjects](https://help.aliyun.com/document_detail/410152.html) operation to obtain the ID.
   * 
   * @example
   * 12300
   */
  id?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Simplified Chinese.
   * - **en_us**: English (US).
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The full name of the file stored in OSS.
   * 
   * @example
   * dir1/test.png
   */
  objectKey?: string;
  /**
   * @remarks
   * The service region ID, which is the region ID of the bucket.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The industry template ID.
   * > Call the [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html) operation to obtain the industry template ID.
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

