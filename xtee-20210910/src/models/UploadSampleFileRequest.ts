// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSampleFileRequest extends $dara.Model {
  /**
   * @example
   * icekredit_202312_23a_1764640368_6908.csv
   */
  fileName?: string;
  /**
   * @example
   * saf/cpoc/34cd7959590ef568086035b956210495/1761186218068_XN_test JR142_1023_204794.csv
   */
  fileUrl?: string;
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
   * INTERNET
   */
  tab?: string;
  /**
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      lang: 'Lang',
      regId: 'RegId',
      tab: 'Tab',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      lang: 'string',
      regId: 'string',
      tab: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

