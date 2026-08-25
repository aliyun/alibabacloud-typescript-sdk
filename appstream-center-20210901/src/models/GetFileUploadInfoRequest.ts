// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileUploadInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The file type. Currently supported values: BrowserBookmarks and BrowserRestrictionUrls.
   * 
   * This parameter is required.
   * 
   * @example
   * BrowserBookmarks
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

