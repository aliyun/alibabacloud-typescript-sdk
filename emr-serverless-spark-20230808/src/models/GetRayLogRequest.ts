// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayLogRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * mybucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The log file path.
   * 
   * @example
   * /w-xxxxxxx/ray/logs/rj-xxxxxxxxxx_default/xxxx/rj-xxxx_driver.log
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

