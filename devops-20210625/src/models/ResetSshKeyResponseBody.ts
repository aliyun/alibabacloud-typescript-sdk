// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSshKeyResponseBodySshKey extends $dara.Model {
  /**
   * @example
   * 1212
   */
  id?: number;
  /**
   * @example
   * saaaaaaaaaaaaaaaa
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

export class ResetSshKeyResponseBody extends $dara.Model {
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
  sshKey?: ResetSshKeyResponseBodySshKey;
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
      sshKey: ResetSshKeyResponseBodySshKey,
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

