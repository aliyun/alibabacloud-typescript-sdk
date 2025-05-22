// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackGroupResponseBodyStackGroup } from "./GetStackGroupResponseBodyStackGroup";


export class GetStackGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the stack group.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the stack group.
   */
  stackGroup?: GetStackGroupResponseBodyStackGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroup: 'StackGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroup: GetStackGroupResponseBodyStackGroup,
    };
  }

  validate() {
    if(this.stackGroup && typeof (this.stackGroup as any).validate === 'function') {
      (this.stackGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

