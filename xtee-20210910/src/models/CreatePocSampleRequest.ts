// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePocSampleRequest extends $dara.Model {
  /**
   * @example
   * P4911_2707.csv
   */
  fileName?: string;
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
   * cs-pub
   */
  remark?: string;
  /**
   * @example
   * SampleNameTest
   */
  sampleName?: string;
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
      remark: 'Remark',
      sampleName: 'SampleName',
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
      remark: 'string',
      sampleName: 'string',
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

