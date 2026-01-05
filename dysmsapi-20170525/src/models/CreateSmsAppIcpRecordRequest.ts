// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsAppIcpRecordRequest extends $dara.Model {
  /**
   * @remarks
   * 审核通过日期，示例2025-09-01
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-05-22
   */
  appApprovalDate?: string;
  /**
   * @remarks
   * ICP备案/许可证号
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  appIcpLicenseNumber?: string;
  /**
   * @remarks
   * app-icp备案详情截图osskey
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  appIcpRecordPic?: string;
  /**
   * @remarks
   * 主办单位名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  appPrincipalUnitName?: string;
  /**
   * @remarks
   * app服务名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  appServiceName?: string;
  /**
   * @remarks
   * APP应用商店链接
   * 
   * This parameter is required.
   * 
   * @example
   * https://alicom-ops.alibaba-inc.com/dyorder/audit-domain/rule_manage
   */
  domain?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      appApprovalDate: 'AppApprovalDate',
      appIcpLicenseNumber: 'AppIcpLicenseNumber',
      appIcpRecordPic: 'AppIcpRecordPic',
      appPrincipalUnitName: 'AppPrincipalUnitName',
      appServiceName: 'AppServiceName',
      domain: 'Domain',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApprovalDate: 'string',
      appIcpLicenseNumber: 'string',
      appIcpRecordPic: 'string',
      appPrincipalUnitName: 'string',
      appServiceName: 'string',
      domain: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

