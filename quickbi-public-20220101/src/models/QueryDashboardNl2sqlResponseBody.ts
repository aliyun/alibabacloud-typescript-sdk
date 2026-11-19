// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDashboardNl2sqlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The permissions on the dashboard NL2SQL resource. If this parameter has a value and contains READ, it indicates that the user has NL2SQL permissions on the dashboard NL2SQL resource.
   */
  authorities?: string[];
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * @example
   * 612b
   */
  dashboardName?: string;
  /**
   * @remarks
   * The NL2SQL resource ID of the dashboard.
   * 
   * @example
   * sasdas****sawdau
   */
  dashboardNl2sqlId?: string;
  /**
   * @remarks
   * The user ID of the dashboard creator.
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
   * The request ID.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the API operation. Valid values:
   * 
   * - true: The request succeeded.
   * - false: The request failed.
   */
  result?: QueryDashboardNl2sqlResponseBodyResult[];
  /**
   * @remarks
   * Specifies whether the request is successful. Valid values: 
   * 
   * - true: The request succeeded.
   * - false: The request failed.
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

