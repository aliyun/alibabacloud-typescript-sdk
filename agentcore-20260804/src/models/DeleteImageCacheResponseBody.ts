// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageCacheResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the deletion is still in progress. A value of true indicates that the deletion is accepted but not yet complete, and a Get request returns DELETING until ImageCacheNotFound is explicitly returned. A value of false indicates that the current workspace is deleted or no longer exists.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  deletionPending?: boolean;
  /**
   * @remarks
   * The image cache ID, which matches the request. The requested ID is still returned even if the current workspace no longer exists.
   * 
   * This parameter is required.
   * 
   * @example
   * img-example
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionPending: 'deletionPending',
      imageId: 'imageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionPending: 'boolean',
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response code.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The result of deleting the image cache.
   * 
   * This parameter is required.
   */
  data?: DeleteImageCacheResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used for troubleshooting.
   * 
   * This parameter is required.
   * 
   * @example
   * req-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. This does not mean that the cache creation is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteImageCacheResponseBodyData,
      httpStatusCode: 'number',
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

