// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskCopiesRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKxxx
   */
  appType?: string;
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
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      createFromTimeGMT: 'CreateFromTimeGMT',
      createToTimeGMT: 'CreateToTimeGMT',
      keyword: 'Keyword',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processCodes: 'ProcessCodes',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      createFromTimeGMT: 'number',
      createToTimeGMT: 'number',
      keyword: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processCodes: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

