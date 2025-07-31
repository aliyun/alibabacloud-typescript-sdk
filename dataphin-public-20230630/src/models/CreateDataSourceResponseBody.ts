// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceResponseBodyCreateResult extends $dara.Model {
  /**
   * @example
   * 123
   */
  devDataSourceId?: number;
  /**
   * @example
   * 12345
   */
  prodDataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      devDataSourceId: 'DevDataSourceId',
      prodDataSourceId: 'ProdDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devDataSourceId: 'number',
      prodDataSourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  createResult?: CreateDataSourceResponseBodyCreateResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResult: 'CreateResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResult: CreateDataSourceResponseBodyCreateResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.createResult && typeof (this.createResult as any).validate === 'function') {
      (this.createResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

