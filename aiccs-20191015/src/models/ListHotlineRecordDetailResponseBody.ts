// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotlineRecordDetailResponseBodyResultData } from "./ListHotlineRecordDetailResponseBodyResultData";


export class ListHotlineRecordDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  resultData?: ListHotlineRecordDetailResponseBodyResultData;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultData: ListHotlineRecordDetailResponseBodyResultData,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultData && typeof (this.resultData as any).validate === 'function') {
      (this.resultData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

