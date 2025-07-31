// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectWhiteListsResponseBodyWhiteLists extends $dara.Model {
  /**
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * ip
   * 
   * @example
   * 10.1.0.2
   */
  ip?: string;
  /**
   * @example
   * 5432
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ip: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectWhiteListsResponseBody extends $dara.Model {
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
  whiteLists?: GetProjectWhiteListsResponseBodyWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      whiteLists: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      whiteLists: { 'type': 'array', 'itemType': GetProjectWhiteListsResponseBodyWhiteLists },
    };
  }

  validate() {
    if(Array.isArray(this.whiteLists)) {
      $dara.Model.validateArray(this.whiteLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

