// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderAdvancedConfigurationResponseBodyAdvancedConfigurationDingtalkAdvancedConfig extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 钉钉一方应用的AppKey
   * 
   * @example
   * ding5xo9rg0csw3f6xxx
   */
  appKey?: string;
  /**
   * @remarks
   * IDaaS EIAM 钉钉一方应用的AppSecret
   * 
   * @example
   * ***
   */
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetIdentityProviderAdvancedConfigurationResponseBodyAdvancedConfiguration extends $dara.Model {
  /**
   * @remarks
   * 钉钉高阶配置
   */
  dingtalkAdvancedConfig?: GetIdentityProviderAdvancedConfigurationResponseBodyAdvancedConfigurationDingtalkAdvancedConfig;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方ID
   * 
   * @example
   * idp_na2rzpyc67zr7ixdfy35zgrxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_kpvmhktvun6u66dgpjh3l4wxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dingtalkAdvancedConfig: 'DingtalkAdvancedConfig',
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkAdvancedConfig: GetIdentityProviderAdvancedConfigurationResponseBodyAdvancedConfigurationDingtalkAdvancedConfig,
      identityProviderId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(this.dingtalkAdvancedConfig && typeof (this.dingtalkAdvancedConfig as any).validate === 'function') {
      (this.dingtalkAdvancedConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderAdvancedConfigurationResponseBody extends $dara.Model {
  advancedConfiguration?: GetIdentityProviderAdvancedConfigurationResponseBodyAdvancedConfiguration;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedConfiguration: 'AdvancedConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfiguration: GetIdentityProviderAdvancedConfigurationResponseBodyAdvancedConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.advancedConfiguration && typeof (this.advancedConfiguration as any).validate === 'function') {
      (this.advancedConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

