// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillHubConfigRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. This value must be unique for each request. **ClientToken** must contain only ASCII characters and be no longer than 64 characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * tidb-test-a
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket. For more information, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ossBucketName: 'OssBucketName',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ossBucketName: 'string',
      ossRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

