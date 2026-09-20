// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckFileDeploymentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used for subsequent troubleshooting.
   * 
   * @example
   * 86d5a5ac-0cc0-4c5f-a374-a15713b252ab
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

