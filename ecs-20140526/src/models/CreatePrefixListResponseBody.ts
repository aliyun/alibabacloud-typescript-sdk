// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrefixListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 38793DB8-A4B2-4AEC-BFD3-111234E9188D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prefixListId: 'PrefixListId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixListId: 'string',
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

