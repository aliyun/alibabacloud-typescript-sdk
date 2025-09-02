// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * abcde
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the metadata information about the table was updated.
   * 
   * @example
   * true
   */
  updateResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

