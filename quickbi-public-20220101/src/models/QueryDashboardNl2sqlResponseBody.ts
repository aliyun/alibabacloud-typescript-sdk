// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDashboardNl2sqlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * If this parameter has a value and includes "READ", it indicates that the user has read permission for the dashboard question resource.
   */
  authorities?: string[];
  /**
   * @remarks
   * Dashboard name
   * 
   * @example
   * 612b
   */
  dashboardName?: string;
  /**
   * @remarks
   * Dashboard question resource ID
   * 
   * @example
   * sasdas****sawdau
   */
  dashboardNl2sqlId?: string;
  /**
   * @remarks
   * UserID of the dashboard creator
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      authorities: 'Authorities',
      dashboardName: 'DashboardName',
      dashboardNl2sqlId: 'DashboardNl2sqlId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorities: { 'type': 'array', 'itemType': 'string' },
      dashboardName: 'string',
      dashboardNl2sqlId: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorities)) {
      $dara.Model.validateArray(this.authorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDashboardNl2sqlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  /**
   * @remarks
   * Result of the API execution. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
   */
  result?: QueryDashboardNl2sqlResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values: 
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryDashboardNl2sqlResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

