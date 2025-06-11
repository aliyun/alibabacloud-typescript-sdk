// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateFlowJSONAssetResponseBodyData } from "./UpdateFlowJsonassetResponseBodyData";


export class UpdateFlowJSONAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returns OK as normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateFlowJSONAssetResponseBodyData;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
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
      data: UpdateFlowJSONAssetResponseBodyData,
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

