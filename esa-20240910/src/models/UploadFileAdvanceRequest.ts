// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadFileAdvanceRequest extends $dara.Model {
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
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      type: 'Type',
      uploadTaskName: 'UploadTaskName',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      type: 'string',
      uploadTaskName: 'string',
      urlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

