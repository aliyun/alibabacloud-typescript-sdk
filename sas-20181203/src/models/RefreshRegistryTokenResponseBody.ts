// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshRegistryTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned token.
   * 
   * @example
   * 77ba3bf5-af95-4b77-aa94-***********
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
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

