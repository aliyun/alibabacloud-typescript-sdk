// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddCustomQAV2ResponseBodyResult extends $dara.Model {
  answers?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  createTime?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  keyWords?: string;
  /**
   * @example
   * 8xxx9
   */
  lastOperator?: string;
  majorQuestion?: string;
  /**
   * @remarks
   * qaID
   * 
   * @example
   * 1
   */
  qaId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  supplementaryQuestion?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      createTime: 'CreateTime',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      lastOperator: 'LastOperator',
      majorQuestion: 'MajorQuestion',
      qaId: 'QaId',
      status: 'Status',
      supplementaryQuestion: 'SupplementaryQuestion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      createTime: 'string',
      hotelId: 'string',
      keyWords: 'string',
      lastOperator: 'string',
      majorQuestion: 'string',
      qaId: 'string',
      status: 'number',
      supplementaryQuestion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2ResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  result?: AddCustomQAV2ResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: AddCustomQAV2ResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

