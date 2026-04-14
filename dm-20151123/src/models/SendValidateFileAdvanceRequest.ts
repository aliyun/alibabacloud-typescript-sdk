// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SendValidateFileAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressColumn?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxxx.oss-xxx.com/file.txt
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  hasHeaderRow?: boolean;
  /**
   * @remarks
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
      fileUrlObject: 'FileUrl',
      hasHeaderRow: 'HasHeaderRow',
      removeDuplicate: 'RemoveDuplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressColumn: 'number',
      fileName: 'string',
      fileUrlObject: 'Readable',
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

