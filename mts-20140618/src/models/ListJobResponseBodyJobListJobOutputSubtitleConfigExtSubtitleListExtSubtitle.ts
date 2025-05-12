// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput } from "./ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput";


export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $dara.Model {
  /**
   * @remarks
   * The character set used by the external subtitle.
   * 
   * *   Valid values: UTF-8, GBK, BIG5, and auto.
   * *   Default value: **auto**.
   * 
   * >  If this parameter is set to auto, the detected character set may not be the actual character set. We recommend that you set this parameter to another value.
   * 
   * @example
   * auto
   */
  charEnc?: string;
  /**
   * @remarks
   * The font of the hardcoded subtitles converted from external subtitles.
   * 
   * @example
   * "WenQuanYi Zen Hei", "Yuanti SC Regular", "SimSun"
   */
  fontName?: string;
  /**
   * @remarks
   * The input subtitle file.
   * 
   * *   Files in the SRT or ASS format are supported. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * *   Example: `{"Bucket":"example-bucket","Location":"oss-cn-hangzhou","Object":"example.srt"}`.
   */
  input?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
  static names(): { [key: string]: string } {
    return {
      charEnc: 'CharEnc',
      fontName: 'FontName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charEnc: 'string',
      fontName: 'string',
      input: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

