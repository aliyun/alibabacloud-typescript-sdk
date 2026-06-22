// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAegisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 825F5526-2A17-4279-857F-F790E9590171
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

