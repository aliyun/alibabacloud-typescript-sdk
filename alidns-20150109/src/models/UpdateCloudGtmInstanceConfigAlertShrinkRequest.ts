// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigAlertShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A list of alert configurations.
   */
  alertConfigShrink?: string;
  /**
   * @remarks
   * A list of alert notification groups.
   */
  alertGroupShrink?: string;
  /**
   * @remarks
   * The alert configuration mode for the instance. Valid values:
   * 
   * - global: The instance inherits the global alert configuration.
   * 
   * - instance_config: The instance uses a custom alert configuration.
   * 
   * @example
   * global
   */
  alertMode?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The client must generate a unique value for this parameter. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the domain name instance configuration. A GTM instance can have two configurations for the same access domain name if you configure both A and AAAA records. The ConfigId uniquely identifies a configuration.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @example
   * gtm-cn-zz11t58**0s
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      alertConfigShrink: 'AlertConfig',
      alertGroupShrink: 'AlertGroup',
      alertMode: 'AlertMode',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      alertConfigShrink: 'string',
      alertGroupShrink: 'string',
      alertMode: 'string',
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

