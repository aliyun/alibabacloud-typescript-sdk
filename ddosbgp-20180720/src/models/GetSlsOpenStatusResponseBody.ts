// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSlsOpenStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D01666F5-541B-4C78-98A6-D29E02DAAC7C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether Simple Log Service is activated for the current Alibaba Cloud account. Valid values:
   * 
   * - **true**: Simple Log Service is activated.
   * - **false**: Simple Log Service is not activated.
   * 
   * @example
   * true
   */
  slsOpenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsOpenStatus: 'SlsOpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsOpenStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

