// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSampleFileRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @example
   * 1
   */
  sampleId?: number;
  /**
   * @example
   * INTERNET
   */
  tab?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      sampleId: 'SampleId',
      tab: 'Tab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      sampleId: 'number',
      tab: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

