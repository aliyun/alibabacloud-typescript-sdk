// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSshKeyResponseBodySshKey extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * assssssssssss
   */
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      publicKey: 'publicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      publicKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  sshKey?: CreateSshKeyResponseBodySshKey;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      sshKey: 'sshKey',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sshKey: CreateSshKeyResponseBodySshKey,
      success: 'boolean',
    };
  }

  validate() {
    if(this.sshKey && typeof (this.sshKey as any).validate === 'function') {
      (this.sshKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

