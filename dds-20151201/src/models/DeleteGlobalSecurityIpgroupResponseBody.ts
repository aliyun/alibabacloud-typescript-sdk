// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGlobalSecurityIPGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * 2F42BB4E-461F-5B55-A37C-53B1141C****
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

