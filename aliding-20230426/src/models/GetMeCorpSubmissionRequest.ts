// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeCorpSubmissionRequest extends $dara.Model {
  /**
   * @example
   * [\\"APP_xxx\\",\\"APP_xxx\\"]
   */
  appTypes?: string;
  /**
   * @example
   * ding123
   */
  corpId?: string;
  /**
   * @example
   * 2021-05-01
   */
  createFromTimeGMT?: number;
  /**
   * @example
   * 2021-05-01
   */
  createToTimeGMT?: number;
  /**
   * @example
   * {}
   */
  keyword?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * [\\"xx\\",\\"xxx\\"]
   */
  processCodes?: string;
  /**
   * @example
   * JHASD123HAXXX
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appTypes: 'AppTypes',
      corpId: 'CorpId',
      createFromTimeGMT: 'CreateFromTimeGMT',
      createToTimeGMT: 'CreateToTimeGMT',
      keyword: 'Keyword',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processCodes: 'ProcessCodes',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTypes: 'string',
      corpId: 'string',
      createFromTimeGMT: 'number',
      createToTimeGMT: 'number',
      keyword: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processCodes: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

