// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiCallTrendResponseBodyDataCallErrorImpactTrendList extends $dara.Model {
  /**
   * @remarks
   * The API IDs.
   */
  apiIdList?: number[];
  /**
   * @remarks
   * The number of APIs with call exceptions.
   * 
   * @example
   * 5
   */
  errorApiCount?: number;
  /**
   * @remarks
   * The number of affected applications.
   * 
   * @example
   * 1
   */
  errorAppCount?: number;
  /**
   * @remarks
   * The time scale in minutes. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-06-30 08:00
   */
  minute?: string;
  static names(): { [key: string]: string } {
    return {
      apiIdList: 'ApiIdList',
      errorApiCount: 'ErrorApiCount',
      errorAppCount: 'ErrorAppCount',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIdList: { 'type': 'array', 'itemType': 'number' },
      errorApiCount: 'number',
      errorAppCount: 'number',
      minute: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiIdList)) {
      $dara.Model.validateArray(this.apiIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiCallTrendResponseBodyDataCallErrorTrendList extends $dara.Model {
  /**
   * @remarks
   * The number of calls.
   * 
   * @example
   * 1021
   */
  callCount?: number;
  /**
   * @remarks
   * The number of call exceptions.
   * 
   * @example
   * 102
   */
  errorCount?: number;
  /**
   * @remarks
   * The minute. Format: yyyy_MMdd_HHmm.
   * 
   * @example
   * 3
   */
  minute?: string;
  static names(): { [key: string]: string } {
    return {
      callCount: 'CallCount',
      errorCount: 'ErrorCount',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCount: 'number',
      errorCount: 'number',
      minute: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiCallTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The call exception impact trends in ascending order by minute.
   */
  callErrorImpactTrendList?: GetDataServiceApiCallTrendResponseBodyDataCallErrorImpactTrendList[];
  /**
   * @remarks
   * The call exception trends in ascending order by minute.
   */
  callErrorTrendList?: GetDataServiceApiCallTrendResponseBodyDataCallErrorTrendList[];
  static names(): { [key: string]: string } {
    return {
      callErrorImpactTrendList: 'CallErrorImpactTrendList',
      callErrorTrendList: 'CallErrorTrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callErrorImpactTrendList: { 'type': 'array', 'itemType': GetDataServiceApiCallTrendResponseBodyDataCallErrorImpactTrendList },
      callErrorTrendList: { 'type': 'array', 'itemType': GetDataServiceApiCallTrendResponseBodyDataCallErrorTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.callErrorImpactTrendList)) {
      $dara.Model.validateArray(this.callErrorImpactTrendList);
    }
    if(Array.isArray(this.callErrorTrendList)) {
      $dara.Model.validateArray(this.callErrorTrendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiCallTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The access trends.
   */
  data?: GetDataServiceApiCallTrendResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDataServiceApiCallTrendResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

