// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaMarksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 53afdf003a2171ed9c6a16b5feac6402
   */
  mediaId?: string;
  /**
   * @remarks
   * The mark information. The value must be a JSONArray.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *  {
   *  "MarkStartTime": "12.1",
   *  "MarkEndTime": "12.2",
   *  "MarkTag": "tag-1",
   *  "MarkContent": "content-1",
   *  "MarkStatus": "a"
   *  },{
   *  "MarkStartTime": "12.3",
   *  "MarkEndTime": "12.4",
   *  "MarkTag": "tag-2",
   *  "MarkContent": "content-2",
   *  "MarkStatus": "online"
   *  }
   * ]
   */
  mediaMarks?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaMarks: 'MediaMarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaMarks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

