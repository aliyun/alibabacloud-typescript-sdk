// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWaitingRoomPreviewPageRequest extends $dara.Model {
  /**
   * @remarks
   * The custom waiting room page content. This parameter is required when the waiting room type is custom. The content must be URL-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello%20world!
   */
  customPageHtml?: string;
  static names(): { [key: string]: string } {
    return {
      customPageHtml: 'CustomPageHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPageHtml: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

