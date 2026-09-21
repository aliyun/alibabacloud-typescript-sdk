// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests must use different tokens. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: performs only a dry run without executing the actual operation.
   * - false: performs the actual operation.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The service-linked role. Default value: **AliyunServiceRoleForSas**. Valid values:
   * 
   * - **AliyunServiceRoleForSas**: The service-linked role for Security Center (SAS). Security Center uses this role to access your resources in other Alibaba Cloud services.
   * - **AliyunServiceRoleForSasCspm**: The service-linked role for Security Center - Cloud Security Posture Management (CSPM) (sas-cspm). sas-cspm uses this role to access your resources in other Alibaba Cloud services.
   * 
   * @example
   * AliyunServiceRoleForSas
   */
  serviceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serviceLinkedRole: 'ServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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

