// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomCallTaggingResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * http://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-test/tagging.xlsx ?Expires=1610910578&amp;OSSAccessKeyId=****&amp;Signature=****
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

