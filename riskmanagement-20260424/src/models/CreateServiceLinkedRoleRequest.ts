// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * The service-linked role. Default value: **AliyunServiceRoleForSas**. Valid values:
   * 
   * - **AliyunServiceRoleForSas**: the service-linked role for Security Center (SAS). Security Center uses this role to access your resources in other Alibaba Cloud services.
   * - **AliyunServiceRoleForSasCspm**: the service-linked role for Security Center - Cloud Security Posture Management (CSPM). SAS-CSPM uses this role to access your resources in other Alibaba Cloud services.
   * 
   * @example
   * AliyunServiceRoleForWebsiteBuildPublish
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

export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request.
   */
  sdkRequest?: CreateServiceLinkedRoleRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: CreateServiceLinkedRoleRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

