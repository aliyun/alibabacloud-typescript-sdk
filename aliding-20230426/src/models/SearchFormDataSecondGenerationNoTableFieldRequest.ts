// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFormDataSecondGenerationNoTableFieldRequest extends $dara.Model {
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
   * {}
   */
  orderConfigJson?: string;
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
  searchCondition?: string;
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
      modifiedFromTimeGMT: 'ModifiedFromTimeGMT',
      modifiedToTimeGMT: 'ModifiedToTimeGMT',
      orderConfigJson: 'OrderConfigJson',
      originatorId: 'OriginatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchCondition: 'SearchCondition',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      orderConfigJson: 'string',
      originatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchCondition: 'string',
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

