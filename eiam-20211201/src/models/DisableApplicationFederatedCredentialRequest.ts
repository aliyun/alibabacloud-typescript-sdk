// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableApplicationFederatedCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * 应用联邦凭证Id
   * 
   * This parameter is required.
   * 
   * @example
   * afc_aaaaa1111
   */
  applicationFederatedCredentialId?: string;
  /**
   * @remarks
   * IDaaS的应用资源ID。
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
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
      applicationFederatedCredentialId: 'ApplicationFederatedCredentialId',
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentialId: 'string',
      applicationId: 'string',
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

