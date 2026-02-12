// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTraceQueryByMsgIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the query task. You can call the [OnsTraceGetResult](https://help.aliyun.com/document_detail/59832.html) operation to query the details of the message trace based on the task ID.
   * 
   * @example
   * 272967562652883649157096685****
   */
  queryId?: string;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * B93332A3-160D-404F-880F-1F8736D1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
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

