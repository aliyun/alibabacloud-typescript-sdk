// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTemplateResponseBodyTemplateListTemplateContainer extends $dara.Model {
  /**
   * @remarks
   * The format of the container. Valid values:
   * 
   * *   **flv**
   * *   **mp4**
   * *   **ts**
   * *   **m3u8**
   * *   **gif**
   * *   **mp3**
   * *   **ogg**
   * *   **flac**
   * 
   * @example
   * mp4
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

