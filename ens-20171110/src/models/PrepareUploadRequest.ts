// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepareUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The specified IP address. This parameter is applicable to scenarios where the user IP address is inconsistent with the operation calling IP address, such as the scenario where the server obtains authorization and sends the authorization to the client.
   * 
   * @example
   * 180.166.XX.XXX
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

