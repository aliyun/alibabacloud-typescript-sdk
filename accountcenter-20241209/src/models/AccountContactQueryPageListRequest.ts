// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactQueryPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * xxx
   */
  appName?: string;
  /**
   * @remarks
   * The entity ID of the cross-enterprise management object.
   * 
   * @example
   * null
   */
  orientedEcId?: string;
  /**
   * @remarks
   * The ID of the enterprise currently switched to.
   * 
   * @example
   * null
   */
  orientedLeId?: string;
  /**
   * @remarks
   * The entity ID of the cross-enterprise management object.
   * 
   * @example
   * null
   */
  orientedNbId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query only private contacts of the account. Default value: true.
   * 
   * @example
   * true
   */
  privateContact?: boolean;
  /**
   * @remarks
   * The name, email address, or mobile number used to filter contacts.
   * 
   * @example
   * keyword
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to query only shared contacts. Default value: false.
   * 
   * @example
   * false
   */
  sharedContact?: boolean;
  /**
   * @remarks
   * Specifies whether to display complete information.
   * 
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

