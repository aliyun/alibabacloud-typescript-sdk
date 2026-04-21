// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OmniSearchResult extends $dara.Model {
  /**
   * @example
   * 35E5608A-A737-2038-AFB6-D9D34C6BFD9E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
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

