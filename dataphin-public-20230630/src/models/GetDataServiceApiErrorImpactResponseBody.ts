// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiErrorImpactResponseBodyDataErrorApiList extends $dara.Model {
  /**
   * @example
   * test
   */
  apiName?: string;
  /**
   * @example
   * 2012
   */
  appId?: number;
  /**
   * @example
   * 100
   */
  errorCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      appId: 'AppId',
      errorCount: 'ErrorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      appId: 'number',
      errorCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiErrorImpactResponseBodyDataErrorAppList extends $dara.Model {
  /**
   * @remarks
   * appId
   * 
   * @example
   * 1021
   */
  appId?: number;
  /**
   * @remarks
   * appKey
   * 
   * @example
   * 100211
   */
  appKey?: number;
  /**
   * @example
   * app1
   */
  appName?: string;
  /**
   * @example
   * 10
   */
  errorCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      errorCount: 'ErrorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appKey: 'number',
      appName: 'string',
      errorCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiErrorImpactResponseBodyData extends $dara.Model {
  errorApiList?: GetDataServiceApiErrorImpactResponseBodyDataErrorApiList[];
  errorAppList?: GetDataServiceApiErrorImpactResponseBodyDataErrorAppList[];
  static names(): { [key: string]: string } {
    return {
      errorApiList: 'ErrorApiList',
      errorAppList: 'ErrorAppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorApiList: { 'type': 'array', 'itemType': GetDataServiceApiErrorImpactResponseBodyDataErrorApiList },
      errorAppList: { 'type': 'array', 'itemType': GetDataServiceApiErrorImpactResponseBodyDataErrorAppList },
    };
  }

  validate() {
    if(Array.isArray(this.errorApiList)) {
      $dara.Model.validateArray(this.errorApiList);
    }
    if(Array.isArray(this.errorAppList)) {
      $dara.Model.validateArray(this.errorAppList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiErrorImpactResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetDataServiceApiErrorImpactResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
      data: GetDataServiceApiErrorImpactResponseBodyData,
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

