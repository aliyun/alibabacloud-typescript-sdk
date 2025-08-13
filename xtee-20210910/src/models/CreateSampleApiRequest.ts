// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleApiRequest extends $dara.Model {
  /**
   * @remarks
   * Same as input parameter
   * 
   * @example
   * ip/accountID
   */
  dataType?: string;
  /**
   * @remarks
   * Specific data value
   * 
   * @example
   * 同参数
   */
  dataValue?: string;
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
   * regionId
   * 
   * @example
   * cn-shanghai
   */
  regId?: string;
  /**
   * @remarks
   * Sample batch type
   * 
   * @example
   * 白名单/黑名单/混合
   */
  sampleBatchType?: string;
  /**
   * @remarks
   * Service list.
   * 
   * @example
   * 同参数
   */
  serviceList?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      dataValue: 'DataValue',
      lang: 'Lang',
      regId: 'RegId',
      sampleBatchType: 'SampleBatchType',
      serviceList: 'ServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      dataValue: 'string',
      lang: 'string',
      regId: 'string',
      sampleBatchType: 'string',
      serviceList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

