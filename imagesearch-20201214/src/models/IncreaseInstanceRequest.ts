// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * > Only a bucket in the same region as the instance is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * bucketName
   */
  bucketName?: string;
  /**
   * @remarks
   * The callback URL of the task.
   * 
   * @example
   * http://xxxxx
   */
  callbackAddress?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, refer to [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. Make sure that you distinguish between the two.
   * 
   * This parameter is required.
   * 
   * @example
   * imagesearchName
   */
  instanceName?: string;
  /**
   * @remarks
   * The absolute path of the increment.meta file in OSS. The path must start with a forward slash (/) and must not end with a forward slash (/).
   * > Prepare the increment.meta file in advance. For more information, see [Batch operations](https://help.aliyun.com/document_detail/66580.html).
   * 
   * This parameter is required.
   * 
   * @example
   * /xxx/xxx
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      instanceName: 'InstanceName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      instanceName: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

