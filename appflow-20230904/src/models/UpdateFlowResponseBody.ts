// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A053FC9D-AB9D-5258-9355-8FA57EE888C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

