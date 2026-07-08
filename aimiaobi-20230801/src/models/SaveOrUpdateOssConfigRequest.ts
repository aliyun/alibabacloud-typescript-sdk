// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOrUpdateOssConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * xxx
   */
  bucketName?: string;
  /**
   * @remarks
   * The endpoint of OSS.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      endPoint: 'EndPoint',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endPoint: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

