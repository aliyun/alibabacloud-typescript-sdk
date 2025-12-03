// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectLabelResponseBodyResult extends $dara.Model {
  /**
   * @example
   * #006AD4
   */
  color?: string;
  description?: string;
  /**
   * @example
   * b5b5738b94954bc6aa5a293316ed1d24
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      description: 'description',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      description: 'string',
      id: 'string',
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

export class CreateProjectLabelResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * A7586FEB-E48D-5579-983F-74981FBFF627
   */
  requestId?: string;
  result?: CreateProjectLabelResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateProjectLabelResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

