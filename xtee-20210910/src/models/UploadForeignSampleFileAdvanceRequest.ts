// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadForeignSampleFileAdvanceRequest extends $dara.Model {
  fileObject?: Readable;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  static names(): { [key: string]: string } {
    return {
      fileObject: 'File',
      lang: 'Lang',
      regId: 'RegId',
      tab: 'Tab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileObject: 'Readable',
      lang: 'string',
      regId: 'string',
      tab: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

