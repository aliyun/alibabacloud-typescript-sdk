// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetXConfigResponseBodyDataSequenceCalls extends $dara.Model {
  /**
   * @remarks
   * 顺振提示音放音编号，格式如callNoPlayCode
   * 
   * @example
   * 示例值示例值示例值
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * 顺振被叫号码
   * 
   * @example
   * 示例值示例值示例值
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * 接通后主被叫放音编号，格式如calledPlayCode
   * 
   * @example
   * 示例值示例值示例值
   */
  sequenceCalledPlayCode?: string;
  static names(): { [key: string]: string } {
    return {
      sequenceCallNoPlayCode: 'SequenceCallNoPlayCode',
      sequenceCalledNo: 'SequenceCalledNo',
      sequenceCalledPlayCode: 'SequenceCalledPlayCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sequenceCallNoPlayCode: 'string',
      sequenceCalledNo: 'string',
      sequenceCalledPlayCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

