// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudAccountRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that ensures the idempotence of the request. The client must generate a unique token for each request. The token must consist of only ASCII characters and be no more than 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The name of the cloud account.
   * 
   * @example
   * cloud_accout_xxxx
   */
  cloudAccountName?: string;
  /**
   * @remarks
   * The name of the identity provider.
   * 
   * @example
   * idaas-eiam-oidc-provider
   */
  cloudAccountProviderName?: string;
  /**
   * @remarks
   * The site of the cloud account. Valid values:
   * 
   * - global: international site
   * 
   * - china_mainland: China mainland site
   * 
   * @example
   * china_mainland
   */
  cloudAccountSite?: string;
  /**
   * @remarks
   * The type of the cloud account. Valid value:
   * 
   * - alibaba_cloud: Alibaba Cloud
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
   * The ID of the instance.
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

