// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputCodeLocation extends $dara.Model {
  /**
   * @example
   * 2825179536350****
   */
  checksum?: string;
  /**
   * @example
   * demo-bucket
   */
  ossBucketName?: string;
  /**
   * @example
   * demo-object
   */
  ossObjectName?: string;
  /**
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

