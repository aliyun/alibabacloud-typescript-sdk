// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputCodeLocation extends $dara.Model {
  /**
   * @remarks
   * The CRC-64 value of the function code package. If checksum is provided, Function Compute checks whether the checksum of the code package is the same as that provided.
   * 
   * @example
   * 2825179536350****
   */
  checksum?: string;
  /**
   * @remarks
   * The name of the OSS bucket where the ZIP package of the function code is stored.
   * 
   * @example
   * demo-bucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The name of the OSS object where the ZIP package of the function code is stored.
   * 
   * @example
   * demo-object
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The ZIP package of the function code that is encoded in Base64 format.
   * 
   * @example
   * UEsDBAoAAAAAANF
   */
  zipFile?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'checksum',
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      zipFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

