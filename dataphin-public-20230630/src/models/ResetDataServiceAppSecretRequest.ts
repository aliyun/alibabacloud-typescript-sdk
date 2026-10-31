// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDataServiceAppSecretRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @remarks
   * The new application key. The key must be globally unique and is used when you call API operations. The key must be 8 to 128 characters in length, and can contain digits, underscores (_), and hyphens (-). You can customize this parameter only when you use Alibaba Cloud API Gateway or the built-in gateway. If you use Apsara Stack Gateway, this parameter is ignored.
   * 
   * @example
   * 200000001
   */
  appKey?: string;
  /**
   * @remarks
   * The new application secret. If you leave this parameter empty, the system automatically generates a new AppSecret value. The secret must be 8 to 127 characters in length, and can contain digits, underscores (_), and hyphens (-). You can customize this parameter only when you use Alibaba Cloud API Gateway or the built-in gateway. If you use Apsara Stack Gateway, this parameter is ignored.
   * 
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
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command to reset the application key of a data service.
   * 
   * This parameter is required.
   */
  updateCommand?: ResetDataServiceAppSecretRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

