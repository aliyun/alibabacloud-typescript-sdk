// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactQueryPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The client application name.
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
   * The currently switched enterprise.
   * 
   * @example
   * null
   */
  orientedLeId?: string;
  /**
   * @remarks
   * The marketplace ID of the cross-enterprise management object.
   * 
   * @example
   * null
   */
  orientedNbId?: string;
  /**
   * @remarks
   * Page number, default 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size, default 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The flag for querying private contacts. The default value of this parameter is set to false for this API.
   * 
   * @example
   * false
   */
  privateContact?: boolean;
  /**
   * @remarks
   * Name, email, or mobile number.
   * 
   * @example
   * 1xxxxxxxxxx
   */
  query?: string;
  /**
   * @remarks
   * Whether it is a shared contact. The default value of this parameter is set to true for this API.
   * 
   * @example
   * true
   */
  sharedContact?: boolean;
  /**
   * @remarks
   * Whether to display complete information.
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

