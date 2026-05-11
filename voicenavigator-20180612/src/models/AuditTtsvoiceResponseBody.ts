// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditTTSVoiceResponseBody extends $dara.Model {
  /**
   * @example
   * http://voicenavigator-cn-shanghai.oss-cn-shanghai.aliyuncs.com/exported_files/2020-02-20/ttsConfig-1582188148528-abd8e407de0a49b381bb591bd91fc073.wav?Expires=1582188208&OSSAccessKeyId=LTAIppQY5rofntVJ&Signature=FaBassElzqGEB0H2TvTKPJsOJHs%3D
   */
  auditionUrl?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auditionUrl: 'AuditionUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditionUrl: 'string',
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

