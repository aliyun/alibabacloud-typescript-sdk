// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestEventPatternResponseBodyData } from "./TestEventPatternResponseBodyData";


export class TestEventPatternResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: TestEventPatternResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request failed.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96D7C0AB-DCE5-5E82-96B8-4725E1706BB1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. If the operation is successful, the value true is returned.
   * 
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
      code: 'string',
      data: TestEventPatternResponseBodyData,
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

