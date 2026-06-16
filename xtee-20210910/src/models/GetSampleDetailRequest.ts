// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSampleDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language of error messages returned by the API. Valid values: zh: Chinese; en: English. The default value is en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The sample ID.
   * 
   * @example
   * 1
   */
  sampleId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      sampleId: 'SampleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      sampleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

