// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitUploadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to purge resources in the corresponding directory when the back-to-origin content is inconsistent with the origin server resources. Default value: false. This parameter is valid only for purge tasks.
   * 
   * - **true**: Purges all resources in the corresponding directory.
   * - **false**: Purges only the changed resources in the corresponding directory.
   */
  force?: boolean;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The file upload task ID, which is generated when you call the [UploadTask](~~UploadTask~~) operation.
   * 
   * @example
   * 1593805857882113
   */
  uploadId?: number;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      siteId: 'SiteId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      siteId: 'number',
      uploadId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

