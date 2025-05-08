// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The type of the purge or prefetch task. Valid values:
   * 
   * *   **file** (default): purges the cache by file.
   * *   **preload**: prefetches the file.
   * *   **directory**: purges the cache by directory.
   * *   **ignoreParams**: purges the cache by URL with specified parameters ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * The name of the upload task.
   * 
   * This parameter is required.
   * 
   * @example
   * purge_task_2024_11_11
   */
  uploadTaskName?: string;
  /**
   * @remarks
   * The OSS URL of the file that contains resources to be purged or prefetched.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxxxx.oss-cn-shenzhen.aliyuncs.com/test_oss_file?Expires=1708659191&OSSAccessKeyId=**********&Signature=**********
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      type: 'Type',
      uploadTaskName: 'UploadTaskName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      type: 'string',
      uploadTaskName: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

