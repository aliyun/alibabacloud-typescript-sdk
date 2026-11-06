// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySearchParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. A successful response indicates that the parameter modification task has been accepted, but does not indicate that the parameters have taken effect.
   * 
   * @example
   * e3a24663-eee5-4009-b635-2e9e8d052e74
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

