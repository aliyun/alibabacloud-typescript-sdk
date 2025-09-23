// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * SyntaxError
   */
  errorMessage?: string;
  /**
   * @example
   * 2615
   */
  id?: number;
  /**
   * @example
   * test_name
   */
  name?: string;
  /**
   * @example
   * FINISH
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      id: 'number',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ExecuteTaskResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExecuteTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
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

