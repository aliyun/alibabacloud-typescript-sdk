// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManualModerationResultResponseBodyData } from "./ManualModerationResultResponseBodyData";


export class ManualModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: ManualModerationResultResponseBodyData;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
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
      code: 'number',
      data: ManualModerationResultResponseBodyData,
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

