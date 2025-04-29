// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyServiceConfigOssConfig extends $dara.Model {
  /**
   * @remarks
   * The operation options on OSS. Valid values:
   * 
   * *   GetObject
   * *   PostObject
   * *   DeleteObject
   * *   PutObject
   * *   HeadObject
   * *   GetObjectMeta
   * *   AppendObject
   * 
   * @example
   * GetObject
   */
  action?: string;
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * cbg-db
   */
  bucketName?: string;
  /**
   * @remarks
   * The stored object or folder path.
   * 
   * @example
   * /folder/test.json
   */
  key?: string;
  /**
   * @remarks
   * The ID of the region where the OSS instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      bucketName: 'BucketName',
      key: 'Key',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      bucketName: 'string',
      key: 'string',
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

