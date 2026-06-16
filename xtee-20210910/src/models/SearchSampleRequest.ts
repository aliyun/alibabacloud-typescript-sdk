// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name keyword provided.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of error messages returned by the API. Valid values: zh: Chinese. en: English. Default value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * INTERNET
   */
  tab?: string;
  /**
   * @remarks
   * The access type.
   * 
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  /**
   * @remarks
   * The upload end time.
   * 
   * @example
   * 2023-03-09 14:45:26
   */
  uploadTimeEnd?: string;
  /**
   * @remarks
   * The upload start time.
   * 
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

