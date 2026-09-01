// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The service-linked role. Default value: **AliyunServiceRoleForSas**. Valid values:
   * 
   * - **AliyunServiceRoleForSas**: the service-linked role for Security Center (SAS). Security Center uses this role to access your resources in other cloud services.
   * - **AliyunServiceRoleForSasCspm**: the service-linked role for Security Center - Cloud Security Posture Management (CSPM). SAS-CSPM uses this role to access your resources in other cloud services.
   * 
   * @example
   * AliyunServiceRoleForSas
   */
  serviceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceLinkedRole: 'ServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceLinkedRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

