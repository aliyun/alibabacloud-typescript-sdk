// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the video or image.
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f*****54b6e91d24d81d4
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

