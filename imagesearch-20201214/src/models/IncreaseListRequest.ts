// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * bucketName
   */
  bucketName?: string;
  /**
   * @remarks
   * The batch task ID.
   * >To obtain the batch task ID, call the [batch operation](https://help.aliyun.com/document_detail/377468.html) first and retrieve the ID from the response.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, refer to [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. The instance name must be unique within the same region. Make sure you use the correct value.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the first page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The absolute path of the increment.meta file in OSS. The path must start with a forward slash (/) and must not end with a forward slash (/).
   * 
   * @example
   * /xxx/xxx
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      id: 'Id',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      id: 'number',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

