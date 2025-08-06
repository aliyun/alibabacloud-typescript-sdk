// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAttachedMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the auxiliary media asset that you want to delete.
   * 
   * *   Separate multiple IDs with commas (,). You can specify up to 20 IDs.
   * *   You can obtain the ID from the response to the [CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~) operation that you call to obtain the upload URL and credential.
   * 
   * This parameter is required.
   * 
   * @example
   * 8bc8e94fe4e55abde85718****,eb186180e989dd56****
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

