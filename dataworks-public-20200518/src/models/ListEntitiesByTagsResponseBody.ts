// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Entity } from "./Entity";


export class ListEntitiesByTagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The entities.
   */
  entityList?: Entity[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 12345
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      entityList: 'EntityList',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityList: { 'type': 'array', 'itemType': Entity },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityList)) {
      $dara.Model.validateArray(this.entityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesByTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListEntitiesByTagsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 101011005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid.Entity.EntityTypeNotSupported
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true\\
   * false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEntitiesByTagsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

