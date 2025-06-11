// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOutlineBindingResponseBodyOutlineBinding } from "./DescribeOutlineBindingResponseBodyOutlineBinding";


export class DescribeOutlineBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The binding information.
   */
  outlineBinding?: DescribeOutlineBindingResponseBodyOutlineBinding;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      outlineBinding: 'OutlineBinding',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlineBinding: DescribeOutlineBindingResponseBodyOutlineBinding,
      requestId: 'string',
    };
  }

  validate() {
    if(this.outlineBinding && typeof (this.outlineBinding as any).validate === 'function') {
      (this.outlineBinding as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

