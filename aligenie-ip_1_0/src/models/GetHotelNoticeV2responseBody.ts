// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelNoticeV2ResponseBodyResult extends $dara.Model {
  content?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      hotelId: 'HotelId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      hotelId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2ResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0D0C***67DB
   */
  requestId?: string;
  result?: GetHotelNoticeV2ResponseBodyResult;
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
      result: GetHotelNoticeV2ResponseBodyResult,
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

