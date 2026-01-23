// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardRelationsResponseBodyData extends $dara.Model {
  notExistStandardIdList?: number[];
  /**
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      notExistStandardIdList: 'NotExistStandardIdList',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notExistStandardIdList: { 'type': 'array', 'itemType': 'number' },
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notExistStandardIdList)) {
      $dara.Model.validateArray(this.notExistStandardIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardRelationsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateStandardRelationsResponseBodyData;
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
      data: CreateStandardRelationsResponseBodyData,
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

