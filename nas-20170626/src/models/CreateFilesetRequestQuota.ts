// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFilesetRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The number of files of the quota. Valid values:
   * 
   * *   Minimum value: 100000.
   * *   Maximum value: 10000000000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total capacity of the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * *   Minimum value: 10737418240 (10 GiB).
   * *   Maximum value: 1073741824000 (1024000 GiB).
   * *   Step size: 1073741824 (1 GiB).
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

