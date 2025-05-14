// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaLiveInputResponseBodyInput } from "./GetMediaLiveInputResponseBodyInput";


export class GetMediaLiveInputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The input information.
   */
  input?: GetMediaLiveInputResponseBodyInput;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: GetMediaLiveInputResponseBodyInput,
      requestId: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

