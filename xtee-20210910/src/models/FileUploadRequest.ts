// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileUploadRequest extends $dara.Model {
  /**
   * @remarks
   * File name.
   * 
   * @example
   * P4911_2707.csv
   */
  fileName?: string;
  /**
   * @remarks
   * File URL
   * 
   * @example
   * https://res-v1.cupl-fdfs.com/direct/79886bdc-9855-4ff4-aa34-eb5b21cd43a7
   */
  fileUrl?: string;
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * FNNCIEA
   */
  tab?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      lang: 'Lang',
      tab: 'Tab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      lang: 'string',
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

