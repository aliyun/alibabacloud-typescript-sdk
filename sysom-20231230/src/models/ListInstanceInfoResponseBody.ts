// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * sysom
   */
  infoKey?: string;
  /**
   * @example
   * instance_tag
   */
  infoType?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: ListInstanceInfoResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

