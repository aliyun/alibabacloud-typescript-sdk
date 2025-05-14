// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSheetResponseBody extends $dara.Model {
  /**
   * @example
   * stxxxx
   */
  id?: string;
  /**
   * @example
   * Sheet1
   */
  name?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * visible
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      requestId: 'requestId',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      requestId: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

