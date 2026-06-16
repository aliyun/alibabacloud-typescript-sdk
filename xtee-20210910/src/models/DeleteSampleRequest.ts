// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSampleRequest extends $dara.Model {
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values: zh: Chinese; en: English. Default value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * ID of the sample to delete.
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

