// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBlacklistCallTaggingsResponseBodyData } from "./ListBlacklistCallTaggingsResponseBodyData";


export class ListBlacklistCallTaggingsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListBlacklistCallTaggingsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 032C73C4-3A6F-4502-872B-4F5B41161C6E
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
      data: { 'type': 'array', 'itemType': ListBlacklistCallTaggingsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

