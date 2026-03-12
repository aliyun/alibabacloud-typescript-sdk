// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The languages supported by the skills.
   * 
   * *   zh-CN: Simplified Chinese
   * *   zh-TW: Traditional Chinese
   * *   en-US: English
   * *   ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

