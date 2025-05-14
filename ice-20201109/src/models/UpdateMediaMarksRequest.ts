// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaMarksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 53afdf003a******6a16b5feac6402
   */
  mediaId?: string;
  /**
   * @remarks
   * The marks of the media asset.
   * 
   * This parameter is required.
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

