// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataDownloadURLResponseBodyData } from "./DescribeDataDownloadUrlresponseBodyData";


export class DescribeDataDownloadURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The download URLs of data files.
   */
  data?: DescribeDataDownloadURLResponseBodyData;
  /**
   * @remarks
   * The response message. Success is returned for a successful request.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeDataDownloadURLResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

