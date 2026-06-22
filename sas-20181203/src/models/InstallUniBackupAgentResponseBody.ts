// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallUniBackupAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. China Chinese Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 53ACA55D-0325-5056-A72D-D0EC0B9C****
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

