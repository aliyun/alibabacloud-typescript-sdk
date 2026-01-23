// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityClassifyResponseBodySecurityClassifyInfo extends $dara.Model {
  /**
   * @example
   * test
   */
  abbreviation?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * lv_test
   */
  levelAbbreviation?: string;
  /**
   * @example
   * 1
   */
  levelIndex?: number;
  /**
   * @example
   * lv_teat
   */
  levelName?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
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
  securityClassifyInfo?: GetSecurityClassifyResponseBodySecurityClassifyInfo;
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

