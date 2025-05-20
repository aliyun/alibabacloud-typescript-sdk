// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileDownloadCallbackInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccp-bj1-bj-1234
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  object?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      object: 'object',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      object: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

