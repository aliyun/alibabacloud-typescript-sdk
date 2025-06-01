// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNacUserCertResponseBodyDataList } from "./ListNacUserCertResponseBodyDataList";


export class ListNacUserCertResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  dataList?: ListNacUserCertResponseBodyDataList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataList: { 'type': 'array', 'itemType': ListNacUserCertResponseBodyDataList },
      message: 'string',
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

