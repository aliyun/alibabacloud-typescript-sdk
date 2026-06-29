// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityClassifyResponseBodySecurityClassifyInfo extends $dara.Model {
  /**
   * @remarks
   * The classification abbreviation.
   * 
   * @example
   * test
   */
  abbreviation?: string;
  /**
   * @remarks
   * The data classification ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The security level abbreviation.
   * 
   * @example
   * lv_test
   */
  levelAbbreviation?: string;
  /**
   * @remarks
   * The security level index.
   * 
   * @example
   * 1
   */
  levelIndex?: number;
  /**
   * @remarks
   * The security level name.
   * 
   * @example
   * lv_teat
   */
  levelName?: string;
  /**
   * @remarks
   * The classification name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The classification path.
   * 
   * @example
   * /a/b/c
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      id: 'Id',
      levelAbbreviation: 'LevelAbbreviation',
      levelIndex: 'LevelIndex',
      levelName: 'LevelName',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      id: 'number',
      levelAbbreviation: 'string',
      levelIndex: 'number',
      levelName: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityClassifyResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
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
   * The data classification details.
   */
  securityClassifyInfo?: GetSecurityClassifyResponseBodySecurityClassifyInfo;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      securityClassifyInfo: 'SecurityClassifyInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      securityClassifyInfo: GetSecurityClassifyResponseBodySecurityClassifyInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.securityClassifyInfo && typeof (this.securityClassifyInfo as any).validate === 'function') {
      (this.securityClassifyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

