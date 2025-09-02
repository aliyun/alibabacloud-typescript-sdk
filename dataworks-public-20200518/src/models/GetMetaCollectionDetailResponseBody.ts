// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Collection } from "./Collection";


export class GetMetaCollectionDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the collection.
   */
  collection?: Collection;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 9999
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * album.xxxx does not exist.
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
   * 0000-ABCD-E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true
   * 
   * false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: Collection,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.collection && typeof (this.collection as any).validate === 'function') {
      (this.collection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

