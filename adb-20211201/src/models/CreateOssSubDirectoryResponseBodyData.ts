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

