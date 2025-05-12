// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $dara.Model {
  /**
   * @remarks
   * The character set used by the external subtitle.
   * 
   * *   Valid values: **UTF-8**, **GBK**, **BIG5**, and **auto**.
   * *   Default value: **auto**.
   * 
   * >  If this parameter is set to **auto**, the detected character set may not be the actual character set. We recommend that you set this parameter to another value.
   * 
   * @example
   * UTF-8
   */
  charEnc?: string;
  /**
   * @remarks
   * The font of the hardcoded subtitles converted from external subtitles. Default value: **SimSun**. For more information, see [Fonts](https://help.aliyun.com/document_detail/59950.html).
   * 
   * @example
   * "WenQuanYi Zen Hei", "Yuanti SC Regular", "SimSun"
   */
  fontName?: string;
  /**
   * @remarks
   * The OSS object that is used as the external subtitle. The value is a JSON object. Files in the **SRT** or **ASS** format are supported.
   */
  input?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
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
      input: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
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

