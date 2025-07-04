// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLogEventResponseBodyData } from "./GetLogEventResponseBodyData";


export class GetLogEventResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetLogEventResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * BAC1ADB5-EEB5-5834-93D8-522E067AF8D9
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetLogEventResponseBodyData,
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

