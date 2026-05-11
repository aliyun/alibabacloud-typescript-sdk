// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAsrConfigResponseBodyData extends $dara.Model {
  affectedRows?: number;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAsrConfigResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ModifyAsrConfigResponseBodyData;
  /**
   * @example
   * Not Found
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifyAsrConfigResponseBodyData,
      errorMsg: 'string',
      httpStatusCode: 'number',
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

