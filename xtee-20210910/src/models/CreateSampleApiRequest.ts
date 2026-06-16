// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleApiRequest extends $dara.Model {
  /**
   * @remarks
   * Same as the request parameter.
   * 
   * @example
   * ip/accountID
   */
  dataType?: string;
  /**
   * @remarks
   * The specific data value.
   * 
   * @example
   * 同参数
   */
  dataValue?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regId?: string;
  /**
   * @remarks
   * The sample batch type.
   * 
   * @example
   * 白名单/黑名单/混合
   */
  sampleBatchType?: string;
  /**
   * @remarks
   * The list of services.
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

