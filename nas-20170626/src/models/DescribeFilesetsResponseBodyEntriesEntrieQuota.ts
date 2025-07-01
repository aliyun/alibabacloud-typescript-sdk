// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesetsResponseBodyEntriesEntrieQuota extends $dara.Model {
  /**
   * @remarks
   * The file quantity quota. Valid values:
   * 
   * *   Minimum value: 10000.
   * *   Maximum value: 10000000000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The capacity quota. Unit: bytes.
   * 
   * *   Minimum value: 10737418240 (10 GiB).
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

