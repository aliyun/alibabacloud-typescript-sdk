// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 云账号唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  cloudAccountExternalId?: string;
  /**
   * @remarks
   * 云账号名称
   * 
   * @example
   * cloud_accout_xxxx
   */
  cloudAccountName?: string;
  /**
   * @remarks
   * 云账号提供商名称
   * 
   * @example
   * idaas-eiam-oidc-provider
   */
  cloudAccountProviderName?: string;
  /**
   * @remarks
   * 云账号类型
   * 
   * This parameter is required.
   */
  cloudAccountVendorType?: string;
  /**
   * @remarks
   * 云账号描述
   * 
   * @example
   * cloud_accout_description
   */
  description?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
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

