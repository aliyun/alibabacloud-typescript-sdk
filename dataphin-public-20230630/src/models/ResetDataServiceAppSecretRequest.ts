// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDataServiceAppSecretRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @example
   * 200000001
   */
  appKey?: string;
  /**
   * @example
   * abc123456789
   */
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appKey: 'string',
      appSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDataServiceAppSecretRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: ResetDataServiceAppSecretRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: ResetDataServiceAppSecretRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

