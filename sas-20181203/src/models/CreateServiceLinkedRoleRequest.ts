// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The service-linked role. Default value: **AliyunServiceRoleForSas**. Valid values:
   * 
   * - **AliyunServiceRoleForSas**: the service-linked role for Security Center (SAS). Security Center uses this role to access your resources in other Alibaba Cloud services.
   * - **AliyunServiceRoleForSasCspm**: the service-linked role for Security Center - Cloud Security Posture Management (CSPM) (sas-cspm). sas-cspm uses this role to access your resources in other Alibaba Cloud services.
   * 
   * @example
   * AliyunServiceRoleForSas
   */
  serviceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      serviceLinkedRole: 'ServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

