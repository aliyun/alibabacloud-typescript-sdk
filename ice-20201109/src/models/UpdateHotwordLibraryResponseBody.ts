// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotwordLibraryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * *3B-0E1A-586A-AC29-742247*
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the hotword library.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

