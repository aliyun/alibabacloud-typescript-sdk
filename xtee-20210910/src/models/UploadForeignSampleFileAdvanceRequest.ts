// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadForeignSampleFileAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * OSS path of the file.
   * 
   * @example
   * saf/cpoc/953c883cde33b2e21d722eb661d26375/1779172027996_自动回溯测试 2605191.csv
   */
  fileObject?: Readable;
  /**
   * @remarks
   * Set the language type for requests and received messages. The default value is **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * scenario.
   * 
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

