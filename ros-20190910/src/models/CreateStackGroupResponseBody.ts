// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * 2c036e78-9e82-428e-afd6-177f5d04****
   */
  stackGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroupId: 'StackGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

