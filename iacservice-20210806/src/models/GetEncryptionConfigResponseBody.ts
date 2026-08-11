// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEncryptionConfigResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The key alias.
   * 
   * @example
   * alias/default
   */
  alias?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 561786482014xxxx
   */
  creator?: string;
  /**
   * @remarks
   * The key ARN.
   * 
   * @example
   * acs:kms:ap-southeast-6:561786482014xxxx:key/5f2fe70a-d110-44cc-990f-706eb20fxxxx
   */
  keyArn?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 5f2fe70a-d110-44cc-990f-706eb20fxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The key status. Valid values:
   * - Enabled
   * - Disabled
   * - PendingDeletion
   * - PendingImport
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      creator: 'creator',
      keyArn: 'keyArn',
      keyId: 'keyId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      creator: 'string',
      keyArn: 'string',
      keyId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEncryptionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object key.
   */
  config?: GetEncryptionConfigResponseBodyConfig;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1A662F56-CA76-55F6-869D-7F26293B8E67
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetEncryptionConfigResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

