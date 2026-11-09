// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomAuthConnectBlackResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * GID_TEST@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * Indicates whether to allow or deny access.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The authorized permissions.
   * 
   * @example
   * CONNECT
   */
  permitAction?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      effect: 'Effect',
      permitAction: 'PermitAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      effect: 'string',
      permitAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAZ0cM0HTqLXvgm7oMHWXcvc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned results.
   */
  results?: QueryCustomAuthConnectBlackResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthConnectBlackResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful. Other status codes indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthConnectBlackResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthConnectBlackResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

