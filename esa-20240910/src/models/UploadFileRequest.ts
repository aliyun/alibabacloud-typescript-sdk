// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadTaskName?: string;
  /**
   * @remarks
   * This parameter is required.
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

