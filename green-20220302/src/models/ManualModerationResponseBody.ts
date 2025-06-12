// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManualModerationResponseBodyData } from "./ManualModerationResponseBodyData";


export class ManualModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: ManualModerationResponseBodyData;
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
      data: ManualModerationResponseBodyData,
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

