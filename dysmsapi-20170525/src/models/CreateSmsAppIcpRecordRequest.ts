// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsAppIcpRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ICP filing approval date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-05-22
   */
  appApprovalDate?: string;
  /**
   * @remarks
   * The ICP record/license number. The number must not exceed 15 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 浙B2-20080101
   */
  appIcpLicenseNumber?: string;
  /**
   * @remarks
   * The fileKey for the screenshot of your app\\"s ICP filing details.
   * 
   * 1. To look up your ICP filing, go to the [MIIT service platform](https://beian.miit.gov.cn/#/Integrated/recordQuery), search for your filing, and open its details page.
   * 
   * 2. The ICP filing screenshot must be uploaded to OSS and meet the following requirements:
   * 
   * - The filename cannot contain Chinese characters or special characters.
   * 
   * - The file must be an image in `jpg`, `png`, `gif`, or `jpeg` format. The file size cannot exceed 5 MB.
   * 
   * - The screenshot must show the full URL.
   * 
   * - For **Record Type**, select "APP".
   * 
   * - The **principal unit name** must be identical to the company or institution name on the qualification documents associated with the signature.
   * 
   * - The screenshot must clearly show the complete ICP record/license number.
   * 
   * - The **service name** must be identical to the **signature name**.
   * 
   * 3. To obtain the fileKey, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  appIcpRecordPic?: string;
  /**
   * @remarks
   * The principal unit name from your ICP filing. The name must not exceed 50 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云计算有限公司
   */
  appPrincipalUnitName?: string;
  /**
   * @remarks
   * APP实际运行截图osskey
   * 
   * @example
   * 示例值示例值示例值
   */
  appRuntimePic?: string;
  /**
   * @remarks
   * The service name from your ICP filing. The name must not exceed 15 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  appServiceName?: string;
  /**
   * @remarks
   * APP应用商店下载截图osskey
   * 
   * @example
   * 示例值示例值示例值
   */
  appStoreDownloadPic?: string;
  /**
   * @remarks
   * The app store link.
   * 
   * > - The link must start with `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * https://apps.apple.com/cn/app/阿里云/id981011420
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
      appRuntimePic: 'AppRuntimePic',
      appServiceName: 'AppServiceName',
      appStoreDownloadPic: 'AppStoreDownloadPic',
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
      appRuntimePic: 'string',
      appServiceName: 'string',
      appStoreDownloadPic: 'string',
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

