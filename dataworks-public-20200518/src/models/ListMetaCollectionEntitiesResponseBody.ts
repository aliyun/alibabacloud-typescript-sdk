// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Entity } from "./Entity";


export class ListMetaCollectionEntitiesResponseBodyData extends $dara.Model {
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
   * 123344
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

export class ListMetaCollectionEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListMetaCollectionEntitiesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Collection.NotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
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
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * E25887B7-579C-54A5-9C4F-83A0DE367DD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true: The request was successful.
   * 
   * false: The request failed.
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
      data: ListMetaCollectionEntitiesResponseBodyData,
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

