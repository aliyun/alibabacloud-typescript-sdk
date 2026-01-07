// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactQueryPageListRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  appName?: string;
  /**
   * @example
   * null
   */
  orientedEcId?: string;
  /**
   * @example
   * null
   */
  orientedLeId?: string;
  /**
   * @example
   * null
   */
  orientedNbId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  privateContact?: boolean;
  /**
   * @example
   * keyword
   */
  query?: string;
  /**
   * @example
   * false
   */
  sharedContact?: boolean;
  /**
   * @example
   * false
   */
  showCompleteInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      privateContact: 'PrivateContact',
      query: 'Query',
      sharedContact: 'SharedContact',
      showCompleteInfo: 'ShowCompleteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      privateContact: 'boolean',
      query: 'string',
      sharedContact: 'boolean',
      showCompleteInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

