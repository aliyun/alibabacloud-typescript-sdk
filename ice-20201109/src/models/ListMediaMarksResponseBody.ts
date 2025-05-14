// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaMarksResponseBody extends $dara.Model {
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
   * The marks of the media asset, in the JSONArray format.
   */
  mediaMarks?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaMarks: 'MediaMarks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaMarks: 'string',
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

