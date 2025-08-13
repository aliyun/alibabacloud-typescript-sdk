// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportFieldRequest extends $dara.Model {
  /**
   * @remarks
   * Attachment download URL.
   * 
   * This parameter is required.
   * 
   * @example
   * filed/data/text.csv
   */
  fileUrl?: string;
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      lang: 'Lang',
      regId: 'RegId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      lang: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

