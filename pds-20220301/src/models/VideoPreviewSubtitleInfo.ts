// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoPreviewSubtitleInfo extends $dara.Model {
  /**
   * @remarks
   * The subtitle language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The status of the subtitle task.
   * 
   * Valid values:
   * 
   * *   finished
   * *   failed
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The subtitle URL.
   * 
   * @example
   * https://example.data.aliyunpds.com/lt/A05EF408DAB5D3F57C94F67658C99C406EFCA7DD/subtitle/subtitle_0.vtt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

