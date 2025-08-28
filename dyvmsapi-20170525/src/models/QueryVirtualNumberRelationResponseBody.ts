// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVirtualNumberRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value 200 indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of associations between virtual numbers and real numbers. The following fields are returned:
   * 
   * *   **relatedNum**: the real number.
   * *   **createTime**: the time when the number was activated.
   * *   **pageNo**: the page number.
   * *   **pageSize**: the number of entries per page.
   * *   **total**: the total number of entries returned.
   * 
   * @example
   * {"data":[{"relatedNum":"1705559****","createTime":"2021-03-26 12:34:08"}],"pageSize":20,"total":1,"pageNo":1}
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FAD5988-B483-48A4-B251-6E8470A67371
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

