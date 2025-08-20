// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssSubDirectoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value on the client.
   * 
   * @example
   * 1
   */
  clientCRC?: number;
  /**
   * @remarks
   * The tag of the OSS path.
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
   * The CRC-64 value on the OSS bucket.
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
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, a **success** message is returned.
   * *   If the request failed, an error message is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

