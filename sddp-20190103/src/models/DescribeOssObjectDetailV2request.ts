// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailV2Request extends $dara.Model {
  /**
   * @remarks
   * Bucket name.
   * 
   * @example
   * sddp-api-scan-demo
   */
  bucketName?: string;
  /**
   * @remarks
   * The unique identifier ID of the OSS storage object.
   * 
   * > Call the [DescribeOssObjects](https://help.aliyun.com/document_detail/410152.html) interface to get the ID.
   * 
   * @example
   * 12300
   */
  id?: string;
  /**
   * @remarks
   * Sets the language type for request and response messages. The default value is **zh_cn**. Values:
   * 
   * - **zh_cn**: Simplified Chinese
   * - **en_us**: English (US)
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The full file name of the file stored on OSS.
   * 
   * @example
   * dir1/test.png
   */
  objectKey?: string;
  /**
   * @remarks
   * Service region ID, i.e., the region ID where the Bucket is located.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * Industry template ID.
   * > You can obtain the industry template ID by calling the [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html) interface.
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

