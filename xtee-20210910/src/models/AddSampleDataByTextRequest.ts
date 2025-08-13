// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSampleDataByTextRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * List data.
   * 
   * @example
   * testA \\n testB
   */
  dataValue?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Sample UUID.
   * 
   * @example
   * 1806507582222226
   * _saf_sample_split_coupon_abuse_saf_sample_split_mobile_saf_sample_split_pass
   */
  sampleBatchUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      dataValue: 'dataValue',
      regId: 'regId',
      sampleBatchUuid: 'sampleBatchUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      dataValue: 'string',
      regId: 'string',
      sampleBatchUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

