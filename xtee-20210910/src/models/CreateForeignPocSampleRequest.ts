// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForeignPocSampleRequest extends $dara.Model {
  file?: string;
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
   * nemo-test
   */
  remark?: string;
  /**
   * @example
   * SampleNameTest
   */
  sampleName?: string;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'File',
      lang: 'Lang',
      regId: 'RegId',
      remark: 'Remark',
      sampleName: 'SampleName',
      tab: 'Tab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: 'string',
      lang: 'string',
      regId: 'string',
      remark: 'string',
      sampleName: 'string',
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

