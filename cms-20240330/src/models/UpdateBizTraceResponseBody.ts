// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizTraceResponseBody extends $dara.Model {
  /**
   * @example
   * e339260ed64c95d
   */
  bizTraceId?: string;
  /**
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizTraceId: 'bizTraceId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTraceId: 'string',
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

