// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetReportResponseBodyDatas } from "./GetReportResponseBodyDatas";


export class GetReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data Details.
   */
  datas?: GetReportResponseBodyDatas[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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
      datas: { 'type': 'array', 'itemType': GetReportResponseBodyDatas },
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

