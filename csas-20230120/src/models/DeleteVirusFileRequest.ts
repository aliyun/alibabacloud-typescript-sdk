// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVirusFileRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the user\\"s endpoint device where the virus file is located. The value can be up to 64 characters in length. You can obtain the value from the following operation:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): lists virus file statuses.
   * 
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The MD5 value of the virus file. The value must be a 32-character hexadecimal string. You can obtain the value from the following operation:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): lists virus file statuses.
   * 
   * This parameter is required.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  fileMd5?: string;
  /**
   * @remarks
   * The full path of the virus file on the user\\"s endpoint device. Only records with a handling action of Fail can be deleted. You can obtain the value from the following operation:
   * - [ListVirusFileStatuses](~~ListVirusFileStatuses~~): lists virus file statuses.
   * 
   * This parameter is required.
   * 
   * @example
   * C:\\Users\\Public\\Downloads\\setup.exe
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      fileMd5: 'FileMd5',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      fileMd5: 'string',
      filePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

