// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveSDGsResponseBodyDataResult } from "./RemoveSdgsResponseBodyDataResult";


export class RemoveSDGsResponseBodyData extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  result?: RemoveSDGsResponseBodyDataResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: RemoveSDGsResponseBodyDataResult,
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

