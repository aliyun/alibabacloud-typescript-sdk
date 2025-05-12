// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput } from "./QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput";


export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle extends $dara.Model {
  /**
   * @remarks
   * The character set used by the external caption.
   * 
   * *   Valid values: UTF-8, GBK, BIG5, and auto.
   * *   Default value: **auto**.
   * 
   * >  If the value of CharEnc is auto, the detected character set may not be the actual character set. We recommend that you set this parameter to another value.
   * 
   * @example
   * auto
   */
  charEnc?: string;
  /**
   * @remarks
   * The font of the hardcoded captions converted from external captions. Default value: SimSum. For more information, see [Fonts](https://help.aliyun.com/document_detail/59950.html).
   * 
   * @example
   * "WenQuanYi Zen Hei", "Yuanti SC Regular", "SimSun"
   */
  fontName?: string;
  /**
   * @remarks
   * The input caption file.
   * 
   * *   SRT and ASS files are supported. For more information, see the Input section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * *   Example: `{"Bucket":"example-bucket","Location":"oss-cn-hangzhou","Object":"example.srt"}`.
   */
  input?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput;
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
      input: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput,
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

