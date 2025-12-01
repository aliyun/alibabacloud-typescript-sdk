// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageServiceCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * Authorization status.
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Cloud Monitoring - Alert authorization status.
   * 
   * @example
   * 1
   */
  cmAuthStatus?: number;
  /**
   * @remarks
   * The page number of the query result, default is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * End time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710641101123
   */
  endTime?: number;
  /**
   * @remarks
   * Cloud Security - Alert authorization status.
   * 
   * @example
   * 1
   */
  monitorAuthStatus?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710641101000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      cmAuthStatus: 'CmAuthStatus',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      monitorAuthStatus: 'MonitorAuthStatus',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'number',
      cmAuthStatus: 'number',
      currentPage: 'number',
      endTime: 'number',
      monitorAuthStatus: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

