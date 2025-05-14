// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCorpTasksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKxxx
   */
  appTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * corpId
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
   * keyword
   */
  keyword?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * ["xx","xxx"]
   */
  processCodes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
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

