// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediasRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the physical files at the same time.
   * 
   * @example
   * false
   */
  deletePhysicalFiles?: boolean;
  /**
   * @remarks
   * Not supported.
   */
  inputURLs?: string;
  /**
   * @remarks
   * The media asset IDs, separated by commas. Invalid IDs are added to the IgnoredList.
   * 
   * @example
   * ******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      deletePhysicalFiles: 'DeletePhysicalFiles',
      inputURLs: 'InputURLs',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePhysicalFiles: 'boolean',
      inputURLs: 'string',
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

