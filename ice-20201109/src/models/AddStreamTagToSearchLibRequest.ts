// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStreamTagToSearchLibRequest extends $dara.Model {
  /**
   * @example
   * ******b48fb04483915d4f2cd8******
   */
  mediaId?: string;
  /**
   * @example
   * {"startTime":1657684600793,"endTime":1657684600793,"userData":"{}"}
   */
  msgBody?: string;
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

