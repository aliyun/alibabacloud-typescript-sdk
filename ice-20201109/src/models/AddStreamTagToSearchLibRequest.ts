// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStreamTagToSearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ******b48fb04483915d4f2cd8******
   */
  mediaId?: string;
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * {"startTime":1657684600793,"endTime":1657684600793,"userData":"{}"}
   */
  msgBody?: string;
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
      msgBody: 'MsgBody',
      namespace: 'Namespace',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      msgBody: 'string',
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

