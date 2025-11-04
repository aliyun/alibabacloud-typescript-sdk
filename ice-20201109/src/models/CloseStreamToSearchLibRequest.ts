// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseStreamToSearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @remarks
   * The search library.
   * 
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

