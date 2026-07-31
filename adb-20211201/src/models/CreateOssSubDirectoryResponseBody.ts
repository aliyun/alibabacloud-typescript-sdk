// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssSubDirectoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client CRC check value.
   * 
   * @example
   * 1
   */
  clientCRC?: number;
  /**
   * @remarks
   * The ETag of the OSS path.
   * 
   * @example
   * 1
   */
  ETag?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A0DE2E0-A37B-5EE4-9136-C4C473714802
   */
  requestId?: string;
  /**
   * @remarks
   * The CRC-64 value of the Alibaba Cloud OSS bucket.
   * 
   * @example
   * 1
   */
  serverCRC?: number;
  static names(): { [key: string]: string } {
    return {
      clientCRC: 'ClientCRC',
      ETag: 'ETag',
      requestId: 'RequestId',
      serverCRC: 'ServerCRC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientCRC: 'number',
      ETag: 'string',
      requestId: 'string',
      serverCRC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssSubDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateOssSubDirectoryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * - If the request was successful, **Success** is returned.                                
   * - If the request failed, a specific error code is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A0DE2E0-A37B-5EE4-9136-C4C473714802
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateOssSubDirectoryResponseBodyData,
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

