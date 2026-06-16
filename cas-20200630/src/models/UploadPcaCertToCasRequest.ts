// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPcaCertToCasRequest extends $dara.Model {
  /**
   * @remarks
   * The list of primary key identifiers to synchronize to Certificate Service. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 59425,59426
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

