// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterYikeAssetMediaInfoResponseBody extends $dara.Model {
  /**
   * @example
   * ****c469e944b5a856828dc2****
   */
  mediaId?: string;
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
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

