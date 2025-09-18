// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseStreamToSearchLibRequest extends $dara.Model {
  /**
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @example
   * Stream_xxx
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      namespace: 'Namespace',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      namespace: 'string',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

