// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMirrorFilterRuleAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 02EB8585-D4DC-4E29-A0F4-7C588C82863C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

