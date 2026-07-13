// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmInstanceConfigFullInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique token for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance configuration. You can configure both A and AAAA records for the same access domain name and Global Traffic Manager (GTM) instance. In this case, the GTM instance has two configurations. The ConfigId uniquely identifies an instance configuration.
   * 
   * For more information, see [ListCloudGtmInstanceConfigs](https://help.aliyun.com/document_detail/2797349.html).
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3h****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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

