// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFormDatasRequest extends $dara.Model {
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
   * @example
   * 20
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  dynamicOrder?: string;
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
   * en_US
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
  pageSize?: number;
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
      currentPage: 'CurrentPage',
      dynamicOrder: 'DynamicOrder',
      formUuid: 'FormUuid',
      language: 'Language',
      modifiedFromTimeGMT: 'ModifiedFromTimeGMT',
      modifiedToTimeGMT: 'ModifiedToTimeGMT',
      originatorId: 'OriginatorId',
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
      currentPage: 'number',
      dynamicOrder: 'string',
      formUuid: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      originatorId: 'string',
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

