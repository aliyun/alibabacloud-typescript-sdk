// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendValidateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The column that contains the email addresses in the file. The index starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressColumn?: number;
  /**
   * @remarks
   * The name of the file that contains the list of email addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The URL of the file that contains the list of email addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * http://xxxx.oss-xxx.com/file.txt
   */
  fileUrl?: string;
  /**
   * @remarks
   * Specifies whether the first row is a table header.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  hasHeaderRow?: boolean;
  /**
   * @remarks
   * Specifies whether to remove duplicate email addresses in the output file.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  removeDuplicate?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressColumn: 'AddressColumn',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      hasHeaderRow: 'HasHeaderRow',
      removeDuplicate: 'RemoveDuplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressColumn: 'number',
      fileName: 'string',
      fileUrl: 'string',
      hasHeaderRow: 'boolean',
      removeDuplicate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

