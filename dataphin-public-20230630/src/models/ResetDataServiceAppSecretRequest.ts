// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDataServiceAppSecretRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * Application ID
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @remarks
   * The new application key, which must be globally unique and is used when calling APIs.
   * The length is 8 to 128 English characters, and can contain digits, underscores (_), and hyphens (-).
   * Customization is supported only when using Alibaba Cloud API Gateway or the built-in gateway. This configuration is ignored when using a dedicated cloud gateway.
   * 
   * @example
   * 200000001
   */
  appKey?: string;
  /**
   * @remarks
   * The new application secret.
   * If this parameter is left empty, the system automatically generates a new AppSecret value.
   * The length is 8 to 127 English characters, and can contain digits, underscores (_), and hyphens (-).
   * Customization is supported only when using Alibaba Cloud API Gateway or the built-in gateway. This configuration is ignored when using a dedicated cloud gateway.
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
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Reset Data Service Application Key
   * 
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

