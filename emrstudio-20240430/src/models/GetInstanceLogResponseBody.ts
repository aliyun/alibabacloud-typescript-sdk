// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLogResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  lineNum?: number;
  /**
   * @example
   * "logs"
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      lineNum: 'lineNum',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineNum: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogResponseBody extends $dara.Model {
  /**
   * @example
   * p-123****
   */
  data?: GetInstanceLogResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInstanceLogResponseBodyData,
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

