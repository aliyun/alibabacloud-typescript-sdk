// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate a parameter value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see References [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The external unique identifier of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  cloudAccountExternalId?: string;
  /**
   * @remarks
   * The cloud account name.
   * 
   * @example
   * cloud_accout_xxxx
   */
  cloudAccountName?: string;
  /**
   * @remarks
   * The identity provider name.
   * 
   * @example
   * idaas-eiam-oidc-provider
   */
  cloudAccountProviderName?: string;
  /**
   * @remarks
   * The cloud account site. Valid values:
   * 
   * - global: international site.
   * - china_mainland: China site.
   * 
   * @example
   * china_mainland
   */
  cloudAccountSite?: string;
  /**
   * @remarks
   * The cloud account type. Valid values:
   * 
   * - alibaba_cloud: Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba_cloud(Alibaba Cloud)
   */
  cloudAccountVendorType?: string;
  /**
   * @remarks
   * The description of the cloud account.
   * 
   * @example
   * cloud_accout_description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cloudAccountExternalId: 'CloudAccountExternalId',
      cloudAccountName: 'CloudAccountName',
      cloudAccountProviderName: 'CloudAccountProviderName',
      cloudAccountSite: 'CloudAccountSite',
      cloudAccountVendorType: 'CloudAccountVendorType',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cloudAccountExternalId: 'string',
      cloudAccountName: 'string',
      cloudAccountProviderName: 'string',
      cloudAccountSite: 'string',
      cloudAccountVendorType: 'string',
      description: 'string',
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

