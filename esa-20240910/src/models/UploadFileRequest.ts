// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The type of the refresh or prefetch task. Valid values:
   * - **file** (default): file refresh.
   * - **preload**: file prefetch.
   * - **directory**: directory refresh.
   * - **ignoreParams**: parameter-ignored refresh.
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
   * The URL of the refresh or prefetch file stored in OSS. The Url parameter accepts URLs in two formats:
   * 
   * - Transit URL (recommended): automatically generated through the file transfer feature of the ESA console or SDK.
   * 
   * - OSS pre-signed HTTPS URL: generated after you upload the file to an authorized OSS bucket. The isFileTransferUrl field specifies whether to use the transit URL mode.
   * 
   * This parameter is required.
   * 
   * @example
   * https://XXXXXX.oss-cn-hangzhou.aliyuncs.com/{prefix}_{account_uid}_{hash}
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

