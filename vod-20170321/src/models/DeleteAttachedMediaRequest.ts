// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAttachedMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The auxiliary media asset IDs.
   * - Separate multiple IDs with commas (,). A maximum of 20 IDs are supported.
   * - The IDs are returned after you call the [CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~) operation to obtain the upload URL and credential for auxiliary media assets.
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

