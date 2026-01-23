// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityClassifyCatalogResponseBodyData extends $dara.Model {
  childCatalogFullPathList?: string[];
  classifyIdList?: number[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      childCatalogFullPathList: 'ChildCatalogFullPathList',
      classifyIdList: 'ClassifyIdList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childCatalogFullPathList: { 'type': 'array', 'itemType': 'string' },
      classifyIdList: { 'type': 'array', 'itemType': 'number' },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.childCatalogFullPathList)) {
      $dara.Model.validateArray(this.childCatalogFullPathList);
    }
    if(Array.isArray(this.classifyIdList)) {
      $dara.Model.validateArray(this.classifyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityClassifyCatalogResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DeleteSecurityClassifyCatalogResponseBodyData;
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
      data: DeleteSecurityClassifyCatalogResponseBodyData,
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

