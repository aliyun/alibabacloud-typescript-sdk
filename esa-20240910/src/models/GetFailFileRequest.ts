// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFailFileRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID. You can obtain this value by calling the [ListSites](~~ListSites~~) operation.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The ID of the file upload task.
   * 
   * @example
   * 1593805857882113
   */
  uploadId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

