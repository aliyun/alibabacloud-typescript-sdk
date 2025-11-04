// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHotwordLibraryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the hotword library.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  hotwordLibraryId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 13cbb83e-043c-4728-ac35-*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hotwordLibraryId: 'HotwordLibraryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotwordLibraryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

