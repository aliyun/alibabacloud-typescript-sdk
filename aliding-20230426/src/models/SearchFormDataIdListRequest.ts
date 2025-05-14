// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFormDataIdListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0xxx
   */
  appType?: string;
  /**
   * @example
   * yyyy-MM-dd
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * yyyy-MM-dd
   */
  createToTimeGMT?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-xxxxx
   */
  formUuid?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * yyyy-MM-dd
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * yyyy-MM-dd
   */
  modifiedToTimeGMT?: string;
  /**
   * @example
   * 012345
   */
  originatorId?: string;
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
   * {}
   */
  searchFieldJson?: string;
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
      formUuid: 'FormUuid',
      language: 'Language',
      modifiedFromTimeGMT: 'ModifiedFromTimeGMT',
      modifiedToTimeGMT: 'ModifiedToTimeGMT',
      originatorId: 'OriginatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchFieldJson: 'SearchFieldJson',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      originatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchFieldJson: 'string',
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

