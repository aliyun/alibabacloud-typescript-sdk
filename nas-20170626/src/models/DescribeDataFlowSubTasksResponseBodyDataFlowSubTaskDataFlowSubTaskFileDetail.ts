// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail extends $dara.Model {
  /**
   * @remarks
   * The checksum. Format example: crc64:123456.
   * 
   * @example
   * crc64:850309505450944****
   */
  checksum?: string;
  /**
   * @remarks
   * The time when the file was modified. The value is a UNIX timestamp. Unit: ns.
   * 
   * @example
   * 1721167603
   */
  modifyTime?: number;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 68
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      modifyTime: 'ModifyTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      modifyTime: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

