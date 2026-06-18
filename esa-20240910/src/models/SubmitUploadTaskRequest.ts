// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitUploadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to refresh resources in the corresponding directory if the requested content is different from that on the origin server. Default value: false. This parameter takes effect for a purge task.
   * 
   * *   **true**: purges all resources in the directory.
   * *   **false**: refresh the changed resources in the directory.
   */
  force?: boolean;
  /**
   * @remarks
   * The website ID. You can call the [ListSites](~~ListSites~~) operation to obtain the ID.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The ID of the file upload task, which is generated when you call [UploadTask](~~UploadTask~~).
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

