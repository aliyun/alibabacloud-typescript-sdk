// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAuthorizedAppsByGroupIdResponseBodyAppInfoList extends $dara.Model {
  /**
   * @remarks
   * AppKey
   * 
   * @example
   * 202212
   */
  appKey?: number;
  /**
   * @remarks
   * AppId
   * 
   * @example
   * 1021
   */
  id?: number;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAuthorizedAppsByGroupIdResponseBody extends $dara.Model {
  appInfoList?: GetDataServiceAuthorizedAppsByGroupIdResponseBodyAppInfoList[];
  /**
   * @example
   * OK
   */
  code?: string;
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
      appInfoList: 'AppInfoList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': GetDataServiceAuthorizedAppsByGroupIdResponseBodyAppInfoList },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.appInfoList)) {
      $dara.Model.validateArray(this.appInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

