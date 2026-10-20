// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepareUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The client\\"s IP address. Use this parameter when the client\\"s IP address differs from the IP address used to call the API. For example, a server obtains authorization and then sends it to a client.
   * 
   * @example
   * 180.166.XX.XX
   */
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      clientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

