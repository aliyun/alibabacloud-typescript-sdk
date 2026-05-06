// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSampleRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  keyword?: string;
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
   * INTERNET
   */
  tab?: string;
  /**
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  /**
   * @example
   * 2023-03-09 14:45:26
   */
  uploadTimeEnd?: string;
  /**
   * @example
   * 2023-02-09 14:12:12
   */
  uploadTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      regId: 'RegId',
      tab: 'Tab',
      type: 'Type',
      uploadTimeEnd: 'UploadTimeEnd',
      uploadTimeStart: 'UploadTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      regId: 'string',
      tab: 'string',
      type: 'string',
      uploadTimeEnd: 'string',
      uploadTimeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

