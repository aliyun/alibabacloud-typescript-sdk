// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotifyMeRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKTxxx
   */
  appTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * corpIdxxx
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
   * 2021-05-01
   */
  instanceCreateFromTimeGMT?: number;
  /**
   * @example
   * 2021-05-01
   */
  instanceCreateToTimeGMT?: number;
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
      instanceCreateFromTimeGMT: 'InstanceCreateFromTimeGMT',
      instanceCreateToTimeGMT: 'InstanceCreateToTimeGMT',
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
      instanceCreateFromTimeGMT: 'number',
      instanceCreateToTimeGMT: 'number',
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

