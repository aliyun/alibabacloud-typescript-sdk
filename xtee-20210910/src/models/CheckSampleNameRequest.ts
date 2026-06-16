// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSampleNameRequest extends $dara.Model {
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values: zh: Chinese; en: English. Default value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Sample name.
   * 
   * @example
   * SampleTest
   */
  sampleName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      sampleName: 'SampleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      sampleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

