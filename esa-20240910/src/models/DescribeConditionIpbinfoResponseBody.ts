// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConditionIPBInfoResponseBodyDatas extends $dara.Model {
  /**
   * @remarks
   * The returned data details, including the name of the country, ISP, or region and the corresponding identifier code.
   * 
   * @example
   * [{\\"text\\":\\"安徽\\",\\"value\\":\\"340000\\"},{\\"text\\":\\"北京\\",\\"value\\":\\"110000\\"},{\\"text\\":\\"重庆\\",\\"value\\":\\"500000\\"}]
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConditionIPBInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data details.
   */
  datas?: DescribeConditionIPBInfoResponseBodyDatas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: { 'type': 'array', 'itemType': DescribeConditionIPBInfoResponseBodyDatas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datas)) {
      $dara.Model.validateArray(this.datas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

