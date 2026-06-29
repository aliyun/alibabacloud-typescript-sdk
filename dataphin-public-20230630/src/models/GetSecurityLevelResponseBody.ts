// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityLevelResponseBodySecurityLevelInfo extends $dara.Model {
  /**
   * @remarks
   * The abbreviated name of the data classification level.
   * 
   * @example
   * test
   */
  abbreviation?: string;
  /**
   * @remarks
   * The description of the data classification level.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The sensitivity level of the data classification.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The name of the data classification level.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of data categorization IDs associated with the current data classification level.
   */
  relatedClassifyIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      description: 'Description',
      index: 'Index',
      name: 'Name',
      relatedClassifyIdList: 'RelatedClassifyIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      description: 'string',
      index: 'number',
      name: 'string',
      relatedClassifyIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.relatedClassifyIdList)) {
      $dara.Model.validateArray(this.relatedClassifyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityLevelResponseBody extends $dara.Model {
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
   * The details of the backend response exception.
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
   * The data classification level details.
   */
  securityLevelInfo?: GetSecurityLevelResponseBodySecurityLevelInfo;
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
      securityLevelInfo: 'SecurityLevelInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      securityLevelInfo: GetSecurityLevelResponseBodySecurityLevelInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.securityLevelInfo && typeof (this.securityLevelInfo as any).validate === 'function') {
      (this.securityLevelInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

