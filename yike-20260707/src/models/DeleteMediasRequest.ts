// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediasRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  deletePhysicalFiles?: boolean;
  inputURLs?: string;
  /**
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

