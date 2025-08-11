// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDashboardNl2sqlResponseBodyResult extends $dara.Model {
  authorities?: string[];
  /**
   * @example
   * 612b
   */
  dashboardName?: string;
  /**
   * @example
   * sasdas****sawdau
   */
  dashboardNl2sqlId?: string;
  /**
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
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  result?: QueryDashboardNl2sqlResponseBodyResult[];
  /**
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

