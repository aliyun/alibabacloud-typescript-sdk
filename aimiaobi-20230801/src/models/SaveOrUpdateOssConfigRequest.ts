// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOrUpdateOssConfigRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  bucketName?: string;
  /**
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
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

