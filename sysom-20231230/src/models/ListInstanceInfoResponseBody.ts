// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information key.
   * 
   * @example
   * sysom
   */
  infoKey?: string;
  /**
   * @remarks
   * The information type.
   * 
   * @example
   * instance_tag
   */
  infoType?: string;
  /**
   * @remarks
   * The information value.
   * 
   * @example
   * diagnosis
   */
  infoValue?: string;
  static names(): { [key: string]: string } {
    return {
      infoKey: 'infoKey',
      infoType: 'infoType',
      infoValue: 'infoValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoKey: 'string',
      infoType: 'string',
      infoValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstanceInfoResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next request.
   * 
   * @example
   * U+w1wv2R4ZWR5oZLXD0+Dp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstanceInfoResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

