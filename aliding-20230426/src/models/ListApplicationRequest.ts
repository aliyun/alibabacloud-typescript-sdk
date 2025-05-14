// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationRequest extends $dara.Model {
  /**
   * @example
   * createdByMe
   */
  appFilter?: string;
  /**
   * @example
   * keyword
   */
  appNameSearchKeyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * corpid
   */
  corpId?: string;
  /**
   * @example
   * keyword
   */
  pageNumber?: number;
  /**
   * @example
   * keyword
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * keyword
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appFilter: 'AppFilter',
      appNameSearchKeyword: 'AppNameSearchKeyword',
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appFilter: 'string',
      appNameSearchKeyword: 'string',
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

