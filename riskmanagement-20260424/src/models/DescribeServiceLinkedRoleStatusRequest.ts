// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceLinkedRoleStatusRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * The service-linked role. Default value: **AliyunServiceRoleForSas**. Valid values:
   * 
   * - **AliyunServiceRoleForSas**: the service-linked role for Security Center (sas). Security Center uses this role to access your resources in other Alibaba Cloud services.
   * - **AliyunServiceRoleForSasCspm**: the service-linked role for Security Center - CSPM (sas-cspm). sas-cspm uses this role to access your resources in other Alibaba Cloud services.
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

export class DescribeServiceLinkedRoleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request.
   */
  sdkRequest?: DescribeServiceLinkedRoleStatusRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: DescribeServiceLinkedRoleStatusRequestSdkRequest,
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

